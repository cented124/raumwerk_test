"""Load supplied presentation data into a fresh, isolated development database only."""
import json
import os
from pathlib import Path
from sqlalchemy import select, func
from app.config import Config
from app.db import Session, Setting, User, Property
from app.main import initialize
from app.templates import Manifest

if os.environ.get('RAUMWERK_COMPANY_PREVIEW') != '1' or os.environ.get('DELIVERY_WORKER') != '0':
    raise SystemExit('Nur für isolierte Entwicklung mit deaktiviertem Zustellworker.')
root = Path(__file__).resolve().parents[2]
config = Config.model_validate_json((root / 'company.json').read_text())
manifest = Manifest.model_validate_json((root / 'manifest.json').read_text())
initialize()
with Session() as db:
    marker = db.get(Setting, 'company_preview')
    if marker:
        print('Vorhandene Entwicklungskonfiguration bleibt erhalten.')
    else:
        default = Config().model_dump()
        if any(db.scalar(select(func.count()).select_from(model)) for model in (User, Property)) or any(db.get(Setting, key).value != default for key in ('draft', 'published')):
            raise SystemExit('Bestehende Instanz bleibt unverändert. Frisches DATA_DIR wählen.')
        config.template = manifest.id
        for key in ('draft', 'published'):
            db.get(Setting, key).value = config.model_dump()
        db.add(Setting(key='template_' + manifest.id, value=manifest.model_dump()))
        db.add(Setting(key='company_preview', value={'version': 1}))
        db.commit()
        print('Firmenprofil geladen. Keine Immobilien erfunden; keine Zustellung aktiviert.')
