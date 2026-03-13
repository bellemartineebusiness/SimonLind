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

Kopiera `.env.local.example` till `.env.local`:

```bash
cp .env.local.example .env.local
```

API-nyckeln för Web3Forms finns redan som en compile-time fallback i koden och fungerar direkt utan konfiguration.
Vill du använda en annan nyckel sätter du miljövariabeln `WEB3FORMS_KEY` (server-side, exponeras **inte** i klient-bundeln):

```
WEB3FORMS_KEY=din_nyckel_här
```

Skapa en gratis nyckel på [web3forms.com](https://web3forms.com) och registrera den med din e-postadress.

### 3. Starta utvecklingsservern

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

## Deploy på Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bellemartineebusiness/SimonLind)

1. Koppla ditt GitHub-repo till Vercel
2. Lägg till miljövariabeln `WEB3FORMS_KEY` i Vercels dashboard (Environment Variables → **Server**)
3. Deploya – klart!

## Testa kontaktformuläret lokalt

1. Starta dev-servern: `npm run dev`
2. Öppna [http://localhost:3000/#kontakt](http://localhost:3000/#kontakt)
3. Fyll i namn, e-post och ett testmeddelande och klicka **Skicka Meddelande →**
4. Formuläret skickar en POST-request till `/api/contact` (Next.js API-route).
   API-routen använder `WEB3FORMS_KEY` från miljön, eller compile-time-fallbacken om variabeln saknas.
5. Kontrollera inkorgen kopplad till nyckeln `604b7168-08c6-4b2a-9f46-a3ef1581e224` för att bekräfta att mailet kom fram.

### Testa med curl (utan webbläsare)

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hej!"}'
```

Förväntat svar: `{"success":true}`

### Var ligger nyckeln?

| Plats | Variabel | Synlighet |
| --- | --- | --- |
| `app/api/contact/route.ts` | compile-time fallback | Serversidan – **inte** i klient-bundeln |
| `.env.local` / Vercel dashboard | `WEB3FORMS_KEY` | Serversidan – **inte** i klient-bundeln |

## Teknikstack

| Teknik | Version |
|---|---|
| Next.js | 14 |
| TypeScript | 5 |
| Tailwind CSS | 3 |
| React | 18 |