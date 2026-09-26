# App Store links

These pages are implemented as React components and prerendered to complete HTML. They work without JavaScript or sign-in. Their text matches the existing site's pages in all four languages.

Use `https://www.reasonswithin.com` followed by the path below. These paths are relative to the configured site base, including a subdirectory if applicable.

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

Local addresses cannot be submitted to App Store Connect. The `www` production site was verified live on September 26, 2026. Use the full HTTPS URLs above; the apex domain currently has no working DNS.

The Terms of Use link can be used wherever a link to the website's terms is needed; it is not itself a replacement for configuring an EULA in App Store Connect.

The published App Store listing and shipped iOS versions still point at the previous GitHub Pages domain. The legacy Pages deployment preserves those addresses and forwards each locale to its corresponding production page. Do not disable it after changing App Store metadata.

Update the App Store Connect Marketing URL to `https://www.reasonswithin.com/`, Privacy Policy URL to `https://www.reasonswithin.com/privacy/`, Support URL to `https://www.reasonswithin.com/support/`, and the privacy link inside the description. Use the localized paths above for localized metadata. Updating this repository does not change App Store Connect fields.

The iOS app's `ReasonsWithinIos/Sources/ReasonsWithin/App/LegalLinks.swift` should use the same `www` base and clean `privacy/` and `terms/` paths for future releases.

References:

- https://developer.apple.com/help/app-store-connect/reference/app-information/app-information
- https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy
