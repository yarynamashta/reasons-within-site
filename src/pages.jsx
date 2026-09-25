import FeedbackPage from "./pages/feedback.jsx";
import { feedbackCopy } from "./feedback/copy.js";
import Page0 from "./pages/index.jsx";
import Page1 from "./pages/es-index.jsx";
import Page2 from "./pages/es-privacy.jsx";
import Page3 from "./pages/es-support.jsx";
import Page4 from "./pages/es-terms.jsx";
import Page5 from "./pages/fr-index.jsx";
import Page6 from "./pages/fr-privacy.jsx";
import Page7 from "./pages/fr-support.jsx";
import Page8 from "./pages/fr-terms.jsx";
import Page9 from "./pages/privacy.jsx";
import Page10 from "./pages/support.jsx";
import Page11 from "./pages/terms.jsx";
import Page12 from "./pages/uk-index.jsx";
import Page13 from "./pages/uk-privacy.jsx";
import Page14 from "./pages/uk-support.jsx";
import Page15 from "./pages/uk-terms.jsx";
export { asset } from "./asset.js";
export const pages = {
  "index.html": {
    title: "Reasons Within — Personal Apple Health Insights for iPhone",
    description:
      "Discover your personal sleep, activity, and recovery patterns with Reasons Within for iPhone. Apple Health insights based on your own baseline, processed on device.",
    lang: "en",
    Component: Page0,
  },
  "es/index.html": {
    title: "Reasons Within — Comprende los patrones de tu cuerpo",
    description:
      "Reasons Within convierte tu historial de Apple Salud en patrones personales, resúmenes y contexto de recuperación privados.",
    lang: "es",
    Component: Page1,
  },
  "es/privacy.html": {
    title: "Política de privacidad — Reasons Within",
    description: "Política de privacidad de la app Reasons Within para iOS.",
    lang: "es",
    Component: Page2,
  },
  "es/support.html": {
    title: "Soporte — Reasons Within",
    description:
      "Ayuda sobre Apple Salud, patrones, Reasons Within Plus, suscripciones, notificaciones, widgets y privacidad.",
    lang: "es",
    Component: Page3,
  },
  "es/terms.html": {
    title: "Condiciones de uso — Reasons Within",
    description: "Condiciones de uso de la app Reasons Within para iOS.",
    lang: "es",
    Component: Page4,
  },
  "fr/index.html": {
    title: "Reasons Within — Comprenez les tendances de votre corps",
    description:
      "Reasons Within transforme votre historique Apple Santé en tendances personnelles, bilans et contexte de récupération privés.",
    lang: "fr",
    Component: Page5,
  },
  "fr/privacy.html": {
    title: "Politique de confidentialité — Reasons Within",
    description: "Politique de confidentialité de l’app iOS Reasons Within.",
    lang: "fr",
    Component: Page6,
  },
  "fr/support.html": {
    title: "Assistance — Reasons Within",
    description:
      "Aide sur Apple Santé, les tendances, Reasons Within Plus, les abonnements, notifications, widgets et la confidentialité.",
    lang: "fr",
    Component: Page7,
  },
  "fr/terms.html": {
    title: "Conditions d’utilisation — Reasons Within",
    description: "Conditions d’utilisation de l’app iOS Reasons Within.",
    lang: "fr",
    Component: Page8,
  },
  "privacy.html": {
    title: "Privacy Policy — Reasons Within",
    description: "Privacy Policy for the Reasons Within iOS app.",
    lang: "en",
    Component: Page9,
  },
  "support.html": {
    title: "Support — Reasons Within",
    description:
      "Help with Apple Health access, patterns, Reasons Within Plus, subscriptions, notifications, widgets, and privacy.",
    lang: "en",
    Component: Page10,
  },
  "terms.html": {
    title: "Terms of Use — Reasons Within",
    description: "Terms of Use for the Reasons Within iOS app.",
    lang: "en",
    Component: Page11,
  },
  "uk/index.html": {
    title: "Reasons Within — Зрозумійте закономірності свого тіла",
    description:
      "Reasons Within перетворює історію з Apple Health на приватні персональні закономірності, огляди й контекст відновлення.",
    lang: "uk",
    Component: Page12,
  },
  "uk/privacy.html": {
    title: "Політика конфіденційності — Reasons Within",
    description: "Політика конфіденційності застосунку Reasons Within для iOS.",
    lang: "uk",
    Component: Page13,
  },
  "uk/support.html": {
    title: "Підтримка — Reasons Within",
    description:
      "Допомога з Apple Health, закономірностями, Reasons Within Plus, підписками, сповіщеннями, віджетами й конфіденційністю.",
    lang: "uk",
    Component: Page14,
  },
  "uk/terms.html": {
    title: "Умови використання — Reasons Within",
    description: "Умови використання застосунку Reasons Within для iOS.",
    lang: "uk",
    Component: Page15,
  },
};

for (const lang of ["en", "uk", "fr", "es"]) {
  pages[`${lang === "en" ? "" : lang + "/"}feedback.html`] = {
    title: `${feedbackCopy[lang].title} — Reasons Within`,
    description: feedbackCopy[lang].intro,
    lang,
    Component: FeedbackPage,
  };
}
