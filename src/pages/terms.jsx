import { asset } from "../asset.js";

export default function Page11() {
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
          <a href={asset("/terms.html")} lang="en" aria-current="page">
            {"English"}
          </a>
          {"\n    "}
          <a href={asset("/uk/terms.html")} lang="uk">
            {"Українська"}
          </a>
          {"\n    "}
          <a href={asset("/fr/terms.html")} lang="fr">
            {"Français"}
          </a>
          {"\n    "}
          <a href={asset("/es/terms.html")} lang="es">
            {"Español"}
          </a>
          {"\n  "}
        </nav>
        {"\n\n  "}
        <h1>{"Terms of Use"}</h1>
        {"\n  "}
        <p className="date">{"Reasons Within · Effective 16 September 2026"}</p>
        {"\n\n  "}
        <p>
          {"These terms supplement "}
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
            {"Apple’s Standard Licensed Application End User License Agreement"}
          </a>
          {
            " (the “Standard EULA”), which governs your license to use Reasons Within. If these terms conflict with the Standard EULA, the Standard EULA controls."
          }
        </p>
        {"\n\n  "}
        <h2>{"General wellness only"}</h2>
        {"\n  "}
        <p>
          {
            "Reasons Within is a self-knowledge and general wellness tool. It is not a medical device and does not provide a diagnosis, treatment, medical advice, emergency monitoring, or a substitute for professional care. Do not delay seeking medical help because of information shown in the app. Contact local emergency services in an emergency."
          }
        </p>
        {"\n\n  "}
        <h2>{"Your data and results"}</h2>
        {"\n  "}
        <p>
          {
            "The app depends on data made available by Apple Health, connected devices, and information you enter. Measurements may be incomplete, delayed, inaccurate, or unavailable. Patterns, readiness, Bio Age, reviews, and forecasts are estimates and observations, not proof of cause and effect or guarantees of future outcomes. You remain responsible for decisions about your health and activity."
          }
        </p>
        {"\n\n  "}
        <h2>{"Reasons Within Plus"}</h2>
        {"\n  "}
        <p>
          {
            "Reasons Within Plus is offered as monthly and yearly auto-renewable subscriptions. The app shows the subscription duration, included features, and full local price before purchase. Payment is charged to your Apple Account after confirmation."
          }
        </p>
        {"\n  "}
        <p>
          {
            "Your subscription renews automatically unless it is canceled at least 24 hours before the end of the current period. Apple charges renewal to your Apple Account. You can manage or cancel through your Apple Account subscription settings or from Reasons Within → Settings → Reasons Within Plus → Manage subscription. Deleting the app does not cancel a subscription."
          }
        </p>
        {"\n  "}
        <p>
          {
            "Use Restore purchases if an active entitlement is not recognized. Billing, refunds, offer codes, and subscription management are handled by Apple under App Store rules. Features requiring sufficient personal history remain subject to their evidence requirements even with Plus."
          }
        </p>
        {"\n\n  "}
        <h2>{"Acceptable use"}</h2>
        {"\n  "}
        <p>
          {
            "You may use Reasons Within only for lawful, personal purposes and in accordance with the Standard EULA. You may not misuse the app, interfere with its operation, attempt unauthorized access, or use it to violate another person’s rights."
          }
        </p>
        {"\n\n  "}
        <h2>{"Intellectual property"}</h2>
        {"\n  "}
        <p>
          {
            "Reasons Within, including its design, text, software, and branding, is licensed rather than sold and remains protected by applicable intellectual-property law. Rights not expressly granted by the Standard EULA are reserved."
          }
        </p>
        {"\n\n  "}
        <h2>{"Availability and changes"}</h2>
        {"\n  "}
        <p>
          {
            "We may improve, change, suspend, or discontinue features. HealthKit, StoreKit, widgets, notifications, and on-device model availability depend on Apple services, compatible hardware, operating-system support, permissions, and sufficient data."
          }
        </p>
        {"\n\n  "}
        <h2>{"Privacy"}</h2>
        {"\n  "}
        <p>
          {"The "}
          <a href={asset("/privacy.html")}>{"Privacy Policy"}</a>
          {
            " explains how Reasons Within handles information and is incorporated into these terms."
          }
        </p>
        {"\n\n  "}
        <h2>{"Eligibility"}</h2>
        {"\n  "}
        <p>
          {
            "You may use Reasons Within only if you can legally agree to these terms where you live. If local law requires authorization from a parent or guardian, you must have that authorization."
          }
        </p>
        {"\n\n  "}
        <h2>{"Contact"}</h2>
        {"\n  "}
        <p>
          {"Questions about these terms: "}
          <a href="mailto:info@reasonswithin.com">{"info@reasonswithin.com"}</a>
          {"."}
        </p>
        {"\n\n  "}
        <footer>
          <a href={asset("feedback/")}>{"Feedback"}</a>
          {"\n    "}
          <a href={asset("/index.html")}>{"Home"}</a>
          {"\n    "}
          <a href={asset("/support.html")}>{"Support"}</a>
          {"\n    "}
          <a href={asset("/privacy.html")}>{"Privacy Policy"}</a>
          {"\n  "}
        </footer>
        {"\n"}
      </main>
      {"\n"}
    </>
  );
}
