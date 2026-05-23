# Logo Docs — Shyaar

Brand identity reference for logo creation.

---

## Name

**SHYAAR**
Always uppercase. Never "Shyaar Sati" in the logomark — the single name is the brand.

---

## Brand Positioning

UI/UX Designer · Frontend Engineer · Blockchain Developer
The logo should feel: **precise, technical, dark-native, minimal.**
Think: a serious builder at the intersection of design and Web3 — not a casual freelancer, not a corporate agency.

---

## Color Palette

| Role | Hex | Usage |
|---|---|---|
| Cyan | `#00E5FF` | Primary accent — UI/UX pillar, links, highlights |
| Green | `#00FFA3` | Secondary accent — Frontend pillar, CTAs |
| Purple | `#9D7BFF` | Tertiary accent — Blockchain pillar |
| Light | `#ECEEF4` | Primary text / wordmark on dark |
| Background | `#060608` | Deep black base |
| Surface | `#13141C` | Card / container dark |
| Border | `#1E2030` | Subtle dividers |

**Logo color options:**
1. **Wordmark white** `#ECEEF4` on dark background — default
2. **Cyan gradient mark** — monogram or icon filled with `#00E5FF` → `#00FFA3`
3. **Tri-color gradient** — mark uses all three accents left to right: `#00E5FF` → `#00FFA3` → `#9D7BFF`
4. **Monochrome** — full white `#ECEEF4` for embossed / single-color use cases

---

## Typography

| Role | Font | Weight |
|---|---|---|
| Display / Wordmark | **Syne** | 700–800 |
| Body | Outfit | 400–600 |
| Mono / Code | JetBrains Mono | 400–500 |

**Wordmark:** Set "SHYAAR" in **Syne Bold (700)**, wide letter-spacing (`0.08–0.12em`), all caps.
Google Fonts link: `https://fonts.google.com/specimen/Syne`

---

## Logo Concepts

### Option A — Wordmark only
`SHYAAR` in Syne Bold, `#ECEEF4`, tight tracking.
Clean and minimal — works at all sizes.

### Option B — Monogram + Wordmark
A stylized **S** or **S·** mark to the left of the wordmark.
The mark could be:
- A geometric S built from two circuit-like angular paths
- A sharp, cut-corner square containing "S" — referencing the UI card aesthetic
- Two overlapping angled lines that form an S — referencing code brackets

### Option C — Icon mark (standalone)
For favicon, social avatar, app icon:
- A single letter **S** in a rounded square (similar to the `w-10 h-10 rounded-lg` card pattern used on the site)
- Background: `#13141C` or gradient fill
- Border: 1px `#00E5FF40` or tri-color gradient stroke
- This mirrors the site's card/icon component style exactly

---

## Shape Language

- **Rounded rectangles** — `border-radius: 8–12px` (site uses `rounded-xl` = 12px)
- **Sharp angles** — no circles, no organic curves
- **Thin strokes** — 1–1.5px borders, not thick outlines
- **No drop shadows** — use glow effects instead: `box-shadow: 0 0 20px #00E5FF30`
- Grid-aligned geometry — everything sits on a clear baseline

---

## Spacing & Sizing

| Context | Minimum size |
|---|---|
| Favicon / App icon | 32×32px |
| Social avatar | 200×200px |
| Site header | Height 28–32px |
| OG / cover image | 1200×630px |

Clear space: leave at least **1× the cap-height** of the wordmark as padding on all sides.

---

## Tone & Aesthetic References

- Dark background always — the logo is designed to live on `#060608`
- Glow / neon accents, not flat color fills
- Circuit board geometry, not floral or organic
- Monospace undertones — the JetBrains Mono font used on the site suggests code heritage
- Comparable logos to study: Linear, Vercel, Figma (mark simplicity), Starknet (Web3 edge)

---

## What to Avoid

- No gradients that look like Instagram/consumer apps (no pink-orange)
- No rounded bubbly letterforms — keep it sharp
- No light backgrounds — this brand is dark-native
- No tagline baked into the logo — keep it just the name
- No drop shadows or bevel/emboss effects
- Don't use the full name "Shyaar Sati" in the mark

---

## Deliverable Formats Needed

- [ ] SVG — scalable wordmark (dark bg version)
- [ ] SVG — scalable wordmark (light bg / monochrome version)
- [ ] PNG 1024×1024 — icon mark for app icon / social avatar
- [ ] PNG 32×32 — favicon (already at `public/icon.png`, update once logo is ready)
- [ ] PNG 1200×630 — OG image / link preview card
