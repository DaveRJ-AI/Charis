# Charis Legacy Foundation Website — Transition Handoff

## Project summary

This project is a website rebuild for Charis Legacy Foundation intended to replace the outdated public site at charislegacy.org with a modern, credibility-first foundation website.

The working stack is:

- Vite
- React
- React Router
- Custom CSS in `src/index.css`
- Hosted later via GitHub + Netlify

The site is currently being developed locally only.

---

## Core project goals

Primary goals established by the user:

1. Instill legitimacy as an organization
2. Answer questions clearly
3. Highlight successes, outcomes, and impact
4. Serve community, nonprofit partners, board/stakeholders, and potential recipient 501(c)(3) organizations
5. Donations are not a focus right now
6. Preference for local relationships and mission-aligned nonprofit support

The desired tone and brand feel:

- warm and humanitarian
- modern and minimal
- foundation-like
- faith-adjacent but not overt
- calm, credible, restrained, and thoughtful

---

## Key mission and positioning decisions

### Current working mission direction
Charis Legacy Foundation supports qualified nonprofit partners who help meet basic human needs and expand educational opportunity, especially in communities where the foundation has a vested interest.

### Qualification and support principles already established
These are important and should remain central:

- does not contribute for buildings
- does not contribute for technology
- supports humanitarian, charitable, and educational purposes
- preference for local nonprofit partners near board members
- occasional international support only for urgent essential needs like food and medicine
- board member experience may sometimes be helpful beyond funding

### Tone guidance for support criteria
The qualification language should feel:

- selective
- serious
- clear
- still welcoming, not bureaucratic or cold

---

## Brand inputs

### Logo
The user supplied a Charis Legacy logo. It is already included in the build.

### Color direction
Color guidance comes primarily from the logo. The current palette is built around:

- deep green accent
- charcoal / warm dark text
- warm cream / off-white backgrounds
- restrained soft green accents

### Visual direction
Avoid:
- corporate coldness
- donor-marketing feel
- church-website feel
- trendy startup aesthetics

Prefer:
- editorial typography
- elegant whitespace
- soft foundation-style card layouts
- subtle warmth
- understated visuals

---

## Current site structure

The current project includes these main pages:

- Home
- About
- What We Support
- Impact
- Partners
- Transparency
- Contact

---

## Current content provided by user

### Mission and purpose notes
- Help qualified partners provide basic needs that sustain life
- Promote educational opportunities, especially for those with limited resources

### About and story notes
- Founded in 2018
- Created to support nonprofit partners with a proven record of aid, care, support, and educational opportunities
- “Charis” comes from Greek, associated with grace / giving without expectation of return
- Has spiritual and Christ-like charity meaning, but the site should remain faith-adjacent rather than overtly religious
- Emphasis is local support, though some international support exists
- Local charitable and educational groups are seen as especially effective in strengthening communities

### Board list
- President: David Jenkins
- Vice Presidents: Britnie Murray, Katelyn Jenkins
- Secretary: Christina Jenkins
- Treasurer: Lynette Jenkins
- Board Member: Cameron Murray

### Contact email
Use:
- board@charislegacy.org

### Partners already provided
- English Language Center
- Cache Valley for Hope
- CAPSA
- Utah State University
- Rise and Rebuild

### Impact examples already provided
1. CAPSA
   - helping hundreds flee or recover from abusive or life-threatening situations
   - safe place, qualified professionals, restored hope

2. Rise and Rebuild
   - food and medicine programs in the Philippines
   - hundreds of thousands of children receiving nutritious meals and medical help
   - lives improved and saved

3. Cache Valley for Hope
   - support for families facing cancer and severe financial strain
   - helps families focus on healing and recovery

---

## Current project state

The site is already materially improved and now reads as a real foundation website rather than just a placeholder.

### What is working well
- typography feels credible and editorial
- navigation and header feel stable
- page hierarchy is clear
- About, Impact, Partners, and Transparency have much more substance than before
- overall tone is calm and legitimate

### Remaining issues and active design concerns
1. Homepage hero right panel is still too text-heavy and cramped
2. The site now needs imagery or visual storytelling elements to better convey tone and emotion
3. The next round should add:
   - restrained foundation-appropriate images
   - possibly an image treatment on Home and/or key interior pages
   - maybe softer visual rhythm across sections
4. Footer and some surfaces may still benefit from polish
5. Transparency page likely needs future PDF/report scaffolding
6. Contact page is improved, but final polish may still be needed after imagery is introduced

---

## Important workflow notes

### Dev environment
This is a Vite project. Do not use Live Server.

Run locally with:

```bash
npm install
npm run dev
```

### Prior issue already solved
There was a prior bad `node_modules` / Vite install problem. It was fixed by removing and reinstalling dependencies.

### Screenshot feedback note
Some earlier screenshots were taken at overly zoomed-out browser levels, which made the layout look much narrower than it really was. The later screenshots at normal zoom are better for evaluation.

---

## Current likely file structure

The exact names may vary slightly, but the active structure should be similar to:

```text
src/
  components/
    PageHero.jsx
    SectionIntro.jsx
    layout/
  data/
    siteContent.js
  pages/
    HomePage.jsx
    AboutPage.jsx
    WhatWeSupportPage.jsx   (or SupportPage.jsx)
    ImpactPage.jsx
    PartnersPage.jsx
    TransparencyPage.jsx
    ContactPage.jsx
  App.jsx
  main.jsx
  index.css
public/
  images/
```

---

## Files most recently and materially edited

These files have been central to the current iteration and should be reviewed first:

- `src/data/siteContent.js`
- `src/pages/HomePage.jsx`
- `src/pages/AboutPage.jsx`
- `src/pages/ImpactPage.jsx`
- `src/pages/PartnersPage.jsx`
- `src/pages/TransparencyPage.jsx`
- `src/pages/ContactPage.jsx`
- `src/pages/WhatWeSupportPage.jsx` or equivalent route page
- `src/components/PageHero.jsx`
- `src/components/SectionIntro.jsx`
- `src/index.css`

---

## Current design and layout guidance already established

### Typography
- strong serif headlines
- clean sans-serif body copy
- editorial feeling
- restrained, dignified, foundation-appropriate

### Layout
- not overly dense
- more horizontally confident than early versions
- section intros should not feel overly narrow
- cards should feel soft and intentional
- large-page headings should have presence but not feel absurdly tall

### Cards and surfaces
- soft rounded corners
- very subtle shadows
- gentle background variation
- nothing flashy

### Hero sections
- Home hero should feel important and emotional
- right-side support/focus panel currently exists but needs visual simplification and probably image support nearby or instead of so much text

---

## Most recent requested direction before handoff

The user explicitly said:

“I agree images are needed now, ones that start to set the tone and emotion of the site. Feel free to create what is needed. I'm needing this now to get a better feel for the site and additional adjustments.”

That means the next chat should focus on introducing tasteful placeholder imagery.

---

### Correct use of imagery going forward
The next chat should likely:

1. decide where imagery belongs in the current live React layout
2. either:
   - generate a few standalone image assets, or
   - design image areas and placeholders and insert them in the actual site
3. keep imagery:
   - warm
   - human
   - nonprofit and foundation appropriate
   - focused on community care, food support, education, human connection, service, and dignity
4. avoid:
   - stock-photo cliché overload
   - excessive emotional manipulation
   - flashy collage behavior
   - overly religious visuals

### Good image themes
Potential image directions:

- volunteers preparing food or care packages
- intergenerational local community interaction
- educational support, tutoring, or language learning
- nonprofit service moments
- dignified humanitarian support scenes
- warm indoor light, natural color, candid human expressions

---

## Recommended next priorities for the new chat

### Priority 1 — Introduce imagery
Add restrained, elegant placeholder imagery to bring warmth and tone to the site.

Most likely good candidates:
- Home hero or adjacent section
- Home partner/impact band
- Possibly What We Support or Contact
- Maybe a single large image plus one or two smaller supporting images

### Priority 2 — Refine homepage hero
The hero currently works typographically, but the right-side panel is still text-heavy.
Options:
- reduce panel content further
- convert part of the panel into a visual block
- pair hero text with a strong image rather than a text-dense card
- explore split layout where image provides emotional tone

### Priority 3 — Visual polish
Continue refining:
- section contrast
- spacing rhythm
- footer
- CTA blocks
- card consistency

### Priority 4 — Transparency scaffolding
Eventually add downloadable placeholder/report sections for:
- annual reports
- 990s and financial documents
- governance and public materials

### Priority 5 — Future content depth
Still needed later:
- more partner examples
- possible board bios
- possible actual reports or PDF links
- maybe a simple inquiry workflow or form later

---

## Suggested immediate tasks for the next chat

A strong next sequence would be:

1. review current local codebase
2. inspect `HomePage.jsx`, `WhatWeSupportPage.jsx`, `ContactPage.jsx`, and `index.css`
3. add tasteful placeholder image sections or assets
4. simplify or redesign the home hero right-side area
5. check mobile responsiveness after imagery is added
6. refine spacing and emotional tone

---

## Final summary for next chat

You are inheriting a Charis Legacy Foundation website rebuild that is already structurally strong and content-rich enough to feel legitimate. The main remaining gap is visual warmth and emotional resonance, especially through images and a slightly more expressive homepage. Keep the design restrained, foundation-like, and credible. Do not turn it into a fundraising or startup site. Use imagery to support the mission of practical care, local stewardship, educational opportunity, and thoughtful nonprofit partnership.
