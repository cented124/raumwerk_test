# Prüfbericht · 28. Oktober 2026

## Ausgeführte Prüfungen

| Prüfung | Ergebnis |
| --- | --- |
| `PYTHONPATH=backend .venv/bin/pytest backend/tests -q` in `reference` | 37 bestanden; eine DeprecationWarning aus Starlette/AnyIO |
| `npm --prefix frontend run typecheck` | Bestanden |
| `npm --prefix frontend run build` | Bestanden, Next.js 16.4.3 / React 19, Produktionsbuild |
| Ursprüngliche Playwright-Suite | 16 bestanden, Desktop und Mobil |
| Neue `perspective.spec.ts` | 4 bestanden, Desktop und Mobil |
| Manifest | JSON-Schema und Backend-`Manifest`-Validierung erfolgreich; Version 2, sechs Seitentypen und vier Aktionen |
| Firmenprofil | Backend-`Config`-Validierung erfolgreich |
| Konkrete Firmenansicht | Startseite und SEO-Firmenname geprüft, neun öffentliche Unterseiten HTTP 200; deaktivierte Selbstauskunft HTTP 404 |
| Responsive | Desktop 1440 px und Mobil 360 px geprüft, kein horizontales Überlaufen; Screenshots unter `design/` |
| Entwicklungsstart | `dev-company.sh` startet API und Frontend; erneuter Seed erhält vorhandene Entwicklungskonfiguration |
| Referenzschutz | Backend, Admin, Auth, Outbox und npm-Lockdatei bytegleich mit dem gelieferten Archiv |

Beim ersten Lauf der erweiterten Suite waren 18 Tests erfolgreich; zwei neue Testfälle scheiterten an einem mehrdeutigen Testselektor (Next.js besitzt ebenfalls einen `role=alert` für Routenankündigungen). Der Selektor wurde auf das Formular begrenzt. Anschließend bestanden alle vier neuen Testfälle. Die ursprünglichen 16 Tests waren in beiden vollständigen Läufen erfolgreich; es wurden keine Assertions deaktiviert. Nach der letzten CSS-Anpassung wurden Typecheck und Produktionsbuild erneut erfolgreich ausgeführt.

## Abnahmecheckliste vollständig durchgegangen

| Anforderung aus CHECKLIST.md | Befund / Nachweis |
| --- | --- |
| Firmendaten und Impressum aus Config | Firmenprofil als Daten in `company.json`; keine Firmennamen/-adressen in React eingebaut. Entwicklungshelfer lädt das Profil in die Datenbank. |
| Alle erforderlichen Seitentypen | Referenzrenderer erhalten; konkrete aktiven Firmenseiten geprüft. Selbstauskunft bewusst deaktiviert. |
| Abschnittsreihenfolge, Module und direkte Routen | Config-gesteuerter Renderer und serverseitige 404-Regeln erhalten; Anker folgen sichtbaren Sektionen. Modul-/Routenprüfungen durch bestehende Suite. |
| Öffentliche Angebote, Filter, Sortierung, Pagination | Bestehende `/api/public/properties`-Anbindung erhalten; Veröffentlichung, Objektanfrage und Rücknahme mit synthetischen Objekten in isolierter Browserinstanz geprüft. Firmenansicht zeigt den Leerzustand, keine erfundenen Angebote. |
| Formularfelder, Telefonpflicht, Datenschutz, Honeypot, Idempotenz, Zuordnung | Bestehender Vertrag erhalten; Tests prüfen Seitentyp, Objekt-ID, Annahme und wiederverwendeten Idempotenzschlüssel bei Fehlern. |
| Erfolg ausschließlich bei Annahme | Öffentliche Anfrage verlangt nun ausdrücklich HTTP 202. 200, 404, 409, 413, 422 und 429 simuliert; keine Erfolgsmeldung, Eingaben und Schlüssel bleiben erhalten. Annahme wird nicht als Zustellung bezeichnet. Netzfehler behalten Eingaben und erhalten einen deutschen Verbindungshinweis. |
| PDF-Download und private Rückgabe | Bestehende Referenzimplementierung und Backend-Zugriffsprüfungen unverändert. Im Firmenprofil deaktiviert, keine vertraulichen Rückgaben veröffentlicht. |
| Private Vorschau | Authentifizierte Referenzvorschau und `preview=1`-Navigation erhalten; Versand deaktiviert. Zusätzlicher Schutz verhindert auch Analyseereignisse beim Vorschau-Objektanfragebutton. |
| Lade-/Leer-/Fehler-/Annahmezustände | Referenzzustände erhalten, konkrete leere Firmenansicht geprüft; HTTP-Fehler und Retry im Browser getestet. |
| Mobil, Tastatur, Labels, Kontrast | 360-px-Prüfung und semantische Referenzformulare; sichtbarer Fokus, beschrifteter Menübutton mit `aria-expanded`/`aria-controls`, dunklere Textfarben. Sichtprüfung durchgeführt; kein vollständiges Screenreader- oder WCAG-Audit behauptet. |
| SEO, 404, Admin, Auth, Rollen | Server-Config für SEO erhalten; Promise-Parameter nach mitgelieferter Next-Dokumentation berücksichtigt. Rollen/Authentifizierung per Backendtests, Admin-/Login-/Logout-/Studioabläufe per Browser geprüft. |
| Keine Geheimnisse / Fremdtracker / Remote-Scripts | Keine neuen externen Abhängigkeiten; lokale Schriften und eigene Grafik. `.env`, Datenbanken, Schlüssel, Testausgaben und Laufzeitdaten sind ignoriert. Vorhandene Same-Origin-Analyse bleibt modulabhängig. |
| TypeScript, Build, Backend und Browser | Alle genannten Prüfungen erfolgreich, siehe Ergebnisse oben. |

## Offene Punkte vor öffentlichem Betrieb

- **Rechtliche Freigabe fehlt:** Das Originalprofil enthält `legal.reviewed=false`, unvollständige Register-/Adressangaben und einen ausdrücklichen Datenschutz-Prüftext. Diese Inhalte wurden nicht erfunden oder als rechtssicher ausgegeben.
- **Telegram nicht eingerichtet:** Das Firmenprofil wünscht Telegram. Betriebliche Zugangsdaten fehlen; diese gehören in den geschützten Admin, nicht in Git. Alle Entwicklungs-/Browsertests liefen mit ausgeschaltetem Zustellworker; Backend-Zustelltests nutzen lokale Simulationen. Keine echten externen Nachrichten wurden versendet.
- **Keine echten Angebote vorhanden:** Sie werden später im Admin gepflegt und bewusst veröffentlicht. Das System zeigt bis dahin den ehrlichen Leerzustand.
- **Kein Produktionshosting eingerichtet:** GitHub enthält den Quellcode. Domain, HTTPS, sichere Cookies, Produktionsdatenbank und Veröffentlichung des fachlich geprüften Firmenprofils sind separate Betriebsschritte gemäß README und Referenz-Deploymentanleitung.
- **Manifestgrenze:** Datenimport installiert nur das Theme; die freie Gestaltung und Westminster-Grafik erfordern den dokumentierten Quellcodeweg.
