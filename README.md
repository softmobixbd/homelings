# Homelings website (`public_web/`)

A static site with no build step, no backend, no cookies and no trackers.

**Live at https://softmobixbd.github.io/homelings/** (GitHub Pages, repo [softmobixbd/homelings](https://github.com/softmobixbd/homelings), branch `main`, root folder). This folder is the source; the Pages repo is a copy of it (see Publishing).

| Page | Purpose | Where it is used |
|---|---|---|
| `index.html` | Home: what the game is, how it plays, worlds, features, screenshots, FAQ | Store listing "Website" link |
| `about.html` | Detailed explanation: rules, worlds, design principles, audience, funding, languages | Linked from Home |
| `privacy-policy.html` | Privacy policy, based on the app's actual services | Play Console → App content → Privacy policy; also the in-app Settings link |
| `terms.html` | Terms and conditions | Linked from every page |
| `delete-account.html` | No accounts exist; how to delete local, purchase, analytics and ad data | Play Console Data safety deletion questions (the account-deletion URL field only applies to apps with accounts) |

The assets are self-hosted:
- Fredoka font as WOFF2, under its OFL licence in `assets/fonts/OFL.txt`;
- WebP images made from `brand/`;
- one small script, `assets/js/site.js`, for the mobile menu and the copyright year. The site also works without JavaScript.

## Publisher details (filled in 2026-10-31)
Taken from the studio site https://softmobixbd.github.io/ and matched to the studio's other policies (NumIQ, Color Flood):
- **Publisher:** SoftMobiXBD, an independent studio in Bangladesh run by an individual developer (not a registered company). No street address is published, the same as the studio's other apps.
- **Contact:** softmobixbd@gmail.com · +880 1644-426285 · https://softmobixbd.github.io/. This replaces the earlier `support@homelings.io` placeholder (that domain is not registered).
- **Governing law:** People's Republic of Bangladesh. Courts of Bangladesh, or of the player's home country where the law gives that right.
- **Website host:** GitHub Pages (privacy policy §12).
- **Analytics retention:** the privacy policy says "no more than 14 months". Keep the Google Analytics property's data retention at 2 or 14 months (Admin → Data retention). Don't choose a longer setting without updating §7.

Still recommended, though not blocking: a lawyer's review of the terms and privacy policy.

The Google Play links (`https://play.google.com/store/apps/details?id=io.homelings.game`) start working once the app is published.

## Keep it accurate
The texts describe the app as built on 2026-10-31. Update them when any of these change:
- **a new SDK, a new kind of data, or accounts:** privacy policy §3, data safety, and the deletion page;
- **ad placements, or the Remove-ads product:** home FAQ, about page, terms §4;
- **level count, worlds or languages:** home and about pages;
- **colour symbols:** the about page says every critter and every home carries a symbol for its colour (true in all worlds since 2026-10-31, P4). The game screenshots (`assets/img/screen-1…5.webp`) are `brand/store/phone/screenshot-01…05.png` at 540×960, WebP quality 80.

Also change the "Last updated" date at the top of any legal page you edit.

## Publishing (GitHub Pages)
The Pages repo `softmobixbd/homelings` serves its `main` branch root. Any push to it goes live in a minute or two; check the run under the repo's **Actions** tab. To publish changes made here:
```bash
git clone https://github.com/softmobixbd/homelings.git /tmp/homelings-pages   # once
rsync -a --delete --exclude .git public_web/ /tmp/homelings-pages/
cd /tmp/homelings-pages && git add -A && git commit -m "Update site" && git push
```
`.nojekyll` makes GitHub Pages serve the files exactly as they are, without Jekyll.

## Store and app links
- Play Console → App content → **Privacy policy**: `https://softmobixbd.github.io/homelings/privacy-policy.html`
- Play Console → Store listing → **Website**: `https://softmobixbd.github.io/homelings/` · **Email**: `softmobixbd@gmail.com`
- Data safety → data deletion: `https://softmobixbd.github.io/homelings/delete-account.html`
- The app's **Settings → Privacy policy** opens the privacy page by default (`privacyPolicyUrl` in `app/lib/services/config.dart`; override it with `--dart-define=PRIVACY_POLICY_URL=…`).
- **AdMob `app-ads.txt`:** AdMob looks for it at the root of the website's domain, `https://softmobixbd.github.io/app-ads.txt`, which belongs to the studio repo (`softmobixbd/softmobixbd.github.io`), not to this folder. It already lists `pub-9885361335927746`. If the Homelings AdMob app is under that same publisher account, nothing more is needed; otherwise add the new account's line there.
