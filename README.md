# Digitaler Garten – Audiowalk Website

Ein literarisch-ökologischer Pfad durch das Cyber Valley. Eine Multi-Page-Website für einen physischen, interaktiven Audiowalk.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 19**

## Design

Das Design folgt dem „Organic Earth & Vintage Science" Vibe – eine Hommage an alte naturwissenschaftliche Enzyklopädien und Feldtagebücher.

### Design Tokens

- `bg-base`: #F4F1EA (warmes Pergament)
- `text-main`: #2A2A28 (Dunkles Anthrazit)
- `accent-terra`: #B85D43 (Terrakotta)
- `accent-flora`: #6A7B59 (Moosgrün)
- `border-color`: #D1CEC5 (Graubeige)

### Typografie

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## Entwicklung

```bash
# Installation
npm install

# Entwicklungsserver starten
npm run dev
# Öffne http://localhost:3000

# Build für Produktion
npm run build

# Statischen Export erstellen (für GitHub Pages)
npm run export
```

## Deploy auf GitHub Pages

### Option 1: Automatisch mit GitHub Actions (empfohlen)

1. Erstelle ein GitHub Repository
2. Erstelle `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run export
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

3. In GitHub: Settings → Pages → Source → GitHub Actions

### Option 2: Manuell

```bash
# Build erstellen
npm run export

# Der Ordner /out enthält die statischen Dateien
# Kopiere den Inhalt von /out in ein gh-pages Branch oder
# nutze GitHub Pages mit dem /out Ordner als Source
```

### Für username.github.io (Hauptdomain)

Die Konfiguration ist bereits für `username.github.io` eingeritet – kein `basePath` nötig.

### Für Projekt-Repository (username.github.io/repo-name)

Wenn du ein Projekt-Repository nutzt, aktiviere in `next.config.mjs`:

```javascript
basePath: '/dein-repo-name',
assetPrefix: '/dein-repo-name',
```

## Projektstruktur

```
/app
├── layout.tsx       // Globales Layout (Navigation, Noise-Overlay)
├── globals.css      // Custom Styles
├── page.tsx         // Home
├── station-1/       // Anthropozän
├── station-2/       // Campus als Garten
├── station-3/       // KI & Pflanzenwelt
├── station-4/       // Data Center
├── station-5/       // Sternwarte
├── station-6/       // Die Perspektive
└── feedback/        // Feedback-Formular
```

## Lizenz

Projektmodul im Cyber Valley – 2025
