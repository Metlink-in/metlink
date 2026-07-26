SERVICE CARD IMAGES — Automation First page
============================================

Drop licensed image files here and they appear automatically on the cards.
Use commercial-use images you own or license (e.g. Pexels / Unsplash / Pixabay
free-for-commercial-use, or your own photos). Recommended: landscape, ~800x500,
JPG/WebP, under ~300KB each.

Each card loads a photo in this order (first one that exists wins):
  1. Image uploaded in Admin -> Service Images
  2. /cards/<industry>/<service-slug>.jpg   (per-service photo)
  3. /cards/<industry>/_default.jpg         (one shared photo for the whole industry)
  4. the generated themed illustration       (fallback if none exist)

EASIEST: put one file named _default.jpg in an industry folder to cover all 25 cards:
  public/cards/restaurant-cafe/_default.jpg
  public/cards/real-estate/_default.jpg
  public/cards/healthcare-clinics/_default.jpg
  public/cards/education/_default.jpg
  public/cards/ecommerce-d2c/_default.jpg
  public/cards/hr-recruitment/_default.jpg
  public/cards/finance-accounting/_default.jpg

PER-SERVICE: name the file exactly like the service slug, e.g.
  public/cards/restaurant-cafe/whatsapp-ordering-bot.jpg
  public/cards/finance-accounting/invoice-ocr-automation.jpg
(The dev-server 404 lines show the exact filename each card is looking for.)

After adding files, just refresh the page — no code changes needed.

# Repo is public — see README/docs for setup.
