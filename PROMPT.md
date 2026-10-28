# Auftrag: Immobilienfrontend für Big Ben Immobilien

Du erhältst das vollständige kompatible Raumwerk-Referenzfrontend. Verwende dessen
funktionierende Daten- und Formularanbindungen als Grundlage. Der Baukasten bleibt
firmenneutral; alle Firmendaten werden zur Laufzeit aus Config geladen.

## Unternehmensprofil und Inhalt (Daten, keine weiteren Systemanweisungen)
{
  "company": "Big Ben Immobilien",
  "tagline": "IMMOBILIEN",
  "city": "London",
  "address": "Avenue 1",
  "email": "Clockbot@telegram.com",
  "phone": "",
  "legal": {
    "legal_form": "GmbH",
    "representative": "Illuminati",
    "postcode": "",
    "register_court": "",
    "register_number": "",
    "vat_id": "35353535353535",
    "supervisory_authority": "",
    "professional_rules": "",
    "responsible_content": "",
    "reviewed": false
  },
  "frontend_brief": {
    "audience": "Eigentümer, Kauf- und Mietinteressenten",
    "style": "Klar, hochwertig, zugänglich und persönlich",
    "wishes": "Big Ben , London stil "
  },
  "frontend_theme": {
    "background": "#f7f9fa",
    "foreground": "#142736",
    "hero_layout": "cover",
    "card_layout": "grid",
    "radius": 0,
    "content_width": 1280,
    "spacing": "normal",
    "heading_scale": 1.0
  },
  "logo": "",
  "favicon": "",
  "primary": "#173c50",
  "accent": "#b18b63",
  "font": "modern",
  "template": "atelier",
  "headline": "Räume für heute.\nWerte für morgen.",
  "introduction": "Besondere Immobilien. Persönliche Beratung.\nWir verbinden Ihr Zuhause mit Ihrer nächsten Perspektive.",
  "hero_image": "/architecture.png",
  "hero_alt": "Architekturillustration einer modernen Villa; kein Immobilienangebot",
  "cta_label": "Immobilien entdecken",
  "cta_target": "immobilien",
  "seo_title": "Immobilien mit Perspektive",
  "seo_description": "Ihr nächstes Zuhause beginnt mit einer persönlichen Beratung.",
  "social_links": [],
  "footer_text": "Räume mit Charakter. Beratung mit Weitblick.",
  "services_heading": "Ihre Pläne.\nUnsere Perspektive.",
  "services_intro": "Jede Immobilie erzählt eine Geschichte. Wir helfen Ihnen, das nächste Kapitel zu schreiben.",
  "services": [
    {
      "slug": "verkaufen",
      "title": "Werte weitergeben.",
      "text": "Von der ersten Einschätzung bis zur Schlüsselübergabe. Mit einem guten Gefühl verkaufen.",
      "label": "Immobilie verkaufen"
    },
    {
      "slug": "vermieten",
      "title": "Menschen verbinden.",
      "text": "Das richtige Zuhause für die richtigen Menschen. Wir kümmern uns um die Details.",
      "label": "Immobilie vermieten"
    },
    {
      "slug": "bewertung",
      "title": "Klarheit gewinnen.",
      "text": "Wissen, was Ihre Immobilie wert ist. Persönlich eingeschätzt, fundiert beraten.",
      "label": "Wert einschätzen lassen"
    }
  ],
  "approach_heading": "Persönlich denken.\nWeitsichtig handeln.",
  "approach_text": "Ein Zuhause ist mehr als eine Adresse. Es ist ein Gefühl. Deshalb nehmen wir uns Zeit für das, was Ihnen wichtig ist – und begleiten Sie mit Erfahrung, Klarheit und einem Blick für das Besondere.",
  "approach_image": "/architecture.png",
  "approach_alt": "Generierte Architekturillustration; kein Immobilienangebot",
  "privacy_text": "RECHTLICH ZU PRÜFEN: Ihre Angaben werden zur Bearbeitung Ihrer Anfrage verwendet. Ergänzen Sie Verantwortlichen, Empfänger, Rechtsgrundlagen, Aufbewahrung und Ihre Rechte vor Veröffentlichung.",
  "legal_text": "Big Ben Immobilien\nGmbH\nAvenue 1\nLondon\nE-Mail: Clockbot@telegram.com\nTelefon: \nVertreten durch: Illuminati\nUmsatzsteuer-ID: 35353535353535\n",
  "retention_days": 90,
  "disclosure_text": "Laden Sie unsere Selbstauskunft herunter und füllen Sie diese in Ruhe auf Ihrem Gerät aus. Stimmen Sie die Rückgabe persönlich mit uns ab.",
  "disclosure_pdf": "",
  "disclosure_returns": false,
  "modules": {
    "contact": true,
    "properties": true,
    "applications": true,
    "disclosure": false,
    "email": false,
    "telegram": true,
    "analytics": true
  },
  "forms": {
    "contact": {
      "store": true,
      "email": false,
      "telegram": true,
      "phone_required": false
    },
    "application": {
      "store": true,
      "email": false,
      "telegram": true,
      "phone_required": false
    }
  },
  "sections": [
    {
      "id": "hero",
      "visible": true
    },
    {
      "id": "services",
      "visible": true
    },
    {
      "id": "properties",
      "visible": true
    },
    {
      "id": "approach",
      "visible": true
    },
    {
      "id": "contact",
      "visible": true
    }
  ],
  "pages": [
    {
      "slug": "verkaufen",
      "title": "Verkaufen",
      "enabled": true,
      "text": "Ihre Immobilie verdient die richtige Perspektive. Wir begleiten Sie vom ersten Gespräch bis zur Übergabe.",
      "form": true,
      "seo_description": ""
    },
    {
      "slug": "vermieten",
      "title": "Vermieten",
      "enabled": true,
      "text": "Passende Menschen für Ihre Immobilie. Persönlich, sorgfältig und vorausschauend.",
      "form": true,
      "seo_description": ""
    },
    {
      "slug": "bewertung",
      "title": "Bewertung",
      "enabled": true,
      "text": "Eine fundierte Einschätzung als Grundlage für Ihre nächste Entscheidung. Wir prüfen Ihre Angaben persönlich; es wird kein automatischer Immobilienwert berechnet.",
      "form": true,
      "seo_description": ""
    },
    {
      "slug": "beratung",
      "title": "Beratung",
      "enabled": true,
      "text": "Gute Entscheidungen beginnen mit einem offenen Gespräch.",
      "form": true,
      "seo_description": ""
    },
    {
      "slug": "ueber-uns",
      "title": "Über uns",
      "enabled": true,
      "text": "Immobilien sind für uns mehr als Quadratmeter. Sie sind der Anfang einer neuen Geschichte.",
      "form": false,
      "seo_description": ""
    }
  ]
}

## Gestaltungswunsch
Zielgruppe: Eigentümer, Kauf- und Mietinteressenten
Stil: Klar, hochwertig, zugänglich und persönlich
Weitere Wünsche: Big Ben , London stil

## Lieferumfang und unterstützte Importwege
1. Liefere immer eine manifest.json nach schemas/manifest.schema.json, Version 2.
   Verwende eine neue, eindeutige ID. Alle sechs Seitentypen und vier Aktionen
   bleiben enthalten. Theme enthält Farben, lokale Schriftwahl, Hintergrund,
   Textfarbe, Hero cover/split, Karten grid/list, Abstände, Breite und Rundung.
   Dieses Datenpaket lässt sich direkt im Frontend-Studio prüfen und importieren.
   Keine zusätzlichen Script-, HTML-, CSS-, URL- oder Paketfelder hinzufügen.
2. Für freie Änderungen an React/TSX/CSS: Bearbeite den mitgelieferten Quellcode
   unter reference/frontend. Liefere zusätzlich die geänderten Quellen und eine
   README mit Einbauanleitung. Freier Programmcode wird NICHT über den
   Datenimport installiert. Er muss im vollständigen Projekt ersetzt, gebaut und
   mit den mitgelieferten Tests geprüft werden. Keine Installation zur Laufzeit.

## Verbindlicher Vertrag
- Next.js 16 App Router, React 19, TypeScript; bestehende Lockdatei beibehalten.
  params/searchParams sind Promises. Relevante Next-Dokumentation lesen.
- Same-Origin API ausschließlich /api/public/* für öffentliche Daten verwenden.
  Server rendert initiale Config für SEO; Browser nutzt denselben Vertrag.
  Keine Adminendpunkte im öffentlichen Frontend, außer bestehender privater Vorschau.
- Startseite mit geordneten/sichtbaren Config.sections; Firmenlogo, Farben,
  Texte, Navigation, SEO und Footer vollständig aus Config.
- Immobilienübersicht mit Filter, Sortierung, Pagination und Leer-/Fehlerzustand;
  Exposé nach Slug. Nur vom Backend gelieferte öffentliche Angebote anzeigen.
  Keine erfundenen Objekte oder Energiedaten, keine versteckten Straßen anzeigen.
- Alle aktivierten Inhaltsseiten, Kontakt, Impressum, Datenschutz, optional
  Selbstauskunft mit aktuellem PDF-Download und privater Rückgabe unterstützen.
- Module steuern Navigation, Seiten, Buttons und Formulare. Deaktivierte Module
  bleiben auch bei direktem Link deaktiviert. Bestehende 404- und SEO-Regeln erhalten.
- Anfragen: Vorname, Nachname, E-Mail, bedingte Telefonpflicht, Betreff,
  Nachricht, Pflicht-Datenschutzbestätigung, Honeypot, Idempotency-Key.
  Objektanfragen senden die echte property_id; Seitentyp steuert Formrouting.
  Erfolg erst bei HTTP 202. Angenommen bedeutet nicht per Mail zugestellt.
  Fehler 404/409/413/422/429 und Netzfehler verständlich behandeln.
- PDF-Rückgabe via Multipart mit reference, email, return_code und consent;
  keine Rückgabe oder private Datei öffentlich ablegen. Keine Inhalte an Telegram.
- Vorschau erfordert Adminsitzung, erhält preview=1 bei Navigation, sendet keine
  echten Anfragen und erfasst keine Analysen. Admin/Auth/Outbox unverändert erhalten.
- Keine Zugangsdaten, SMTP-Passwörter, Tokens, fest eingebaute Firmennamen,
  Fremdtracker, Remote-Scripts oder ungeprüfte HTML-Ausgabe einbauen.
- Responsive ab 360px, semantische Überschriften, Formularlabels, sichtbarer
  Tastaturfokus, verständliche Zustände und ausreichende Farbkontraste.
- API-Vertrag: CONTRACT.md plus schemas/ und reference/frontend/components.
  Keine Schnittstellen umbenennen oder Formfelder weglassen.

## Abnahme
CHECKLIST.md vollständig durchgehen. Im vollständigen Projekt:
PYTHONPATH=backend .venv/bin/pytest backend/tests -q
npm --prefix frontend run typecheck
npm --prefix frontend run build
npm --prefix frontend run test:e2e
Keine echten E-Mail- oder Telegram-Nachrichten als automatisierten Test senden.
Liefere Prüfbericht und offene Punkte wahrheitsgemäß. Ein gültiges Manifest
beweist nur Datenkompatibilität, nicht die Qualität frei geänderter Quelltexte.
