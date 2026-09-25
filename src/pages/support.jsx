import { asset } from "../asset.js";

export default function Page10() {
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
          <a href={asset("/support.html")} lang="en" aria-current="page">
            {"English"}
          </a>
          {"\n    "}
          <a href={asset("/uk/support.html")} lang="uk">
            {"Українська"}
          </a>
          {"\n    "}
          <a href={asset("/fr/support.html")} lang="fr">
            {"Français"}
          </a>
          {"\n    "}
          <a href={asset("/es/support.html")} lang="es">
            {"Español"}
          </a>
          {"\n  "}
        </nav>
        {"\n\n  "}
        <h1>{"Support"}</h1>
        {"\n  "}
        <p>
          {
            "Reasons Within reads Apple Health on your iPhone to surface careful patterns in your own history."
          }
        </p>
        {"\n\n  "}
        <div className="card">
          {"Need a hand? Email "}
          <a href="mailto:info@reasonswithin.com">{"info@reasonswithin.com"}</a>
          {
            ". Please do not include health measurements or other sensitive information in your message."
          }
        </div>
        {"\n\n  "}
        <div className="card feedback-callout">
          <p>Report a bug, suggest a feature, or share your thoughts.</p>
          <a href={asset("feedback/")}>{"Feedback"}</a>
        </div>
        <h2>{"Apple Health"}</h2>
        {"\n  "}
        <h3>{"The app is empty or cannot read Health."}</h3>
        {"\n  "}
        <p>
          {
            "Open the Health app, tap your profile picture, then Apps → Reasons Within. Enable the categories you are comfortable sharing. You can also open Reasons Within → Settings → Apple Health access. Apple does not reveal whether individual read categories were denied, so the app may show no data until access is enabled."
          }
        </p>
        {"\n\n  "}
        <h3>{"Why is a metric missing?"}</h3>
        {"\n  "}
        <p>
          {
            "The source device must first write that measurement to Apple Health. Some metrics need an Apple Watch or another compatible device, and sleep/recovery views need sufficiently recent measurements."
          }
        </p>
        {"\n\n  "}
        <h3>{"What does Reasons Within write to Apple Health?"}</h3>
        {"\n  "}
        <p>
          {
            "Only a mindful session for a breathing exercise you complete, and only after you allow it. The app never edits or deletes your existing Health records."
          }
        </p>
        {"\n\n  "}
        <h2>{"Patterns, reviews, and forecasts"}</h2>
        {"\n  "}
        <h3>{"Why do I not see a pattern yet?"}</h3>
        {"\n  "}
        <p>
          {
            "Patterns need enough consistent personal history. A finding can appear as building evidence first and becomes confirmed only when it continues to hold. Silence is preferable to a weak claim."
          }
        </p>
        {"\n\n  "}
        <h3>{"When does a recovery forecast appear?"}</h3>
        {"\n  "}
        <p>
          {
            "After an activity day, and only when your history contains enough confirmed recovery evidence. Forecasts pause when their recent accuracy no longer supports showing them."
          }
        </p>
        {"\n\n  "}
        <h3>{"How do Weekly and Monthly Reviews work?"}</h3>
        {"\n  "}
        <p>
          {
            "Your first Weekly Review is free; Plus unlocks a new one each week. Monthly Reviews compare completed calendar months when enough data exists. On supported iPhones, Apple’s on-device language model may phrase the verified monthly facts; otherwise the app uses a complete app-written summary. Inputs and outputs stay on the device."
          }
        </p>
        {"\n\n  "}
        <h3>{"Can I export a Monthly Review?"}</h3>
        {"\n  "}
        <p>
          {
            "Yes. Open the review and use Share. The export is created locally, and you choose where to send or save it."
          }
        </p>
        {"\n\n  "}
        <h2>{"Reasons Within Plus"}</h2>
        {"\n  "}
        <h3>{"What stays free?"}</h3>
        {"\n  "}
        <p>
          {
            "Daily readiness, Feel, Health, Trends, Pattern Evidence, and your first Weekly Review remain free."
          }
        </p>
        {"\n\n  "}
        <h3>{"What does Plus include?"}</h3>
        {"\n  "}
        <p>
          {
            "A new Weekly Review every week, Monthly Reviews, eligible recovery forecasts, an eight-week Bio Age trajectory, and the on-device Analysis and Pattern Archive."
          }
        </p>
        {"\n\n  "}
        <h3>{"How do I restore or manage my subscription?"}</h3>
        {"\n  "}
        <p>
          {
            "Open Reasons Within → Settings → Reasons Within Plus. Use Restore purchases if an active subscription is not recognized. Subscribers can choose Manage subscription to change or cancel through Apple. Deleting the app does not cancel a subscription."
          }
        </p>
        {"\n\n  "}
        <h3>{"How do I redeem an offer code?"}</h3>
        {"\n  "}
        <p>
          {
            "Open Reasons Within → Settings → Reasons Within Plus → Redeem offer code, then follow the App Store sheet."
          }
        </p>
        {"\n\n  "}
        <h2>{"Notifications and widgets"}</h2>
        {"\n  "}
        <h3>{"I am not getting notifications."}</h3>
        {"\n  "}
        <p>
          {
            "Allow notifications in the iOS Settings app under Reasons Within → Notifications. In the app, open the gear → Notifications to check the status and choose the earliest delivery time. Pattern alerts arrive at most once per day."
          }
        </p>
        {"\n\n  "}
        <h3>{"How do I add a widget?"}</h3>
        {"\n  "}
        <p>
          {
            "Touch and hold your Home Screen, tap Edit or the + button, search for Reasons Within, and choose Today, Bio Age, Activity, or Calories. Open the app once first so the widget can receive a snapshot."
          }
        </p>
        {"\n\n  "}
        <h2>{"Language and data"}</h2>
        {"\n  "}
        <h3>{"How do I change the app language?"}</h3>
        {"\n  "}
        <p>
          {
            "Open the gear → Language and choose English, Ukrainian, French, or Spanish."
          }
        </p>
        {"\n\n  "}
        <h3>{"Where is my information stored?"}</h3>
        {"\n  "}
        <p>
          {
            "Your health data and personal content stay on your device. If you choose Share Analytics, limited usage and diagnostics are sent to PostHog’s EU service to help us improve the app. You can change this choice in Settings. See the "
          }
          <a href={asset("/privacy.html")}>{"Privacy Policy"}</a>
          {"."}
        </p>
        {"\n\n  "}
        <h3>{"How do I delete my information?"}</h3>
        {"\n  "}
        <p>
          {
            "Deleting Reasons Within removes its local database, preferences, archive, and widget data from the device. Mindful sessions already saved to Apple Health remain in Health until you delete them there. To request deletion of pseudonymous analytics, email "
          }
          <a href="mailto:info@reasonswithin.com">{"info@reasonswithin.com"}</a>
          {"."}
        </p>
        {"\n\n  "}
        <footer>
          <a href={asset("feedback/")}>{"Feedback"}</a>
          {"\n    "}
          <a href={asset("/index.html")}>{"Home"}</a>
          {"\n    "}
          <a href={asset("/privacy.html")}>{"Privacy Policy"}</a>
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
