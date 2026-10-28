#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
export PYTHONPATH="$PWD/backend"
export DATA_DIR="$PWD/.local/company-preview"
export DATABASE_URL="sqlite:///$DATA_DIR/app.db"
export PUBLIC_ORIGIN=http://localhost:3000
export API_INTERNAL_URL=http://127.0.0.1:8000
export DELIVERY_WORKER=0 RAUMWERK_COMPANY_PREVIEW=1 NEXT_TELEMETRY_DISABLED=1
mkdir -p "$DATA_DIR"
.venv/bin/alembic -c backend/alembic.ini upgrade head
.venv/bin/python scripts/prepare-company.py
.venv/bin/uvicorn app.main:app --host 127.0.0.1 --port 8000 --no-access-log &
api_pid=$!
trap 'kill "$api_pid" 2>/dev/null || true' EXIT INT TERM
npm --prefix frontend run dev
