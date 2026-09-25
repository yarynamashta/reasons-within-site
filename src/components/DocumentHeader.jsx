import { asset } from "../asset.js";
const labels = {
  en: {
    home: "Home",
    support: "Support",
    download: "Get the app",
    navigation: "Main navigation",
  },
  uk: {
    home: "Головна",
    support: "Підтримка",
    download: "Завантажити",
    navigation: "Головна навігація",
  },
  fr: {
    home: "Accueil",
    support: "Assistance",
    download: "Télécharger",
    navigation: "Navigation principale",
  },
  es: {
    home: "Inicio",
    support: "Soporte",
    download: "Descargar",
    navigation: "Navegación principal",
  },
};
export default function DocumentHeader({ lang, path }) {
  const copy = labels[lang] || labels.en;
  const prefix = lang === "en" ? "" : `${lang}/`;
  return (
    <header className="site-header document-header shell">
      <a className="brand" href={asset(prefix)}>
        <img src={asset("icon.png")} width="36" height="36" alt="" />
        <span>Reasons Within</span>
      </a>
      <nav aria-label={copy.navigation}>
        <a className="home-link" href={asset(prefix)}>
          <span aria-hidden="true">← </span>
          {copy.home}
        </a>
        <a
          className="document-support-link"
          href={asset(`${prefix}support/`)}
          aria-current={path.endsWith("support.html") ? "page" : undefined}
        >
          {copy.support}
        </a>
        <a
          className="nav-download"
          href="https://apps.apple.com/app/reasons-within/id6778074598"
        >
          {copy.download} <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
