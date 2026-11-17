# Charis Legacy Foundation

React + Vite website with four primary pages: Home, About, What We Support, and Contact. Existing photography, partner logos, board membership, and public filings are retained.

## Local development

```bash
npm install
npm run dev
```

The Vite server prints the local review URL. Local contact submissions deliberately show that messages have not been sent; they never show a false success.

## Production build

```bash
npm run build
npm run preview
```

Netlify build settings are in `netlify.toml`: build with `npm run build` and publish `dist`. The SPA fallback and permanent redirects for retired Partners, Impact, and Transparency URLs are in `public/_redirects`. Client-side redirects also work in Vite preview.

## Content

- Board members, partner descriptions/logos, navigation, and invitation-only policy: `src/data/siteContent.js`.
- Four pages: `src/pages/`.
- Existing image assets: `public/images/`. All seven former page images are incorporated without editing the originals.
- Public IRS filings: `public/docs/990s/`. PDFs are listed automatically on About, newest year first.
- Global styles: `src/styles/index.css`.

The invitation policy describes funding **provided by** the foundation and appears near the bottom of What We Support and on Contact. Contact welcomes incoming donations through the contact form’s Donation inquiry option; the site does not process payments or accept unsolicited grant applications.

## Contact form activation on Netlify

The form follows the Falkirk approach: Netlify Forms (`contact`), a honeypot, native required-field validation, and an input named `email` for notification Reply-To. The static definition in `index.html` lets Netlify detect the React form at deploy time. Keep its field names synchronized with `src/pages/ContactPage.jsx`.

The interface has pending, success, and error states. Failed submissions retain the message. A success is shown only after an HTTP success from the hosting endpoint. Localhost and Vite development submissions are blocked so the development server cannot falsely report that a message was delivered.

Before putting the form into service:

1. Enable Netlify form detection for the **Charis** site and deploy this build.
2. Confirm that Netlify lists the `contact` form.
3. Under Forms → Submission notifications, add email notifications for **both** `support@falkirkllc.com` and `board@charislegacy.org`. Recipients belong in hosted settings, never public JavaScript or HTML.
4. Complete any recipient confirmation required by Netlify.
5. Submit a clearly labeled test on the deployed site. Verify that it appears in Netlify, reaches both inboxes, and that Reply-To uses the requester's email.

Email notification settings and inbox delivery cannot be established by the local build.

## Publishing

GitHub repository: `https://github.com/DaveRJ-AI/Charis` (production branch: `main`).
Netlify project: `charisfoundation` (`4e889b9c-a2fb-4b1f-865c-4250b4c9b46c`).
Hosted address: `https://charisfoundation.netlify.app`.

Push approved source changes to `main` to trigger Netlify’s production build. Netlify builds `dist` from source; generated `dist` files are not tracked. Keep Netlify form detection enabled (`processing_settings.ignore_html_forms = false`). Configure recipients in Netlify, not in public code. Domain/DNS and HTTPS status are separate from a successful deploy.

Official references: [Netlify form setup](https://docs.netlify.com/manage/forms/setup/) and [submission notifications](https://docs.netlify.com/manage/forms/notifications/).


## Deployment verification — November 17, 2026

- Approved redesign published through GitHub → Netlify from commit `186b14a3ddfff10103f94e8a369f5ba7335df038` (Netlify deploy `6afc6f0e97655631453e789a`).
- Netlify form detection enabled; `contact` form detected with honeypot protection.
- Notification recipients configured: `support@falkirkllc.com` and `board@charislegacy.org`. Board recipient confirmation completed.
- A labeled live deployment test reached Netlify. Akismet initially classified this automated test as spam; it was manually marked verified. The board notification and Reply-To header were checked in the connected mailbox. Receipt at the support inbox was not independently checked.
- Published pages, built assets, permanent redirects, and 2023/2024 PDF filings returned the expected responses.
- `charislegacy.org` and `www.charislegacy.org` are registered on the Netlify project, but the DNS cutover is pending WordPress account access. The domain still uses WordPress nameservers and website A records. Titan email MX records remain unchanged.

### Pending WordPress DNS cutover

Keep the WordPress nameservers and all email-related records. Replace the website apex A records (`192.0.78.24` and `192.0.78.25`) with `75.2.60.5` for host `@`. Set `www` CNAME to `charisfoundation.netlify.app`. Confirm the current recommended values in Netlify Domain management before making the change. After propagation, verify both domain variants and provision/check Netlify HTTPS. Do not remove or replace Titan MX, SPF, DKIM, or other email records.
