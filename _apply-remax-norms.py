#!/usr/bin/env python3
"""
Apply RE/MAX Crystal presentation norms to all guide-*.html files.

Inspired by the Brunelle site OACIQ-compliant template:
- Add REMAX ballon (digital_ballon.png) in the topbar (next to the Crystal logo)
- Add OACIQ-compliant footer mentions:
    - Bureau principal address (228 boul. du Curé-Labelle, Sainte-Thérèse, QC J7E 2X7)
    - Téléphone
    - REMAX ballon
    - "Franchisé indépendant et autonome de RE/MAX Québec"
    - Politique de confidentialité + Conditions d'utilisation links
    - vpourdesign credit
- Add JSON-LD RealEstateAgent schema in <head>
- Add minimal CSS for the new blocks (without altering existing styling)

Keeps the existing visual look 100% intact.
"""

from pathlib import Path
import re
import sys

ROOT = Path(__file__).parent
GUIDES = sorted(ROOT.glob("guide-*.html"))

# ──────────────────────────────────────────────────────────────────
# 1. CSS additions (injected before /* ===== RESPONSIVE ===== */)
# ──────────────────────────────────────────────────────────────────
EXTRA_CSS = """
    /* ===== REMAX NORMS (ballon + footer compliance) ===== */
    .topbar-ballon {
      height: clamp(36px, 4.5vw, 48px);
      width: auto;
      display: block;
      flex-shrink: 0;
    }

    .footer-address {
      font-size: 0.82rem;
      line-height: 1.7;
      margin-block: 14px 18px;
      font-style: normal;
      color: #8a9bac;
    }
    .footer-address a { color: #b0cfe8; }
    .footer-address a:hover { color: var(--blue-light); }

    .footer-ballon {
      height: 46px;
      width: auto;
      opacity: 0.92;
      margin-block-start: 6px;
    }

    .footer-bottom {
      gap: 16px;
      flex-wrap: wrap;
    }
    .footer-legal {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      max-width: 78ch;
    }
    .footer-legal a { color: #8a9bac; }
    .footer-legal a:hover { color: var(--blue-light); }
    .footer-divider { color: #2c3a4b; }
    .footer-credit a { color: #8a9bac; }
    .footer-credit a:hover { color: var(--blue-light); }

    @media (max-width: 640px) {
      .footer-bottom { flex-direction: column; align-items: flex-start; }
    }
    /* ===== /REMAX NORMS ===== */
"""

# ──────────────────────────────────────────────────────────────────
# 2. Topbar — insert REMAX ballon before the Crystal logo
# ──────────────────────────────────────────────────────────────────
TOPBAR_OLD = re.compile(
    r'(<div class="topbar-brand">)\s*(<div class="topbar-logo">)',
    re.MULTILINE,
)
TOPBAR_NEW = (
    r'\1\n      '
    r'<img src="brand_assets/digital_ballon.png" alt="RE/MAX" class="topbar-ballon">\n      '
    r'\2'
)

# ──────────────────────────────────────────────────────────────────
# 3. Footer brand block — add address + ballon under description
#    (Crystal head office in Sainte-Thérèse / D'ici head office in Terrebonne)
# ──────────────────────────────────────────────────────────────────
FOOTER_BRAND_PAT = re.compile(
    r'(<p class="footer-brand-desc">[^<]*</p>)',
)

ADDRESS_CRYSTAL = (
    '          <address class="footer-address">\n'
    '            228 boul. du Curé-Labelle<br>\n'
    '            Sainte-Thérèse, Québec&nbsp;J7E&nbsp;2X7<br>\n'
    '            <a href="tel:4504304207">450&nbsp;430-4207</a>\n'
    '          </address>\n'
    '          <img src="brand_assets/digital_ballon.png" alt="RE/MAX" class="footer-ballon">'
)
ADDRESS_DICI = (
    '          <address class="footer-address">\n'
    '            550 chemin du Coteau<br>\n'
    '            Terrebonne, Québec&nbsp;J6W&nbsp;5J7<br>\n'
    '            <a href="tel:4504714111">450&nbsp;471-4111</a>\n'
    '          </address>\n'
    '          <img src="brand_assets/digital_ballon.png" alt="RE/MAX" class="footer-ballon">'
)

# ──────────────────────────────────────────────────────────────────
# 4. Footer bottom — replace the simple © with OACIQ-compliant block
#    (handles both RE/MAX Crystal and RE/MAX D'ici)
# ──────────────────────────────────────────────────────────────────
FOOTER_BOTTOM_CRYSTAL_OLD = re.compile(
    r'<div class="footer-bottom">\s*'
    r'<span>&copy;\s*2026\s*RE/?MAX\s*Crystal\.\s*Tous droits réservés\.</span>\s*'
    r'<span>Guide mis à jour\s*:\s*[^<]*</span>\s*'
    r'</div>',
    re.MULTILINE,
)
FOOTER_BOTTOM_DICI_OLD = re.compile(
    r"<div class=\"footer-bottom\">\s*"
    r"<span>&copy;\s*2026\s*RE/?MAX\s*D(?:'|&#39;)ici\.\s*Tous droits réservés\.</span>\s*"
    r"<span>Guide mis à jour\s*:\s*[^<]*</span>\s*"
    r"</div>",
    re.MULTILINE,
)

def footer_bottom_html(brand: str) -> str:
    return (
        '<div class="footer-bottom">\n'
        '        <div class="footer-legal">\n'
        f'          <span>&copy; 2026 {brand} — Franchisé indépendant et autonome de '
        '<a href="https://www.remax-quebec.com" target="_blank" rel="noopener">RE/MAX Québec</a> — '
        'Tous droits réservés</span>\n'
        '          <span class="footer-divider">·</span>\n'
        '          <a href="politique-confidentialite.html">Politique de confidentialité</a>\n'
        '          <span class="footer-divider">·</span>\n'
        '          <a href="conditions-utilisation.html">Conditions d\'utilisation</a>\n'
        '        </div>\n'
        '        <div class="footer-credit">\n'
        '          Site web par <a href="https://vpourdesign.com" target="_blank" rel="noopener"><strong>vpourdesign</strong></a>\n'
        '        </div>\n'
        '      </div>'
    )

# ──────────────────────────────────────────────────────────────────
# 5. JSON-LD RealEstateAgent (inserted before </head> if missing)
# ──────────────────────────────────────────────────────────────────
def build_json_ld(city_name: str) -> str:
    return (
        '<script type="application/ld+json">{'
        '"@context":"https://schema.org",'
        '"@type":"RealEstateAgent",'
        '"name":"RE/MAX Crystal",'
        '"url":"https://www.remaxcrystal.com",'
        '"telephone":"+1-450-430-4207",'
        '"address":{'
        '"@type":"PostalAddress",'
        '"streetAddress":"228 boul. du Curé-Labelle",'
        '"addressLocality":"Sainte-Thérèse",'
        '"addressRegion":"QC",'
        '"postalCode":"J7E 2X7",'
        '"addressCountry":"CA"'
        '},'
        f'"areaServed":"{city_name}",'
        '"parentOrganization":{'
        '"@type":"Organization",'
        '"name":"RE/MAX Québec",'
        '"url":"https://www.remax-quebec.com"'
        '}'
        '}</script>'
    )

# Filename -> human city name (used in areaServed)
CITY_LABELS = {
    "guide-blainville.html": "Blainville",
    "guide-boisbriand.html": "Boisbriand",
    "guide-boisdesfillions.html": "Bois-des-Filion",
    "guide-deuxmontagnes.html": "Deux-Montagnes",
    "guide-dici-charlemagne.html": "Charlemagne",
    "guide-dici-joliette.html": "Joliette",
    "guide-dici-lassomption.html": "L'Assomption",
    "guide-dici-lavaltrie.html": "Lavaltrie",
    "guide-dici-lepiphanie.html": "L'Épiphanie",
    "guide-dici-mascouche.html": "Mascouche",
    "guide-dici-repentigny.html": "Repentigny",
    "guide-dici-saint-jacques.html": "Saint-Jacques",
    "guide-dici-saint-lin-laurentides.html": "Saint-Lin–Laurentides",
    "guide-dici-saint-roch-de-lachigan.html": "Saint-Roch-de-l'Achigan",
    "guide-dici-saint-sulpice.html": "Saint-Sulpice",
    "guide-dici-terrebonne.html": "Terrebonne",
    "guide-lorraine.html": "Lorraine",
    "guide-mirabel.html": "Mirabel",
    "guide-oka.html": "Oka",
    "guide-pointecalumet.html": "Pointe-Calumet",
    "guide-rosemere.html": "Rosemère",
    "guide-st-janvier.html": "Saint-Janvier",
    "guide-steannedesplaines.html": "Sainte-Anne-des-Plaines",
    "guide-stemarthe.html": "Sainte-Marthe-sur-le-Lac",
    "guide-stesophie.html": "Sainte-Sophie",
    "guide-stetherese.html": "Sainte-Thérèse",
    "guide-steustache.html": "Saint-Eustache",
}

# ──────────────────────────────────────────────────────────────────
# Apply
# ──────────────────────────────────────────────────────────────────
report = []
for guide in GUIDES:
    name = guide.name
    src = guide.read_text(encoding="utf-8")
    original = src

    changes = []

    # Order matters: do HTML transforms FIRST, then CSS at the end.
    # (The CSS adds class names like .footer-address that would break
    #  the `"footer-address" not in src` guards if injected first.)

    # 1. Topbar ballon (HTML)
    if 'class="topbar-ballon"' not in src:
        new_src, n = TOPBAR_OLD.subn(TOPBAR_NEW, src, count=1)
        if n:
            src = new_src
            changes.append("topbar-ballon")

    # Detect the brand for this guide — look ONLY in the <title>,
    # since the mega-menu in every guide mentions both brands.
    title_match = re.search(r'<title>([^<]*)</title>', src)
    title_text = title_match.group(1) if title_match else ""
    is_dici = ("D&#39;ici" in title_text) or ("D'ici" in title_text)
    brand_label = "RE/MAX D'ici" if is_dici else "RE/MAX Crystal"

    # 2. Footer address + ballon (HTML)
    if 'class="footer-address"' not in src:
        address_block = ADDRESS_DICI if is_dici else ADDRESS_CRYSTAL
        new_src, n = FOOTER_BRAND_PAT.subn(r'\1\n' + address_block, src, count=1)
        if n:
            src = new_src
            changes.append("footer-address" + (":dici" if is_dici else ""))

    # 3. Footer bottom (OACIQ + vpourdesign credit) (HTML)
    if 'class="footer-legal"' not in src:
        pat = FOOTER_BOTTOM_DICI_OLD if is_dici else FOOTER_BOTTOM_CRYSTAL_OLD
        new_src, n = pat.subn(footer_bottom_html(brand_label), src, count=1)
        if n:
            src = new_src
            changes.append("footer-bottom" + (":dici" if is_dici else ""))

    # 4. JSON-LD RealEstateAgent
    if '"@type":"RealEstateAgent"' not in src and '"@type": "RealEstateAgent"' not in src:
        city = CITY_LABELS.get(name, name.replace("guide-", "").replace(".html", "").title())
        json_ld = build_json_ld(city)
        src = src.replace("</head>", json_ld + "\n</head>", 1)
        changes.append("json-ld")

    # 5. CSS additions (last, before the @media RESPONSIVE block)
    if ".topbar-ballon" not in src:
        marker = "/* ===== RESPONSIVE ===== */"
        if marker in src:
            src = src.replace(marker, EXTRA_CSS.strip() + "\n\n    " + marker, 1)
            changes.append("css")

    if src != original:
        guide.write_text(src, encoding="utf-8")
        report.append((name, changes))
    else:
        report.append((name, ["(no-op)"]))

# Print report
print(f"Processed {len(report)} files\n")
for name, changes in report:
    print(f"  {name:<48} → {', '.join(changes)}")
