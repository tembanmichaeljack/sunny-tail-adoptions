# Homepage SEO Audit & Recommended Changes

## Scope
Only the homepage (`/`). No visible design, content, images, navigation, or functionality will be changed. Only `<head>` metadata and structured data.

---

## Current State (before)

| Element | Current Value | Status |
|---|---|---|
| Page title | `Golden Meadow Kennel — Family-Raised Golden Retriever Puppies` | ⚠️ Outdated brand name; should be `Golden Sunny Tail` |
| Meta description | `Health-tested, home-raised Golden Retriever puppies in Salem, Oregon. Browse available puppies, see full details and reserve your companion.` | ⚠️ References removed Salem location; weak CTA |
| H1 | `Golden Sunny Tail puppies raised in a home, not a cage.` | ✅ Good, brand-aligned |
| Canonical URL | **Missing** | ❌ Needed to avoid duplicate-content issues |
| Robots/indexing | `robots.txt` allows all crawlers; no `<meta name="robots">` tag | ✅ Indexable (no change needed) |
| Open Graph | `og:title`, `og:description`, `og:type`, `twitter:card` present | ⚠️ Missing `og:url`, `og:image`, `og:site_name`, Twitter title/description/image |
| Structured data | **None** | ❌ Add WebSite or LocalBusiness JSON-LD |

Additional notes:
- Root `__root.tsx` still has the old title/description as a fallback, which is fine once the homepage overrides are updated.
- No `sitemap.xml` exists yet, but that is outside the scope of this first homepage-only step.

---

## Proposed Changes (after)

All changes apply only to `src/routes/index.tsx` head metadata. No visible page content, images, or components will be touched.

### 1. Page title
**Before:** `Golden Meadow Kennel — Family-Raised Golden Retriever Puppies`
**After:** `Golden Sunny Tail — Family-Raised Golden Retriever Puppies`

### 2. Meta description
**Before:** `Health-tested, home-raised Golden Retriever puppies in Salem, Oregon. Browse available puppies, see full details and reserve your companion.`
**After:** `Family-raised, health-tested Golden Retriever puppies. Browse available puppies, view full details, and reserve your new companion today.`

### 3. H1
**Before:** `Golden Sunny Tail puppies raised in a home, not a cage.`
**After:** No change — already aligned with brand.

### 4. Canonical URL
**Before:** Missing
**After:** `<link rel="canonical" href="https://sunny-tail-adoptions.lovable.app/" />`

### 5. Robots/indexing
**Before:** `robots.txt` allows all; no meta robots tag
**After:** No change needed — page should remain fully indexable.

### 6. Open Graph metadata
**Before:**
- `og:title` and `og:description` use old brand/location text
- Missing `og:url`, `og:image`, `og:site_name`
- Missing Twitter title, description, image

**After:**
- `og:title`: `Golden Sunny Tail — Family-Raised Golden Retriever Puppies`
- `og:description`: updated description
- `og:url`: `https://sunny-tail-adoptions.lovable.app/`
- `og:type`: `website`
- `og:site_name`: `Golden Sunny Tail`
- `twitter:card`: `summary_large_image`
- `twitter:title`, `twitter:description`: mirror OG values
- `og:image` / `twitter:image`: **omitted for now** — the user requested no image changes. A meaningful social image can be added in a separate, approved step.

### 7. Structured data
**Before:** None
**After:** Add a single JSON-LD `WebSite` schema in `src/routes/index.tsx`:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Golden Sunny Tail",
  "url": "https://sunny-tail-adoptions.lovable.app/",
  "description": "Family-raised, health-tested Golden Retriever puppies."
}
```

---

## Files to modify (after approval)
- `src/routes/index.tsx` — title, description, canonical, OG, Twitter, JSON-LD
- Optionally update `src/routes/__root.tsx` fallback title/description to match new brand wording (still safe, still metadata-only).

## What will NOT change
- Images, filenames, paths, dimensions, loading behavior
- Visible text, layout, styling, buttons, navigation, forms
- `robots.txt` indexing rules
- Any other pages

## Approval requested
Please confirm you want me to apply the above homepage-only SEO metadata changes. I will not touch any visible customer-facing content.
