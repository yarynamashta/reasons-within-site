import FeedbackPrivacyNotice from "../components/FeedbackPrivacyNotice.jsx";
import { asset } from "../asset.js";

export default function Page9() {
  return (
    <>
      <a className="skip-link" href="#main">
        {"Skip to content"}
      </a>
      {"\n"}
      <main id="main" className="wrap">
        {"\n  "}
        <nav className="language-nav" aria-label="Language">
          {"\n    "}
          <a href={asset("/privacy.html")} lang="en" aria-current="page">
            {"English"}
          </a>
          {"\n    "}
          <a href={asset("/uk/privacy.html")} lang="uk">
            {"Українська"}
          </a>
          {"\n    "}
          <a href={asset("/fr/privacy.html")} lang="fr">
            {"Français"}
          </a>
          {"\n    "}
          <a href={asset("/es/privacy.html")} lang="es">
            {"Español"}
          </a>
          {"\n  "}
        </nav>
        {"\n\n  "}
        <h1>{"Privacy Policy"}</h1>
        {"\n  "}
        <p className="date">{"Reasons Within · Effective 16 September 2026"}</p>
        {"\n\n  "}
        <p>
          {
            "This policy describes how the Reasons Within iOS app handles information. Reasons Within is operated by Yaryna Maksymiuk. Privacy questions and requests can be sent to "
          }
          <a href="mailto:info@reasonswithin.com">{"info@reasonswithin.com"}</a>
          {"."}
        </p>
        {"\n\n  "}
        <h2>{"Apple Health data"}</h2>
        {"\n  "}
        <p>
          {
            "With your permission, Reasons Within reads selected Apple Health categories, including heart, sleep, activity, body, respiratory, daylight, mindfulness, cycle, and related measurements. You decide which categories to allow."
          }
        </p>
        {"\n  "}
        <p>
          {
            "Raw Apple Health measurements are processed on your iPhone. They are not uploaded to Reasons Within servers, sold, used for advertising, or used to train machine-learning models. Reasons Within has no account system and operates no health-data server."
          }
        </p>
        {"\n\n  "}
        <h2>{"Information stored on your device"}</h2>
        {"\n  "}
        <p>
          {
            "The app stores information needed to provide its features locally, including:"
          }
        </p>
        {"\n  "}
        <ul>
          {"\n    "}
          <li>{"Feel check-ins and optional notes;"}</li>
          {"\n    "}
          <li>
            {
              "goals, language, notification time, breathing, and display preferences;"
            }
          </li>
          {"\n    "}
          <li>
            {
              "pattern reactions, pattern lifecycle, and forecast calibration history;"
            }
          </li>
          {"\n    "}
          <li>{"Weekly and Monthly Reviews and the Plus Archive;"}</li>
          {"\n    "}
          <li>{"widget snapshots and notification scheduling state."}</li>
          {"\n  "}
        </ul>
        {"\n  "}
        <p>
          {
            "This information is not uploaded to Reasons Within. Subscription entitlement is checked through Apple’s StoreKit service; Reasons Within does not receive your payment-card details."
          }
        </p>
        {"\n\n  "}
        <h2>{"On-device explanations"}</h2>
        {"\n  "}
        <p>
          {
            "On supported devices, a Monthly Review may use Apple’s on-device Foundation Models framework to phrase facts already calculated by the app. The prompt, health facts, and generated text remain on your device and are not sent to Reasons Within, PostHog, or a model-training service. When the framework is unavailable, the app uses a deterministic, localized summary."
          }
        </p>
        {"\n\n  "}
        <h2>{"What the app writes to Apple Health"}</h2>
        {"\n  "}
        <p>
          {
            "The only record Reasons Within can add to Apple Health is a mindful session for a breathing exercise you complete, and only after you grant write permission. The app never edits or deletes existing Health records."
          }
        </p>
        {"\n\n  "}
        <h2>{"Optional pseudonymous product analytics and diagnostics"}</h2>
        {"\n  "}
        <p>
          {
            "Before the analytics SDK is initialized, Reasons Within asks whether you want to share analytics. Only if you choose Share Analytics does the app send limited pseudonymous events to a PostHog project hosted in the European Union. These events use a random app-generated identifier and can include app version, operating-system and device information, timestamps, screens or features used, widget and notification interactions, purchase-flow outcomes, and technical error information."
          }
        </p>
        {"\n  "}
        <p>
          {
            "Some operational events include limited categories or counts derived from app behavior—for example, a pattern type and stage, whether a forecast was eligible, agreement counts, or the identifier and availability status of a Health query. They do not include raw health measurements, Health dates, Feel scores or notes, notification content, review or archive text, exported content, or Foundation Models prompts and output."
          }
        </p>
        {"\n  "}
        <p>
          {
            "Reasons Within does not send PostHog your name, email address, Apple Account, or advertising identifier and does not call PostHog’s identify API. As with any internet request, PostHog’s service receives the connecting IP address. We do not use analytics to track you across other companies’ apps or websites, and we do not use it for advertising."
          }
        </p>
        {"\n  "}
        <p>
          {
            "Analytics events are kept only for as long as reasonably necessary to evaluate reliability and feature use, then deleted or aggregated. PostHog acts as our analytics processor and is required to protect the information it handles. Learn more in "
          }
          <a href="https://posthog.com/privacy">{"PostHog’s privacy notice"}</a>
          {"."}
        </p>
        {"\n\n  "}
        <h2>{"Retention and deletion"}</h2>
        {"\n  "}
        <p>
          {
            "Local information remains until you remove it through the app, overwrite it through normal use, or delete the app. Deleting Reasons Within removes its local database, preferences, archive, and widget container from the device. A mindful session already written to Apple Health remains in Health until you delete it there."
          }
        </p>
        {"\n  "}
        <p>
          {
            "To request access to or deletion of analytics associated with your app-generated identifier, contact "
          }
          <a href="mailto:info@reasonswithin.com">{"info@reasonswithin.com"}</a>
          {
            ". We may need limited device or event details to locate the relevant records."
          }
        </p>
        {"\n\n  "}
        <h2>{"Your choices"}</h2>
        {"\n  "}
        <p>
          {
            "Analytics is based on your consent. You can allow or withdraw it at any time in Reasons Within → Settings → Share analytics and diagnostics. Withdrawing consent stops future collection and does not change app functionality. You can change Health permissions in the Health app by opening your profile, then Apps → Reasons Within. Notification permissions are controlled in iOS Settings."
          }
        </p>
        {"\n  "}
        <p>
          {
            "You may also contact us to exercise privacy rights available where you live, including access, correction, deletion, restriction, objection, withdrawal of consent, or lodging a complaint with a supervisory authority."
          }
        </p>
        {"\n\n  "}
        <h2>{"No advertising or data sales"}</h2>
        {"\n  "}
        <p>
          {
            "Reasons Within contains no advertising, does not sell personal information, and does not share information with data brokers or advertisers."
          }
        </p>
        {"\n\n  "}
        <h2>{"Children’s privacy"}</h2>
        {"\n  "}
        <p>
          {
            "The app does not ask for a user’s age and does not send names, contact details, or raw Apple Health data through analytics. If you believe information relating to a child was submitted to us, contact us so we can investigate and delete it where applicable."
          }
        </p>
        {"\n\n  "}
        <h2>{"International processing"}</h2>
        {"\n  "}
        <p>
          {
            "Analytics is processed through PostHog’s European Union hosting. Apple processes App Store purchases and Apple Health services under its own terms and privacy policy."
          }
        </p>
        {"\n\n  "}
        <h2>{"Changes"}</h2>
        {"\n  "}
        <p>
          {
            "We may update this policy when the app or legal requirements change. We will revise the effective date on this page. Material changes will be communicated in the app or App Store listing when appropriate."
          }
        </p>
        {"\n\n  "}
        <h2>{"Contact"}</h2>
        {"\n  "}
        <p>
          {"Privacy questions or requests: "}
          <a href="mailto:info@reasonswithin.com">{"info@reasonswithin.com"}</a>
          {"."}
        </p>
        {"\n\n  "}
        <FeedbackPrivacyNotice lang="en" />
        <footer>
          <a href={asset("feedback/")}>{"Feedback"}</a>
          {"\n    "}
          <a href={asset("/index.html")}>{"Home"}</a>
          {"\n    "}
          <a href={asset("/support.html")}>{"Support"}</a>
          {"\n    "}
          <a href={asset("/terms.html")}>{"Terms of Use"}</a>
          {"\n  "}
        </footer>
        {"\n"}
      </main>
      {"\n"}
    </>
  );
}
