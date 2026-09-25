import { useEffect, useState } from "react";
import { asset } from "../asset.js";
import { feedbackCopy } from "../feedback/copy.js";
import { formLink } from "../feedback/config.js";

export default function FeedbackPage({ lang = "en" }) {
  const copy = feedbackCopy[lang];
  const prefix = lang === "en" ? "" : `${lang}/`;
  const [link, setLink] = useState(() => formLink(lang));
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setLink(formLink(lang, window.location.search));
    setReady(true);
  }, [lang]);
  return (
    <>
      <a className="skip-link" href="#main">
        {copy.skip}
      </a>
      <main id="main" className="wrap feedback-page">
        <nav className="language-nav" aria-label={copy.language}>
          {Object.entries({
            en: "English",
            uk: "Українська",
            fr: "Français",
            es: "Español",
          }).map(([code, label]) => (
            <a
              key={code}
              href={asset(`${code === "en" ? "" : code + "/"}feedback/`)}
              lang={code}
              aria-current={code === lang ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
        <p className="feedback-notice">{copy.note}</p>
        {link ? (
          <>
            <p className="feedback-disclosure">{copy.disclosure}</p>
            <p>
              <a
                className="text-link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.open} ↗
              </a>
            </p>
            {ready && (
              <iframe
                className="feedback-embed"
                src={link}
                title={copy.iframe}
                referrerPolicy="no-referrer"
              />
            )}
            <p>{copy.email}</p>
          </>
        ) : (
          <div className="card">
            <p>{copy.unavailable}</p>
          </div>
        )}
        <a
          className="feedback-email"
          href="mailto:info@reasonswithin.com?subject=Reasons%20Within%20feedback"
        >
          info@reasonswithin.com
        </a>
        <footer>
          <a href={asset(prefix)}>{copy.home}</a>
          <a href={asset(`${prefix}support/`)}>{copy.support}</a>
          <a href={asset(`${prefix}privacy/`)}>{copy.privacy}</a>
        </footer>
      </main>
    </>
  );
}
