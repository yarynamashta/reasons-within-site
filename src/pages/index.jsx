import PrivacyLock from "../components/PrivacyLock.jsx";
import { asset } from "../asset.js";
function BrandMark({ className = "" }) {
  return (
    <svg
      className={`brand-mark ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      <circle
        cx="12"
        cy="12"
        r="6"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.65"
      />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}
function Hero() {
  return (
    <section className="hero shell">
      {"\n  "}
      <div className="hero-copy">
        <p className="eyebrow">
          <BrandMark />
          {" A little closer to understanding you"}
        </p>
        {"\n    "}
        <h1>
          {"Your body has patterns."}
          <br />
          <em>{"Find your reasons."}</em>
        </h1>
        {"\n    "}
        <p className="hero-description">
          {
            "Connect the dots between your sleep, activity, and how you feel. Reasons Within turns your Apple Health history into personal insights—with your own baseline at the heart of it."
          }
        </p>
        {"\n    "}
        <a
          className="app-store-badge"
          href="https://apps.apple.com/app/reasons-within/id6778074598"
        >
          <img
            src={asset("assets/download-on-the-app-store.svg")}
            width="143.596884"
            height="48"
            alt="Download on the App Store"
          />
        </a>
        {"\n    "}
        <p className="microcopy">
          {"For iPhone · Free to start · Optional Plus subscription"}
        </p>
        {"\n    "}
        <div className="hero-assurances">
          <span>{"↗ Built around Apple Health"}</span>
          <span>{"◈ Health data stays on your iPhone"}</span>
        </div>
        {"\n  "}
      </div>
      {"\n  "}
      <figure className="hero-visual">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="floating-note">
          <BrandMark className="note-symbol" />
          <span>
            {"Your history."}
            <br />
            <strong>{"Your own patterns."}</strong>
          </span>
        </div>
        <div className="phone">
          <img
            src={asset("/assets/personal-patterns.png")}
            width="416"
            height="900"
            fetchPriority="high"
            alt="Reasons Within Trends screen showing a personal pattern between higher step counts and deep sleep, with weekly and monthly reviews."
          />
        </div>
        <figcaption>{"Actual app screen · illustrative data"}</figcaption>
      </figure>
      {"\n"}
    </section>
  );
}
function Features() {
  return (
    <section id="features" className="section shell">
      {"\n  "}
      <div className="section-heading">
        <p className="eyebrow">{"Beyond the numbers"}</p>
        <h2>
          {"Less wondering."}
          <br />
          <em>{"More understanding."}</em>
        </h2>
        <p>
          {
            "Your measurements tell part of the story. See how they fit together, what changes over time, and what’s usual for you."
          }
        </p>
      </div>
      {"\n  "}
      <div className="feature-grid">
        {"\n    "}
        <article className="feature-card pattern-card">
          <div className="feature-icon" aria-hidden="true">
            {"↗"}
          </div>
          <h3>{"Patterns that are personal."}</h3>
          <p>
            {
              "Explore connections in your own history. Findings start as building evidence and are confirmed only when they keep holding."
            }
          </p>
          <div className="example-pattern">
            <span className="mini-label">
              {"AN EXAMPLE OF A PERSONAL PATTERN"}
            </span>
            <p>
              {"On your higher-steps days,"}
              <br />
              <strong>{"deep sleep tends to run higher."}</strong>
            </p>
            <span className="evidence">{"Building evidence"}</span>
            <span className="example-label">{"Illustrative insight"}</span>
          </div>
        </article>
        {"\n    "}
        <article className="feature-card baseline-card">
          <div className="feature-icon" aria-hidden="true">
            {"◎"}
          </div>
          <h3>{"Your baseline. Your context."}</h3>
          <p>
            {
              "Understand daily readiness and recent changes against your usual range. Your own history gives the numbers meaning."
            }
          </p>
          <div className="baseline-art" aria-hidden="true">
            <div className="baseline-range"></div>
            <svg viewBox="0 0 400 105">
              <path
                d="M0 77 C25 77 25 58 50 59 S75 85 100 66 S125 18 150 40 S175 68 200 53 S225 27 250 40 S275 74 300 53 S325 16 350 30 S375 48 400 26"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              ></path>
            </svg>
          </div>
          <p className="microcopy">
            {"A picture of change, with your usual range in view."}
          </p>
        </article>
        {"\n    "}
        <article className="feature-card">
          <div className="feature-icon" aria-hidden="true">
            {"☼"}
          </div>
          <h3>{"Room for how you feel."}</h3>
          <p>
            {
              "A private Feel check-in connects the measurements with your lived experience. Because a number can’t tell the whole story."
            }
          </p>
        </article>
        {"\n    "}
        <article className="feature-card">
          <div className="feature-icon" aria-hidden="true">
            {"≋"}
          </div>
          <h3>{"Space to look back."}</h3>
          <p>
            {
              "Weekly and Monthly Reviews bring together what changed, what held, and what’s still uncertain. Your first Weekly Review is free."
            }
          </p>
        </article>
        {"\n  "}
      </div>
      {"\n"}
    </section>
  );
}
function ProductScreens() {
  return (
    <section className="product-section">
      <div className="shell product-grid">
        <div className="product-phones">
          <div className="phone small-phone">
            <img
              src={asset("/assets/sleep-recovery.png")}
              width="416"
              height="900"
              loading="lazy"
              alt="Reasons Within showing sleep and recovery together."
            />
          </div>
          <div className="phone small-phone offset-phone">
            <img
              src={asset("/assets/cycle-context.png")}
              width="416"
              height="900"
              loading="lazy"
              alt="Reasons Within showing evidence for a retrospective cycle-related pattern."
            />
          </div>
          <p className="screenshot-note">
            {"Actual app screens · illustrative data"}
          </p>
        </div>
        <div className="product-copy">
          <p className="eyebrow">{"The connections matter"}</p>
          <h2>
            {"See your days"}
            <br />
            <em>{"in a different light."}</em>
          </h2>
          <p>
            {
              "Sleep, recovery, movement, and cycle context don’t happen in isolation. Explore them together through the history you choose to share from Apple Health."
            }
          </p>
          <ul className="check-list">
            <li>{"See sleep and recovery side by side"}</li>
            <li>{"Explore past cycle-related patterns"}</li>
            <li>{"Look into the evidence behind an insight"}</li>
            <li>{"Follow Health and Bio Age trends over time"}</li>
            <li>{"Keep daily context close with Home Screen widgets"}</li>
          </ul>
          <a className="text-link" href={asset("/support.html")}>
            {"Get to know the app "}
            <span aria-hidden="true">{"↗"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
function Privacy() {
  return (
    <section id="privacy" className="section shell">
      <div className="privacy-panel">
        <PrivacyLock className="privacy-mark" />
        <p className="eyebrow">{"Personal means private"}</p>
        <h2>
          {"Your health story."}
          <br />
          <em>{"At home on your iPhone."}</em>
        </h2>
        <p>
          {
            "Your health data, check-ins, reviews, and explanations are processed on your device. They aren’t sent to Reasons Within."
          }
        </p>
        <div className="privacy-points">
          <span>{"On-device processing"}</span>
          <span>{"You choose Health access"}</span>
          <span>{"No health data in analytics"}</span>
        </div>
        <p className="privacy-detail">
          {
            "Optional usage analytics helps improve the app. It never includes your health data or personal notes."
          }
        </p>
        <a className="text-link" href={asset("/privacy.html")}>
          {"Read our privacy policy "}
          <span aria-hidden="true">{"↗"}</span>
        </a>
      </div>
    </section>
  );
}
function Plans() {
  return (
    <section id="plus" className="section shell plans-section">
      <div className="section-heading">
        <p className="eyebrow">{"Start with curiosity"}</p>
        <h2>
          {"A little insight."}
          <br />
          <em>{"Or a deeper understanding."}</em>
        </h2>
        <p>
          {
            "Get to know your patterns for free. Choose Plus when you want more time and context to reflect."
          }
        </p>
      </div>
      <div className="plans">
        <article className="plan">
          <p className="eyebrow">{"The everyday essentials"}</p>
          <h3>{"Reasons Within"}</h3>
          <p className="plan-price">
            {"Free "}
            <span>{"to start exploring"}</span>
          </p>
          <ul className="check-list">
            <li>{"Daily readiness and Feel check-ins"}</li>
            <li>{"Health, Trends, and Pattern Evidence"}</li>
            <li>{"Your first Weekly Review"}</li>
          </ul>
          <a
            className="button secondary"
            href="https://apps.apple.com/app/reasons-within/id6778074598"
          >
            {"Start with the free app "}
            <span aria-hidden="true">{"↗"}</span>
          </a>
        </article>
        <article className="plan plus-plan">
          <p className="eyebrow">{"More room to reflect"}</p>
          <h3>
            {"Reasons Within "}
            <em>{"Plus"}</em>
          </h3>
          <p className="plan-price">
            {"Go deeper "}
            <span>{"monthly or yearly"}</span>
          </p>
          <ul className="check-list">
            <li>{"A new Weekly Review every week"}</li>
            <li>{"Monthly Reviews"}</li>
            <li>{"Recovery forecasts when enough evidence exists"}</li>
            <li>{"Eight-week Bio Age trajectory"}</li>
            <li>{"On-device Analysis and Pattern Archive"}</li>
          </ul>
          <a
            className="button"
            href="https://apps.apple.com/app/reasons-within/id6778074598"
          >
            {"Explore Plus in the app "}
            <span aria-hidden="true">{"↗"}</span>
          </a>
        </article>
      </div>
      <p className="plan-note">
        {
          "See current pricing in the app. Subscriptions renew automatically until canceled through your Apple Account. "
        }
        <a href={asset("/terms.html")}>{"Subscription terms"}</a>
        {"."}
      </p>
    </section>
  );
}
function FAQ() {
  return (
    <section className="section shell faq-section">
      <div>
        <p className="eyebrow">{"A few things you might wonder"}</p>
        <h2>
          {"A little more"}
          <br />
          <em>{"clarity."}</em>
        </h2>
        <a className="text-link" href={asset("/support.html")}>
          {"Visit support ↗"}
        </a>
      </div>
      <div className="faq-list">
        <details>
          <summary>{"What is Reasons Within?"}</summary>
          <p>
            {
              "Reasons Within is an iPhone app that uses the Apple Health history you permit to reveal personal patterns in sleep, activity, recovery, and more. It compares measurements with your own baseline and lets you add private Feel check-ins."
            }
          </p>
        </details>
        <details>
          <summary>{"Do I need an Apple Watch?"}</summary>
          <p>
            {
              "You need data in Apple Health. Some measurements require an Apple Watch or another compatible device. The insights available depend on the data and history you share."
            }
          </p>
        </details>
        <details>
          <summary>{"Why don’t patterns appear straight away?"}</summary>
          <p>
            {
              "Patterns need enough consistent personal history. A finding may appear as building evidence first and becomes confirmed only when it continues to hold. The app can stay quiet when the evidence is too limited."
            }
          </p>
        </details>
        <details>
          <summary>{"Is my health data uploaded anywhere?"}</summary>
          <p>
            {
              "Your health data and personal content are processed on your iPhone and are not sent to Reasons Within. Optional analytics includes limited usage and diagnostics, never health measurements or personal notes. Read the "
            }
            <a href={asset("/privacy.html")}>{"Privacy Policy"}</a>
            {" for details."}
          </p>
        </details>
        <details>
          <summary>{"Is Reasons Within free?"}</summary>
          <p>
            {
              "Daily readiness, Feel, Health, Trends, Pattern Evidence, and your first Weekly Review are free. Plus adds ongoing reviews, eligible recovery forecasts, an eight-week Bio Age trajectory, and a private archive."
            }
          </p>
        </details>
        <details>
          <summary>{"Does the app provide medical advice?"}</summary>
          <p>
            {
              "No. Reasons Within is a general wellness and self-knowledge tool. It is not a medical device and does not diagnose, treat, or provide medical advice."
            }
          </p>
        </details>
      </div>
    </section>
  );
}
function Download() {
  return (
    <section className="closing shell">
      <BrandMark />
      <h2>
        {"Get to know"}
        <br />
        <em>{"your reasons within."}</em>
      </h2>
      <p>{"Your history is a good place to begin."}</p>
      <a
        className="button"
        href="https://apps.apple.com/app/reasons-within/id6778074598"
      >
        {"Download for iPhone "}
        <span aria-hidden="true">{"↗"}</span>
      </a>
    </section>
  );
}
export default function Page0() {
  return (
    <>
      {"\n"}
      <a className="skip-link" href="#main">
        {"Skip to content"}
      </a>
      {"\n"}
      <header className="site-header shell">
        {"\n  "}
        <a className="brand" href={asset("/")} aria-label="Reasons Within home">
          <img src={asset("/icon.png")} width="36" height="36" alt="" />
          <span>{"Reasons Within"}</span>
        </a>
        {"\n  "}
        <nav aria-label="Main navigation">
          <a href="#features">{"Explore"}</a>
          <a href="#privacy">{"Privacy"}</a>
          <a href="#plus">{"Free & Plus"}</a>
          <a className="nav-feedback" href={asset("feedback/")}>Feedback</a>
          <a
            className="nav-download"
            href="https://apps.apple.com/app/reasons-within/id6778074598"
          >
            {"Get the app "}
            <span aria-hidden="true">{"↗"}</span>
          </a>
        </nav>
        {"\n"}
      </header>
      {"\n"}
      <main id="main">
        {"\n"}
        <Hero />
        {"\n"}
        <div className="signal-strip">
          <div className="shell">
            <span>{"A fuller picture of you"}</span>
            <span>{"Sleep"}</span>
            <span>{"Recovery"}</span>
            <span>{"Activity"}</span>
            <span>{"Cycle context"}</span>
            <span>{"How you feel"}</span>
          </div>
        </div>
        {"\n"}
        <Features />
        {"\n"}
        <ProductScreens />
        {"\n"}
        <Privacy />
        {"\n"}
        <Plans />
        {"\n"}
        <FAQ />
        {"\n"}
        <Download />
        {"\n"}
      </main>
      {"\n"}
      <footer className="site-footer shell">
        <div className="footer-top">
          <a className="brand" href={asset("/")}>
            <img src={asset("/icon.png")} width="32" height="32" alt="" />
            {"Reasons Within"}
          </a>
          <nav aria-label="Footer">
            <a href={asset("feedback/")}>{"Feedback"}</a>
            <a href={asset("/support.html")}>{"Support"}</a>
            <a href={asset("/privacy.html")}>{"Privacy"}</a>
            <a href={asset("/terms.html")}>{"Terms"}</a>
            <a href="mailto:info@reasonswithin.com">{"Contact"}</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>{"Made for a little more self-understanding."}</p>
          <nav className="language-nav" aria-label="Language">
            <a href={asset("/")} lang="en" aria-current="page">
              {"English"}
            </a>
            <a href={asset("/uk")} lang="uk">
              {"Українська"}
            </a>
            <a href={asset("/fr")} lang="fr">
              {"Français"}
            </a>
            <a href={asset("/es")} lang="es">
              {"Español"}
            </a>
          </nav>
        </div>
        <p className="disclaimer">
          {
            "Reasons Within is a general wellness and self-knowledge tool. It is not a medical device and does not diagnose, treat, or provide medical advice."
          }
        </p>
        <p className="disclaimer">
          Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
          registered in the U.S. and other countries. App Store is a service
          mark of Apple Inc.
        </p>
      </footer>
      {"\n"}
    </>
  );
}
