# Simon Lind – Portfolio

Professionell portfolio-hemsida för webbutvecklare Simon Lind.

Byggd med **Next.js 14**, **TypeScript** och **Tailwind CSS**. Redo att deployas på Vercel.

![Simon Lind Portfolio](https://github.com/user-attachments/assets/d8936978-18bc-4c7c-bb93-55b8325830a5)

## Funktioner

- 🎨 **Hero** – animerad gradient-bakgrund med CTA-knappar
- 👤 **Om Mig** – kort presentation
- ⚙️ **Tjänster** – webbdesign, hosting, mobilanpassning, GDPR
- 🖥️ **Portfolio** – Projektgaranti Stockholm AB + exempelprojekt
- 📬 **Kontakt** – formulär via server-side proxy till Web3Forms (maila till Simonlind06@icloud.com)
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

Redigera `.env.local` och sätt minst en av följande nycklar:

```env
# Rekommenderat (server-side, syns aldrig i klientkoden):
WEB3FORMS_KEY=din_nyckel_här

# Bakåtkompatibelt alternativ (om WEB3FORMS_KEY saknas):
NEXT_PUBLIC_WEB3FORMS_KEY=din_nyckel_här

# Valfritt: test-e-postadress för test-utskick via proxy:
SUPPORT_TEST_EMAIL=din@test.se
```

Skapa en gratis nyckel på [web3forms.com](https://web3forms.com) och registrera den med din e-postadress.

> ⚠️ **Säkerhetsvarning**: En compile-time fallback-nyckel finns i källkoden *enbart* för snabb-test i
> utvecklingsmiljö. **Denna nyckel måste ersättas med en riktig secret i produktion.** Sätt
> `WEB3FORMS_KEY` som Vercel-secret (Environment Variable) i produktionsmiljön – se [Deploy på Vercel](#deploy-på-vercel).

### 3. Starta utvecklingsservern

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

## Testa kontaktformuläret

### Manuellt via webbläsaren

1. Öppna [http://localhost:3000#kontakt](http://localhost:3000#kontakt)
2. Fyll i namn, e-post och meddelande
3. Klicka **Skicka Meddelande**
4. Du ska se ett grönt bekräftelsemeddelande
5. Kontrollera att e-post landar i den inkorgen som är kopplad till din Web3Forms-nyckel

### Manuellt via curl

```bash
curl -X POST http://localhost:3000/api/web3forms-proxy \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Testsson","email":"test@example.com","message":"Hej från curl!"}'
```

Förväntat svar (vid framgång):

```json
{"success":true,"data":{"success":true,"message":"Email sent successfully!"}}
```

### Testa med SUPPORT_TEST_EMAIL

Sätt `SUPPORT_TEST_EMAIL=din@gmail.com` i `.env.local` och skicka via curl (se ovan).
Proxy-loggen visar `test_recipient: din@gmail.com` och skickar till den adressen via Web3Forms.
För isolerat test, byt även "recipient" i ditt Web3Forms-konto om du vill undvika att nå produktionskorg.

### Verifiera att nyckeln inte är exponerad i klientkod

```bash
grep -R '604b7168-08c6-4b2a-9f46-a3ef1581e224' . \
  --include='*.ts' --include='*.tsx' --include='*.js' \
  --exclude-dir=node_modules --exclude-dir=.next \
  --exclude='web3forms-proxy.ts' || echo "✅ Nyckeln hittades inte i klientkod"
```

Nyckeln får *enbart* förekomma i `pages/api/web3forms-proxy.ts` (server-side). Den ska inte finnas i någon klient-TypeScript/JavaScript-fil.

## Deploy på Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bellemartineebusiness/SimonLind)

### Deploy-checklista

- [ ] Koppla ditt GitHub-repo till Vercel
- [ ] Lägg till miljövariabeln `WEB3FORMS_KEY` som **Vercel-secret** (ej `NEXT_PUBLIC_` – denna ska vara server-side only)
- [ ] Ta bort eller åsidosätt `NEXT_PUBLIC_WEB3FORMS_KEY` om du tidigare använt den
- [ ] Sätt `SUPPORT_TEST_EMAIL` om du vill ha en separat test-inkorg (valfritt)
- [ ] Deploya – klart!
- [ ] Skicka ett testmail via formuläret på den deployade URL:en
- [ ] Verifiera att e-post landar i rätt inkorg

### Var sätts nyckeln i produktion?

Gå till **Vercel Dashboard → Ditt projekt → Settings → Environment Variables** och lägg till:

| Namn | Värde | Miljö |
|---|---|---|
| `WEB3FORMS_KEY` | `<din nyckel>` | Production, Preview |

**Commit aldrig din riktiga nyckel i källkoden.**

## Teknikstack

| Teknik | Version |
|---|---|
| Next.js | 14 |
| TypeScript | 5 |
| Tailwind CSS | 3 |
| React | 18 |