import { asset } from "../asset.js";

export default function Page5() {
  return (
    <>
      <a className="skip-link" href="#main">
        {"Aller au contenu"}
      </a>
      {"\n"}
      <main id="main" className="wrap">
        {"\n  "}
        <nav className="language-nav" aria-label="Langue">
          {"\n    "}
          <a href={asset("index.html")} lang="en">
            {"English"}
          </a>
          {"\n    "}
          <a href={asset("uk/index.html")} lang="uk">
            {"Українська"}
          </a>
          {"\n    "}
          <a href={asset("fr/index.html")} lang="fr" aria-current="page">
            {"Français"}
          </a>
          {"\n    "}
          <a href={asset("es/index.html")} lang="es">
            {"Español"}
          </a>
          {"\n  "}
        </nav>
        {"\n\n  "}
        <img
          className="mark"
          src={asset("icon.png")}
          alt="Icône de l’app Reasons Within"
        />
        {"\n  "}
        <h1>{"Reasons Within"}</h1>
        {"\n  "}
        <p className="tagline">{"Comprenez les tendances de votre corps."}</p>
        {"\n\n  "}
        <p>
          {
            "Reasons Within lit les données Apple Santé que vous autorisez — sommeil, activité, signaux de récupération, contexte du cycle, lumière du jour, santé cardiaque et plus encore — et les compare à "
          }
          <strong>{"votre propre référence"}</strong>
          {
            ". Ajoutez un ressenti privé pour relier les mesures à ce que vous avez réellement éprouvé."
          }
        </p>
        {"\n  "}
        <p>
          {
            "Vos données de santé, ressentis, bilans et explications sont traités sur votre iPhone et ne sont pas envoyés à Reasons Within. L’analyse facultative nous aide à améliorer l’app et n’inclut jamais vos données de santé ni vos notes personnelles. Consultez la "
          }
          <a href={asset("fr/privacy.html")}>
            {"Politique de confidentialité"}
          </a>
          {"."}
        </p>
        {"\n\n  "}
        <p className="eyebrow">{"Fonctionnalités"}</p>
        {"\n  "}
        <ul className="feature-list">
          {"\n    "}
          <li>
            <strong>{"Contexte quotidien"}</strong>
            {
              " — forme et changements récents expliqués par rapport à votre plage habituelle."
            }
          </li>
          {"\n    "}
          <li>
            <strong>{"Tendances personnelles"}</strong>
            {
              " — une observation commence par accumuler des preuves et n’est confirmée que si elle continue à tenir."
            }
          </li>
          {"\n    "}
          <li>
            <strong>{"Bilans hebdomadaires et mensuels"}</strong>
            {
              " — des résumés sereins de ce qui a changé, persisté ou reste incertain."
            }
          </li>
          {"\n    "}
          <li>
            <strong>{"Prévisions de récupération"}</strong>
            {
              " — après une journée d’activité, uniquement lorsque votre historique personnel confirmé est suffisant."
            }
          </li>
          {"\n    "}
          <li>
            <strong>{"Tendances Santé et Bio Age"}</strong>
            {
              " — dont une trajectoire Bio Age sur huit semaines avec Reasons Within Plus."
            }
          </li>
          {"\n    "}
          <li>
            <strong>{"Historique privé"}</strong>
            {
              " — retrouvez vos bilans et l’évolution de vos tendances dans les archives Plus sur l’appareil."
            }
          </li>
          {"\n    "}
          <li>
            <strong>{"Widgets d’écran d’accueil"}</strong>
            {" — Today, Bio Age, Activity et Calories."}
          </li>
          {"\n  "}
        </ul>
        {"\n\n  "}
        <h2>{"Gratuit et Plus"}</h2>
        {"\n  "}
        <p>
          {
            "La forme quotidienne, les ressentis, la santé, les tendances, les preuves des schémas et votre premier bilan hebdomadaire restent gratuits. Reasons Within Plus ajoute un nouveau bilan chaque semaine, les bilans mensuels, les prévisions de récupération éligibles, la trajectoire Bio Age sur huit semaines et les archives d’analyses et de tendances. Les forfaits mensuel et annuel se renouvellent automatiquement jusqu’à leur résiliation dans votre compte Apple."
          }
        </p>
        {"\n\n  "}
        <a
          className="button"
          href="https://apps.apple.com/app/reasons-within/id6778074598"
        >
          {"Voir dans l’App Store"}
        </a>
        {"\n\n  "}
        <p className="disclaimer">
          {
            "Reasons Within est un outil de bien-être général et de connaissance de soi. Ce n’est pas un dispositif médical et il ne diagnostique pas, ne traite pas et ne fournit pas de conseil médical."
          }
        </p>
        {"\n\n  "}
        <footer>
          <a href={asset("fr/feedback/")}>{"Votre avis"}</a>
          {"\n    "}
          <a href={asset("fr/support.html")}>{"Assistance"}</a>
          {"\n    "}
          <a href={asset("fr/privacy.html")}>
            {"Politique de confidentialité"}
          </a>
          {"\n    "}
          <a href={asset("fr/terms.html")}>{"Conditions d’utilisation"}</a>
          {"\n  "}
        </footer>
        {"\n"}
      </main>
      {"\n"}
    </>
  );
}
