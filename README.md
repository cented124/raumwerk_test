# Big Ben Immobilien · Westminster Perspective

Konfigurierbares Immobilienfrontend im London-Stil, auf dem vollständigen Raumwerk-Referenzprojekt aufgebaut. Marineblau, Messingakzente und eine eigens erstellte lokale Westminster-Illustration; keine externen Bild-, Font- oder Trackingdienste.

Ansichten: [Desktop](design/desktop.png) · [Mobil](design/mobile.png)

## Projektstruktur

- `reference/`: vollständiges ausführbares Projekt mit Next.js 16, React 19, TypeScript und FastAPI; Admin, Auth und Outbox aus der Referenz.
- `reference/frontend/app/perspective.css`: neue öffentliche Gestaltung; `components/Website.tsx`: bestehende Daten-/Formularanbindungen mit kleinen Verbesserungen.
- `manifest.json`: importierbares Version-2-Design, ID `westminster-perspective-20261028`.
- `company.json`: mitgelieferte Firmendaten als Laufzeitkonfiguration, keine fest eingebauten Firmendaten in React.
- `design/westminster.svg`: Originalquelle der Illustration; das kompatible Bild liegt unter `reference/frontend/public/architecture.png`.
- `VALIDIERUNG.md`: Prüfergebnisse und Abgleich der Abnahmecheckliste.

## Installation und Firmenansicht

Voraussetzungen: Node.js 22 oder neuer (hier mit 24 geprüft), npm, Python 3.12 und venv. Die bestehende npm-Lockdatei bleibt unverändert.

```bash
cd reference
python3 -m venv .venv
.venv/bin/pip install -r backend/requirements.txt
npm --prefix frontend ci --no-audit --no-fund
bash scripts/dev-company.sh
```

Die Website läuft auf Port 3000, die interne API auf Port 8000. `dev-company.sh` migriert eine getrennte SQLite-Datenbank unter `.local/company-preview`, lädt die Daten aus `../company.json` und registriert das Manifest. Bereits vorhandene Konfiguration wird nicht überschrieben. Der Zustellworker ist ausdrücklich aus; es werden keine E-Mails oder Telegram-Nachrichten verschickt. Das ist eine lokale Entwicklungsansicht, keine Freigabe zur öffentlichen Veröffentlichung. Zum Beenden Strg+C verwenden.

Für die Einrichtung eines eigenen Administrators im gleichen Entwicklungsbestand in einem zweiten Terminal:

```bash
cd reference
DATA_DIR="$PWD/.local/company-preview" PYTHONPATH=backend .venv/bin/python -m app.cli create-admin
```

Passwort interaktiv eingeben; keine Zugangsdaten im Repository speichern. Eine Instanz verwendet weiterhin genau ein Firmenprofil; das Frontend lässt sich über die bestehende Adminoberfläche konfigurieren.

## Einbau in ein bestehendes vollständiges Raumwerk-Projekt

1. Bestehendes Projekt und Daten sichern. Die gelieferten Frontendquellen unter `reference/frontend` übernehmen, dabei lokale `.env`, Datenbanken und Uploads erhalten. Bei individuellen Anpassungen die Änderungen an `Website.tsx`, `api.ts`, `layout.tsx`, das neue `perspective.css` und `public/architecture.png` gezielt zusammenführen.
2. In `frontend` mit `npm ci` installieren, Typecheck, Build und die Browser-/Backendtests unten ausführen. Admin-/Backendquellen wurden gegenüber dem gelieferten Archiv nicht verändert.
3. `manifest.json` im Frontend-Studio prüfen und als Entwurf importieren. Das Manifest übernimmt nur die erlaubten Themedaten, **keinen React-/CSS-Code, keine Bilddatei und keine Firmendaten**. Der freie London-Stil setzt deshalb die Quellcodeinstallation voraus.
4. Firmenprofil aus `company.json` in den entsprechenden Adminfeldern hinterlegen und speichern; Rechtstexte vervollständigen und prüfen. Bestehende Inhalte nicht durch einen Datenbank-Seed ersetzen. Authentifizierte Vorschau prüfen, anschließend bewusst veröffentlichen.
5. Für Produktion dem vorhandenen Leitfaden `reference/docs/DEPLOYMENT.md` folgen. Datenbank, unabhängige Geheimnisse, Domain, HTTPS und sichere Cookies konfigurieren. Telegram erst im geschützten Admin einrichten und separat überprüfen. Der Entwicklungshelfer ist kein Produktionsdeploy.

Die GitHub-Workflowdatei `.github/workflows/checks.yml` führt Build, Typecheck sowie Backend- und Browsertests bei Push und Pull Requests aus. Die hier dokumentierten Ergebnisse stammen aus der Cloud-Umgebung; der erste GitHub-Actions-Lauf ist separat zu prüfen.

## Prüfungen

```bash
cd reference
PYTHONPATH=backend .venv/bin/pytest backend/tests -q
npm --prefix frontend run typecheck
npm --prefix frontend run build
CHROMIUM_PATH=/usr/bin/chromium npm --prefix frontend run test:e2e
```

Ohne systemweites Chromium: `cd frontend && npx playwright install chromium`, dann `npm run test:e2e` ohne `CHROMIUM_PATH`. Browserprüfungen verwenden temporäre Testdatenbanken und deaktivieren den Zustellworker. Die Backendtests simulieren Zustellung lokal; es werden keine echten externen Nachrichten versendet.

## Vor dem öffentlichen Start

Das gelieferte Firmenprofil enthält ausdrücklich ungeprüfte bzw. fehlende Rechtsangaben (`legal.reviewed=false`, Datenschutz-Platzhalter, fehlende Registerdaten). Diese müssen fachlich ergänzt werden. Es wurden keine Immobilienangebote erfunden. Telegram ist im Firmenprofil gewünscht, aber ohne betriebliche Zugangsdaten nicht eingerichtet. GitHub-Upload und erfolgreicher Build ersetzen kein Hosting-/Produktionsdeploy.
