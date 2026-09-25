# Activate feedback on the website and in the app

The website is configured with the owner-provided published form: https://forms.fillout.com/t/8GZ6z9esr9us. The public URL is stored in `.env` and can be overridden by deployment configuration. Trello authorization is managed inside Fillout. No test submission or Trello card was created by this project; end-to-end delivery still needs confirmation from the owner.

## Create the form

1. Create a free Fillout account at https://www.fillout.com/ and start a blank form named Reasons Within Feedback.
2. Add required Type (Report a bug / Suggest a feature / General feedback) and Message fields. Add optional Email, App version, and iOS version fields.
3. Say that email is only needed for a reply. Add: “Please don’t include health measurements, personal notes, or other sensitive information.”
4. Add a brief description that Fillout processes submissions and Reasons Within reviews them in a private Trello board. Link to the website Privacy Policy.
5. Open Integrate → Trello, authorize the account, select the private board and New feedback list. Set the card title to the feedback type and map the message, email, versions, language, and source into the description.
6. Finish setup, Publish, then Share → Copy link. It normally resembles `https://forms.fillout.com/t/FORM_ID`.
7. Set `VITE_FILLOUT_URL` in `.env.local` to this link and rebuild. The public form URL is configuration, not a secret; never add Trello credentials to the website.
8. Check the real embed, submit a clearly labeled test, confirm the Trello card, and remove the test record. This is still outstanding until account setup is complete.

Fillout includes 1,000 responses/month on Free. CAPTCHA, branding removal, custom CSS/fonts, and built-in multilingual translation have paid-plan restrictions. For free translations, duplicate the form and set optional `VITE_FILLOUT_URL_UK`, `_FR`, `_ES` links. Each duplicate needs its own Trello integration. Without a translated URL, that language page uses the main form; passing `lang` alone does not translate its questions.

## Shared website/app entry point

- English: `/feedback/`
- Ukrainian: `/uk/feedback/`
- French: `/fr/feedback/`
- Spanish: `/es/feedback/`

The website reads only these optional context parameters:

- `source=ios` (otherwise `website`)
- `app_version=1.2.3`
- `ios_version=26.0`

The page sets `lang` from its own language route. All other incoming URL parameters are discarded before opening Fillout. The iframe sends no Referer header. Email, health data, identifiers, and free text must never be put in the URL.

In Fillout Settings → URL parameters, register `source`, `lang`, `app_version`, and `ios_version`. Map these into the Trello description. They are user-editable context, not trusted authentication or verified diagnostics.

The website always offers email fallback. Configured forms also have a direct link, which remains available without JavaScript. The page does not display a success message of its own; Fillout handles actual submission results.

## iOS integration handoff

Once the final site is publicly deployed, add Settings → Send feedback, localized in the app's four languages. Open the localized website URL in `SFSafariViewController` from a sheet, with a Done action. Use `URLComponents` and `URLQueryItem` for the source/version values. Versions can come from `CFBundleShortVersionString` and the OS version. Never append HealthKit values, Feel entries, personal notes, advertising identifiers, or analytics IDs.

For example, using a placeholder domain only:

`https://your-domain.example/feedback/?source=ios&app_version=1.2.3&ios_version=26.0`

The app should link to the website page so form changes do not require an app release. Show a brief explanation that the feedback page is external and optionally shares app/iOS versions. Do not ship a Settings link until its final public URL works. The existing iOS `LegalLinks.swift` still points at the previous GitHub Pages site; no app changes were made during this website integration.

## References

- https://www.fillout.com/help/trello
- https://www.fillout.com/help/sharing
- https://www.fillout.com/help/url-parameters
- https://www.fillout.com/pricing
