# Homelings website (`public_web/`)

A static site with no build step, no backend, no cookies and no trackers. Upload the folder as it is to any static host.

| Page | Purpose | Where it is used |
|---|---|---|
| `index.html` | Home: what the game is, how it plays, worlds, features, screenshots, FAQ | Store listing "Website" link |
| `about.html` | Detailed explanation: rules, worlds, design principles, audience, funding, languages | Linked from Home |
| `privacy-policy.html` | Privacy policy, based on the app's actual services | Play Console → App content → Privacy policy; also the in-app link (`--dart-define=PRIVACY_POLICY_URL=…`) |
| `terms.html` | Terms and conditions | Linked from every page |
| `delete-account.html` | No accounts exist; how to delete local, purchase, analytics and ad data | Play Console Data safety deletion questions (the account-deletion URL field only applies to apps with accounts) |

The assets are self-hosted:
- Fredoka font as WOFF2, under its OFL licence in `assets/fonts/OFL.txt`;
- WebP images made from `brand/`;
- one small script, `assets/js/site.js`, for the mobile menu and the copyright year. The site also works without JavaScript.

## Before publishing: details only the owner can confirm
Every one of these is highlighted in yellow (`class="confirm"`) on the pages. Search for `confirm"` to find them all.

1. **Developer / publisher name.** It appears in the footer of every page, the privacy policy, the terms and the deletion page.
2. **Postal address and country.** It appears in the privacy policy, the terms and the deletion page. GDPR requires controller identity and contact details.
3. **Contact email `support@homelings.io`.**
   - It must be a real, monitored mailbox. The `homelings.io` domain is not registered yet (docs/04).
   - To use another address, replace it in all five pages.
   - The deletion page promises a reply within 30 days; confirm that's workable.
4. **Analytics retention period.** Check Google Analytics → Data settings → Data retention (2 or 14 months) and put the value in privacy policy §7.
5. **Legal bases** in privacy policy §4: confirm them with a legal adviser.
6. **Website host** in privacy policy §12, e.g. Firebase Hosting or GitHub Pages.
7. **Governing law and courts** in terms §12.
8. **A lawyer's review** of the terms and the privacy policy for your country.
9. **The Google Play link** (`https://play.google.com/store/apps/details?id=io.homelings.game`) works once the app is published.

After confirming, remove the `class="confirm"` highlight, for example by deleting the `.confirm` rule in `assets/css/site.css`.

## Keep it accurate
The texts describe the app as built on 2026-10-31. Update them when any of these change:
- **a new SDK, a new kind of data, or accounts:** privacy policy §3, data safety, and the deletion page;
- **ad placements, or the Remove-ads product:** home FAQ, about page, terms §4;
- **level count, worlds or languages:** home and about pages;
- **colour-blind claims:** the site says "several worlds draw a small symbol on each colour". Clover Meadow and Lilypad Pond have none (PROGRESS P4).

Also change the "Last updated" date at the top of any legal page you edit.

## Publishing
Any static host works. Two free options:

**Firebase Hosting** (same project as the game's Firebase):
```bash
npm install -g firebase-tools
firebase login
cd <repo root>
firebase init hosting      # public directory: public_web · single-page app: No · overwrite index.html: No
firebase deploy --only hosting
```
Then add the custom domain (e.g. `homelings.io`) in the Firebase console → Hosting.

**Cloudflare Pages or Netlify:** create a project, set the build command to *none* and the output directory to `public_web`, or drag the folder into the dashboard.

## After publishing
- Play Console → App content → **Privacy policy**: `https://<domain>/privacy-policy.html`.
- Build the app with `--dart-define=PRIVACY_POLICY_URL=https://<domain>/privacy-policy.html`, so Settings → Privacy policy opens the page.
- Play Console → Store listing → **Website**: `https://<domain>/`.
- **AdMob `app-ads.txt`:** once you have your AdMob publisher ID, add a file `public_web/app-ads.txt` with the line AdMob shows you, for example `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`. Redeploy. The domain must match the website in the Play listing.
