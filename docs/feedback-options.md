# Feedback collection options

Research checked September 25, 2026. No external accounts, forms, or Trello cards were created.

## Recommendation

Keep the existing free Trello board as the internal feedback queue. Give users a public `/feedback/` page, linked from Support and the footer, without requiring a Trello account.

The simplest starting option is an embedded Fillout form connected directly to Trello. Free includes 1,000 responses/month and embedding. Fillout documents a native Trello integration that maps answers to a card title and description in a selected board/list. Branding removal, custom fonts/CSS, and CAPTCHA are paid features. Confirm the integration is available in the selected account during setup before launch.

A custom React form with a serverless endpoint is the best option for exact brand styling and control over validation, spam handling, and submission flow. It requires a separately configured backend because the current site is static. The endpoint, not the browser, holds Trello credentials and the destination list ID. It must validate content, limit abuse, avoid duplicate cards on retries, and report success only after the submission has been accepted. Runtime secrets never belong in Vite public environment variables.

Tally is a useful alternative: unlimited submissions under its fair-use policy, free embeds and reCAPTCHA. Trello is not listed among its direct integrations; connect through a webhook/backend or an automation service with its own limits. Formspree supports a custom form without operating a backend, but its free plan is limited to 50 submissions/month and 30 days of archive history. Trello forwarding or a paid integration needs separate setup.

## Proposed form

Title: Share your feedback

Intro: Tell us what worked, what felt confusing, or what you would like to see next.

- Type (required): Report a bug / Suggest a feature / Share feedback.
- Message (required): What happened, or what would you like to improve?
- Email (optional): Only if you would like a reply.
- For bugs only: app version and iOS version (optional); ask what was expected and what happened in the message prompt.
- No name requirement, login, health measurements, or attachments in the initial version.
- Short notice: Please do not include health measurements, personal notes, or other sensitive information. Link to the Privacy Policy.
- Success: Thanks—your feedback has been received. If you left an email, we may contact you with a follow-up question.
- Failure: We could not send your feedback. Please try again, or email info@reasonswithin.com. Preserve the message while retrying.

Offer the page in the website's four languages. Keep a visible email fallback, including if an embedded form does not load. Avoid implying that website feedback stays on the iPhone: the chosen form provider and Trello receive it. Update the privacy description to match the selected workflow before enabling submissions.

## Trello organization

Use a private board and these lists:

New → Reviewing → Planned → In progress → Done

Optional: Not planned.

Use labels for Bug, Feature request, and General feedback. Store the category, message, optional reply address, optional versions, language, source, and submission ID in the card description. Custom Fields are a paid Trello feature, so do not depend on them. Reply through the support mailbox; internal Trello comments do not automatically become customer replies. Review and consolidate duplicate requests regularly.

Trello Free includes unlimited cards, up to 10 boards and 10 collaborators per workspace, and 250 workspace command runs/month. This automation allowance is not a 250-card limit.

Email-to-board is an alternative delivery route. Its unique address must remain private; anyone with it can create cards as the owner. Do not embed it into public HTML or a mailto link.

## Setup required once an option is chosen

Embedded form: create the form in the owner's account, connect the intended Trello board/list, configure fields and success/error handling, then provide the published form link for the site's embed. Test one clearly labeled submission end to end before launch.

Custom form: choose serverless hosting, configure Trello authorization and list ID as server secrets, select abuse protection, then test successful, invalid, duplicate, and failed requests. A native form cannot directly expose the owner's Trello write token to anonymous visitors.

## Sources

- Trello pricing: https://trello.com/pricing
- Trello card API: https://developer.atlassian.com/cloud/trello/rest/api-group-cards
- Email-to-board: https://support.atlassian.com/trello/docs/creating-cards-by-email/
- Fillout pricing and free-plan limits: https://www.fillout.com/pricing
- Fillout Trello setup: https://www.fillout.com/help/trello
- Tally integrations: https://tally.so/help/integrations
- Tally free submissions: https://tally.so/help/faq
- Tally fair-use policy: https://tally.so/help/fair-use-policy
- Tally CAPTCHA: https://tally.so/help/recaptcha
- Formspree limits: https://help.formspree.io/articles/account-management/account-limits
- Cloudflare Workers pricing (possible custom endpoint host): https://developers.cloudflare.com/workers/platform/pricing/
