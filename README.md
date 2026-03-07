# Simon Lind – Portfolio

Professionell portfolio-hemsida för webbutvecklare Simon Lind.

Byggd med **Next.js 14**, **TypeScript** och **Tailwind CSS**. Redo att deployas på Vercel.

![Simon Lind Portfolio](https://github.com/user-attachments/assets/d8936978-18bc-4c7c-bb93-55b8325830a5)

## Funktioner

- 🎨 **Hero** – animerad gradient-bakgrund med CTA-knappar
- 👤 **Om Mig** – kort presentation
- ⚙️ **Tjänster** – webbdesign, hosting, mobilanpassning, GDPR
- 🖥️ **Portfolio** – Projektgaranti Stockholm AB + exempelprojekt
- 📬 **Kontakt** – formulär via server-side Web3Forms-proxy (maila till Simonlind06@icloud.com)
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

Kopiera `.env.example` till `.env.local` och fyll i din Web3Forms-nyckel:

```bash
cp .env.example .env.local
```

Skapa en gratis nyckel på [web3forms.com](https://web3forms.com) och registrera den med din e-postadress.

```
# Rekommenderat – hålls server-side och exponeras aldrig i klientbunten:
WEB3FORMS_KEY=din_nyckel_här

# Valfritt – för lokal testning om du föredrar NEXT_PUBLIC-prefix:
# NEXT_PUBLIC_WEB3FORMS_KEY=din_nyckel_här

# Valfritt – testa leverans till alternativ e-postadress (t.ex. Gmail):
# SUPPORT_TEST_EMAIL=din-test@gmail.com
```

### 3. Starta utvecklingsservern

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

### 4. Testa kontaktformuläret med curl

Med servern igång, skicka ett testformulär mot proxyn:

```bash
curl -s -X POST http://localhost:3000/api/web3forms-proxy \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello from curl"}' | jq .
```

Kontrollera serverloggen i terminalen – du ska se något i stil med:

```
[web3forms-proxy] upstream response: {"success":true,"message":"Email sent successfully!"}
```

För att testa leverans till Gmail istället för iCloud, sätt `SUPPORT_TEST_EMAIL=din@gmail.com` i `.env.local` och skicka om formuläret.

### 5. Säkerhetskontroll – API-nyckeln ska inte finnas i klientbunten

Efter `npm run build`, verifiera att nyckeln inte är inbakad i den publika bunten:

```bash
grep -R "604b7168-08c6-4b2a-9f46-a3ef1581e224" .next/ || true
```

Kommandot ska returnera **ingen träff**. Om nyckeln syns, kontrollera att du inte använder `NEXT_PUBLIC_WEB3FORMS_KEY` i en klientkomponent.

## Deploy på Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bellemartineebusiness/SimonLind)

1. Koppla ditt GitHub-repo till Vercel
2. Lägg till **`WEB3FORMS_KEY`** (ej `NEXT_PUBLIC_`) som miljövariabel i Vercels dashboard (Settings → Environment Variables)
3. Deploya – klart!

> **Säkerhetsnot:** Ta bort fallback-nyckeln i `pages/api/web3forms-proxy.ts` och använd enbart hosting-hemligheter innan repot görs publikt.

## Teknikstack

| Teknik | Version |
|---|---|
| Next.js | 14 |
| TypeScript | 5 |
| Tailwind CSS | 3 |
| React | 18 |