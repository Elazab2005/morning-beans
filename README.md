# MORNING & BEANS — Digital Menu

Frontend-only React + Vite café menu: search, category filters, product modal with options, favorites, cart drawer, WhatsApp ordering. Cart and favorites persist in localStorage.

## Run
```bash
npm install
npm run dev      # development
npm run build    # production build
```

## Structure
`src/components` UI · `src/data/products.js` menu data · `src/hooks` (useLocalStorage, useDialog) · `src/utils/whatsapp.js` order message · `src/styles` design tokens + styles

## Edit the menu
Add a line to `src/data/products.js`: `p('Pizza', 'Name', 'Description.', 200, true)` (last arg = shows in Customer Favorites). Categories, search, modal, cart and favorites update automatically. Swap images per product by adding an `image` field or editing `CATEGORY_IMAGES`. Size/add-on choices live in `OPTIONS`.

## Change the WhatsApp number
Edit `WHATSAPP_NUMBER` in `src/utils/whatsapp.js` (country code + number, digits only, e.g. `201012345678`).
