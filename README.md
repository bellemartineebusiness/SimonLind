# Simon Lind – Portfolio

Professionell portfolio-hemsida för webbutvecklare Simon Lind.

Byggd med **Next.js 14**, **TypeScript** och **Tailwind CSS**. Redo att deployas på Vercel.

![Simon Lind Portfolio](https://github.com/user-attachments/assets/d8936978-18bc-4c7c-bb93-55b8325830a5)

## Funktioner

- 🎨 **Hero** – animerad gradient-bakgrund med CTA-knappar
- 👤 **Om Mig** – kort presentation
- ⚙️ **Tjänster** – webbdesign, hosting, mobilanpassning, GDPR
- 🖥️ **Portfolio** – Projektgaranti Stockholm AB + exempelprojekt
- 📬 **Kontakt** – formulär via Web3Forms (maila till Simonlind06@icloud.com)
- 🍪 **Cookie Banner** – GDPR-kompatibel
- 📄 **Integritetspolicy** (`/privacy`) och **Cookie Policy** (`/cookies`)
- 📱 Mobilanpassad och tillgänglig (WCAG)
- 🔍 SEO-optimerad med OpenGraph-metadata

## Kom igång

### 1. Installera beroenden

```bash
npm install
```

### 2. Konfigurera miljövariabler

Kopiera `.env.local.example` till `.env.local` och fyll i din Web3Forms-nyckel:

```bash
cp .env.local.example .env.local
```

Skapa en gratis nyckel på [web3forms.com](https://web3forms.com) och registrera den med e-postadressen `Simonlind06@icloud.com`.

```
NEXT_PUBLIC_WEB3FORMS_KEY=din_nyckel_här
```

### 3. Starta utvecklingsservern

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

## Deploy på Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bellemartineebusiness/SimonLind)

1. Koppla ditt GitHub-repo till Vercel
2. Lägg till miljövariabeln `NEXT_PUBLIC_WEB3FORMS_KEY` i Vercels dashboard
3. Deploya – klart!

## Teknikstack

| Teknik | Version |
|---|---|
| Next.js | 14 |
| TypeScript | 5 |
| Tailwind CSS | 3 |
| React | 18 |