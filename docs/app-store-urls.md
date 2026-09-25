# App Store links

These pages are implemented as React components and prerendered to complete HTML. They work without JavaScript or sign-in. Their text matches the existing site's pages in all four languages.

Use your deployed `SITE_URL` followed by the path below. These paths are relative to the configured site base, including a subdirectory if applicable.

| Destination        | English     | Ukrainian      | French         | Spanish        |
| ------------------ | ----------- | -------------- | -------------- | -------------- |
| Privacy Policy URL | `/privacy/` | `/uk/privacy/` | `/fr/privacy/` | `/es/privacy/` |
| Support URL        | `/support/` | `/uk/support/` | `/fr/support/` | `/es/support/` |
| Terms of Use link  | `/terms/`   | `/uk/terms/`   | `/fr/terms/`   | `/es/terms/`   |
| Marketing URL      | `/`         | `/uk/`         | `/fr/`         | `/es/`         |

Local previews:

- http://127.0.0.1:4173/privacy/
- http://127.0.0.1:4173/support/
- http://127.0.0.1:4173/terms/

Local addresses cannot be submitted to App Store Connect. Deploy the site publicly first, then use the final HTTPS URLs. Deployment remains separate as requested.

The Terms of Use link can be used wherever a link to the website's terms is needed; it is not itself a replacement for configuring an EULA in App Store Connect.

The iOS app currently points at the previous GitHub Pages domain in `ReasonsWithinIos/Sources/ReasonsWithin/App/LegalLinks.swift`. Update that base URL when migrating to the new domain; also update its page paths to `privacy/` and `terms/`.

References:

- https://developer.apple.com/help/app-store-connect/reference/app-information/app-information
- https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy
