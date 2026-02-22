# Asset specifications – images, videos & animations

Use this as a checklist for assets you need to provide or create.

---

## 1. Images

Place all images in **`public/images/`**. Paths below are relative to `public/` (e.g. `images/hero-main.jpg` → `public/images/hero-main.jpg`).

### 1.1 Hero section

| Slot | Path / variable | Format | Min size | Aspect | Notes |
|------|-----------------|--------|----------|--------|--------|
| **Main hero (center)** | `HERO_MAIN` in `hero-section.tsx` (or `/images/hero-main.jpg`) | JPG or WebP | **1200×800** px | **3∶2** (landscape) | Full-viewport center image; banking/building/city. Currently: Unsplash URL. |
| **Side 1 (left top)** | `HERO_SIDES[0]` or `/images/hero-side-1.png` | JPG, PNG or WebP | **600×900** px | **2∶3** (portrait) | Banking/finance/architecture. |
| **Side 2 (left bottom)** | `HERO_SIDES[1]` or `/images/hero-side-2.png` | JPG, PNG or WebP | **600×900** px | **2∶3** (portrait) | Same style. |
| **Side 3 (right top)** | `HERO_SIDES[2]` or `/images/hero-side-3.png` | JPG, PNG or WebP | **600×900** px | **2∶3** (portrait) | Same style. |
| **Side 4 (right bottom)** | `HERO_SIDES[3]` or `/images/hero-side-4.png` | JPG, PNG or WebP | **600×900** px | **2∶3** (portrait) | Same style. |

**Recommended formats:** `.jpg` (photo), `.webp` (smaller size). Use **sRGB** and **72–80% quality** for web.

---

### 1.2 Technology section (scroll story)

| Slot | Path | Format | Min size | Aspect | Notes |
|------|------|--------|----------|--------|--------|
| **Center image 1** | `/images/mono-1.png` | PNG or JPG | **1200×800** | 3∶2 | Base layer (e.g. building/sunrise). |
| **Center image 2** | `/images/mono-2.png` | PNG or JPG | **1200×800** | 3∶2 | Fades in on scroll (e.g. daytime). |
| **Center image 3** | `/images/mono-3.png` | PNG or JPG | **1200×800** | 3∶2 | Fades in (e.g. dusk). |
| **Center image 4** | `/images/mono-4.png` | PNG or JPG | **1200×800** | 3∶2 | Fades in (e.g. night). |
| **Left column** | `/images/interior-view.png` | PNG or JPG | **400×600** | 2∶3 | Single tall image. |
| **Right column** | `/images/rusted-metal.png` | PNG or JPG | **400×600** | 2∶3 | Single tall image. |

---

### 1.3 Gallery section (stack)

| Slot | Path | Format | Min size | Aspect | Notes |
|------|------|--------|----------|--------|--------|
| **Slide 1** | `/images/mono-1.png` | PNG or JPG | **1000×667** | 3∶2 | Reuses tech section asset. |
| **Slide 2** | `/images/mono-2.png` | PNG or JPG | **1000×667** | 3∶2 | Same. |
| **Slide 3** | `/images/mono-3.png` | PNG or JPG | **1000×667** | 3∶2 | Same. |
| **Slide 4** | `/images/mono-4.png` | PNG or JPG | **1000×667** | 3∶2 | Same. |

---

### 1.4 Featured / “Our approach” bento grid

| Slot | Path | Format | Grid cell | Min size | Notes |
|------|------|--------|-----------|----------|--------|
| 1 (large) | `/images/4312e1bb-e030-4528-b6df-8a6ea69fe384.png` | PNG or JPG | 2×2 | **440×440** | Replace with your asset; keep filename or update in `featured-products-section.tsx`. |
| 2 | `/images/b2401fa5-4eac-465f-b1f9-014aadc182ee.png` | PNG or JPG | 1×1 | **220×220** | |
| 3 | `/images/dd1b32a8-3722-4ea2-8808-10d53532809d.png` | PNG or JPG | 1×1 | **220×220** | |
| 4 | `/images/61af06cc-84d0-4031-a0ed-76fc43b1c1e1.png` | PNG or JPG | 1×2 (tall) | **220×440** | |
| 5 | `/images/249083d2-c49c-4c06-a125-376284d90c42.png` | PNG or JPG | 1×1 | **220×220** | |
| 6 | `/images/7638f650-8586-4403-8c13-141921a04f9d.png` | PNG or JPG | 2×1 (wide) | **440×220** | |
| 7 | `/images/5b3bdb95-fac7-4d22-aa97-98b5d547b2db.png` | PNG or JPG | 1×1 | **220×220** | |
| 8 | `/images/634f7bae-77a5-49d0-a0ab-5271a6194e66.png` | PNG or JPG | 1×2 (tall) | **220×440** | |
| 9 | `/images/09ffa8fd-cdd1-453f-9aa2-d6c702a1f4b5.png` | PNG or JPG | 2×1 (wide) | **440×220** | |
| 10 | `/images/040e36b1-d16f-474b-a712-a9979e6ab479.png` | PNG or JPG | 1×1 | **220×220** | |

You can rename these (e.g. `bento-01.png` … `bento-10.png`) and update the paths in `featured-products-section.tsx`.

---

### 1.5 Solutions / Collection cards

| Slot | Path | Format | Aspect | Min size | Notes |
|------|------|--------|--------|----------|--------|
| **Wealth Management** | `/images/hero-side-1.png` | PNG or JPG | **2∶3** | **600×900** | Card background. |
| **Private Banking** | `/images/hero-side-2.png` | PNG or JPG | **2∶3** | **600×900** | Card background. |
| **Succession & Legacy** | `/images/hero-side-4.png` | PNG or JPG | **2∶3** | **600×900** | Card background. |

---

### 1.6 Testimonials / About

| Slot | Path | Format | Min size | Aspect | Notes |
|------|------|--------|----------|--------|--------|
| **Full-width background** | `/images/testimonial-house.png` | PNG or JPG | **1920×1080** | **16∶9** | Hero-style image; quote overlay on top. |

---

### 1.7 Favicon / app icons (optional)

| Slot | Path | Format | Size | Notes |
|------|------|--------|------|--------|
| Light favicon | `/icon-light-32x32.png` | PNG | **32×32** | Tab icon (light theme). |
| Dark favicon | `/icon-dark-32x32.png` | PNG | **32×32** | Tab icon (dark theme). |
| SVG icon | `/icon.svg` | SVG | Any | Vector icon. |
| Apple touch | `/apple-icon.png` | PNG | **180×180** | iOS home screen. |

---

## 2. Videos

### 2.1 Editorial section (parallax hero)

| Property | Value |
|----------|--------|
| **Current source** | `editorial-section.tsx` → URL in `src` (Vercel Blob). |
| **Format** | **MP4** (H.264 video, AAC audio; audio is muted in the player). |
| **Aspect ratio** | **16∶9** (mobile) or **21∶9** (desktop) – letterboxing is fine. |
| **Resolution** | Min **1920×1080** (1080p). |
| **Duration** | **10–60 s** loop; short (15–30 s) is ideal. |
| **Content** | Banking / building / city / abstract motion; no loud motion. |
| **Delivery** | Host file (e.g. `/public/videos/editorial-hero.mp4`) or replace the `src` URL in `editorial-section.tsx`. |

**Recommended:** Same folder as images: e.g. `public/videos/editorial-hero.mp4`, then in code: `src="/videos/editorial-hero.mp4"`.

---

## 3. Animations

All of these are **CSS-based** (no external animation files). You only need to provide assets; the code already handles the motion.

### 3.1 Hero

- **Type:** CSS keyframe `slideUp` + scroll-driven layout.
- **What moves:** Title line “PRIVATE BANKING” (each word slides up with delay ~0.06s per word). Side images reveal on scroll.
- **Assets:** Only images (see §1.1). No extra animation files.

### 3.2 Philosophy section

- **Type:** Scroll-based 3D rotation + word-by-word blur/opacity.
- **What moves:** Headlines (“Discretion.” / “Precision.” / “Partnership.”) rotate on scroll; body text reveals word-by-word.
- **Assets:** None. Copy is in `philosophy-section.tsx`.

### 3.3 Technology section

- **Type:** Scroll-driven opacity + word blur for cycling headlines; layered image crossfades.
- **What moves:** Center images fade in sequence; side columns slide in; headline text cycles with blur.
- **Assets:** Images only (§1.2).

### 3.4 Gallery section

- **Type:** Scroll-driven stacking + scale; last image scales to fullscreen.
- **What moves:** Four images stack and the last one expands. No Lottie/JSON.
- **Assets:** Images only (§1.3).

### 3.5 Editorial section

- **Type:** Parallax on the video (vertical shift on scroll).
- **What moves:** Video moves slightly with scroll.
- **Assets:** One video (§2.1).

### 3.6 Global CSS animations (already in `globals.css`)

- **slideUp** – reveal from below.
- **reveal-up / reveal-left / reveal-right** – directional reveal.
- **scale-in** – scale from 0.9 to 1.
- **fadeIn** – opacity + slight scale.
- **float** – gentle vertical float.
- **grain** – subtle noise (used with `.grain-overlay`).

No external animation assets (e.g. Lottie JSON, GIFs, or video) are required for these; they are optional for extra flair.

---

## 4. Quick checklist

**Images to provide:**

- [ ] Hero: 1 main (3∶2) + 4 side (2∶3) – banking/building style.
- [ ] Technology: 4 center (3∶2) + 2 side (2∶3) – same or similar to hero.
- [ ] Gallery: reuses the 4 center images above.
- [ ] Bento grid: 10 images (various sizes; see §1.4).
- [ ] Solutions: 3 cards (2∶3) – can reuse hero sides or new.
- [ ] Testimonials: 1 full-width 16∶9 background.
- [ ] (Optional) Favicons: 32×32 light, 32×32 dark, 180×180 apple.

**Videos:**

- [ ] Editorial: 1× MP4, 16∶9 or 21∶9, 10–60 s loop, muted.

**Animations:**

- [ ] None required; all are CSS/scroll in code. Optional: Lottie/GIF/video for extra sections if you add them later.

If you tell me which slot you’re filling first (e.g. “hero images” or “editorial video”), I can give exact filenames and code changes to plug them in.
