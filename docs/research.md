# Marketing and design research

Reviewed September 25, 2026. Recommendations below are design choices based on current accessible guidance, not promises of conversion results.

## Product grounding

The iOS app's `Theme/Palette.swift` defines raspberry `#b72855`, blush `#e47fad`, lavender `#e6cbf2`, cool background `#f9f9fb`, and ink `#222228`. `Theme/Typography.swift` uses Hanken Grotesk for UI and Newsreader for editorial moments. Those actual bundled typefaces are used here.

Real screenshots come from `AppStore/Screenshots/Source/iPhone-14-Plus`. They show deterministic illustrative data, not customer health information. Copy follows the existing support and privacy pages: on-device health processing, optional analytics without health content, own-baseline comparisons, evidence thresholds, and an accurate Free/Plus split.

## Marketing references and how they affect the page

- [Unbounce SaaS conversion benchmark](https://unbounce.com/conversion-benchmark-report/saas-conversion-rate/): clear, readable language and mobile usability. This is accessible benchmark research based on the 2024 report, not a new 2026 experiment. SaaS findings are directional for this consumer iPhone app, not a target conversion rate.
- [NN/g homepage guidance collection](https://www.nngroup.com/topic/homepages/?asset=publications): make the offering and next step understandable. The hero names Apple Health and describes the benefit; the download destination is consistent throughout.
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide): descriptive titles, useful unique content, crawlable links, and understandable structure. All pages are rendered to HTML, with appropriate language metadata and canonical URLs configured for the deployment destination.
- [Google Core Web Vitals guidance](https://developers.google.com/search/docs/appearance/core-web-vitals): loading, responsiveness, and layout stability matter. Images have dimensions; lower screenshots load lazily; typography is locally hosted; no third-party marketing scripts are installed. Actual field performance must be measured after deployment.

## Pinterest and visual references

- [WELL — editorial wellness website](https://www.pinterest.com/pin/316940892547140289/). Inspected the pin image through its public image URL. Useful: generous whitespace, large serif headings, quiet color fields, and a clear visual rhythm. Adapted those principles to Reasons Within's raspberry/lavender palette and actual app screens.
- [Genie mental health app and website](https://uk.pinterest.com/pin/774548835949570433/). Found through Pinterest search; direct Pinterest fetching was unavailable. Cross-checked the associated [Fulcrum Rocks product showcase](https://dribbble.com/shots/22401563-Genie-Mental-Health-App-Mobile-animation-Ui-animation) through image search. Useful: product-centered presentation and gentle visual tone.
- [Healthcare clean minimalist landing page](https://in.pinterest.com/pin/healthcare-clean-minimalist-landing-page-di-2025--1114640976525252579/). Search-discovered reference only; direct pin content could not be fetched. Not treated as evidence for detailed design decisions.

Pinterest supplies visual inspiration, not evidence of marketing effectiveness. No third-party reference images, layouts, testimonials, or claims have been copied into the site.

## Page decisions

1. Lead with a personal benefit and immediately identify the iPhone/Apple Health product.
2. Use actual UI as product proof; label fixture data as illustrative.
3. Keep App Store download as the primary conversion action.
4. Explain the free offer and paid additions without invented prices or trials.
5. Put privacy before pricing because health data is central to the product.
6. Address data requirements, evidence timing, cost, and medical scope in accessible FAQs.
7. Preserve support, legal content, and language navigation.
8. Keep the public site lightweight and fully readable without JavaScript.

No invented endorsements, ratings, scarcity, customer counts, or health outcomes are included. The website does not claim causal findings, clinical accuracy, or guaranteed recovery predictions.

## Official App Store badge

Verified against [Apple’s marketing guidelines](https://developer.apple.com/app-store/marketing/guidelines/). The hero uses [Apple’s official black SVG](https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg), downloaded unchanged to `public/assets/download-on-the-app-store.svg`. It renders at 48px high with its original aspect ratio, with 12px clear space on all sides. No recoloring, rotation, hover movement, or recreated Apple logo is applied. A trademark credit is included in the footer. Other calls to action remain ordinary text links/buttons, so the layout contains one App Store badge.
