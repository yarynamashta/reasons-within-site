import { asset } from "../asset.js";

export default function Page8() {
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
          <a href={asset("terms.html")} lang="en">
            {"English"}
          </a>
          {"\n    "}
          <a href={asset("uk/terms.html")} lang="uk">
            {"Українська"}
          </a>
          {"\n    "}
          <a href={asset("fr/terms.html")} lang="fr" aria-current="page">
            {"Français"}
          </a>
          {"\n    "}
          <a href={asset("es/terms.html")} lang="es">
            {"Español"}
          </a>
          {"\n  "}
        </nav>
        {"\n\n  "}
        <h1>{"Conditions d’utilisation"}</h1>
        {"\n  "}
        <p className="date">
          {"Reasons Within · En vigueur le 16 septembre 2026"}
        </p>
        {"\n\n  "}
        <p>
          {"Ces conditions complètent le "}
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
            {
              "Contrat de licence utilisateur final standard d’Apple pour les applications sous licence"
            }
          </a>
          {
            " (le « CLUF standard »), qui régit votre licence d’utilisation de Reasons Within. En cas de conflit, le CLUF standard prévaut."
          }
        </p>
        {"\n\n  "}
        <h2>{"Bien-être général uniquement"}</h2>
        {"\n  "}
        <p>
          {
            "Reasons Within est un outil de connaissance de soi et de bien-être général. Ce n’est pas un dispositif médical et il ne fournit ni diagnostic, ni traitement, ni conseil médical, ni surveillance d’urgence, ni substitut à des soins professionnels. Ne retardez pas une demande d’aide médicale en raison d’une information affichée dans l’app. En cas d’urgence, contactez les services d’urgence locaux."
          }
        </p>
        {"\n\n  "}
        <h2>{"Vos données et résultats"}</h2>
        {"\n  "}
        <p>
          {
            "L’app dépend des données fournies par Apple Santé, les appareils connectés et les informations que vous saisissez. Les mesures peuvent être incomplètes, retardées, inexactes ou indisponibles. Les tendances, la forme, le Bio Age, les bilans et les prévisions sont des estimations et observations, et non une preuve de causalité ou une garantie de résultats futurs. Vous restez responsable de vos décisions concernant votre santé et votre activité."
          }
        </p>
        {"\n\n  "}
        <h2>{"Reasons Within Plus"}</h2>
        {"\n  "}
        <p>
          {
            "Reasons Within Plus est proposé sous forme d’abonnements mensuel et annuel à renouvellement automatique. L’app affiche la durée, les fonctions incluses et le prix local total avant l’achat. Le paiement est débité de votre compte Apple après confirmation."
          }
        </p>
        {"\n  "}
        <p>
          {
            "L’abonnement se renouvelle automatiquement sauf résiliation au moins 24 heures avant la fin de la période en cours. Apple débite le renouvellement de votre compte Apple. Vous pouvez gérer ou résilier l’abonnement dans les réglages d’abonnement Apple ou via Reasons Within → Réglages → Reasons Within Plus → Gérer l’abonnement. Supprimer l’app ne résilie pas l’abonnement."
          }
        </p>
        {"\n  "}
        <p>
          {
            "Utilisez Restaurer les achats si un droit actif n’est pas reconnu. La facturation, les remboursements, codes promotionnels et la gestion des abonnements sont traités par Apple selon les règles de l’App Store. Les fonctions exigeant un historique personnel suffisant conservent leurs critères de preuve, même avec Plus."
          }
        </p>
        {"\n\n  "}
        <h2>{"Utilisation acceptable"}</h2>
        {"\n  "}
        <p>
          {
            "Vous ne pouvez utiliser Reasons Within qu’à des fins légales et personnelles, conformément au CLUF standard. Vous ne pouvez pas détourner l’app, perturber son fonctionnement, tenter un accès non autorisé ou l’utiliser pour enfreindre les droits d’autrui."
          }
        </p>
        {"\n\n  "}
        <h2>{"Propriété intellectuelle"}</h2>
        {"\n  "}
        <p>
          {
            "Reasons Within, notamment sa conception, ses textes, son logiciel et sa marque, est concédé sous licence et non vendu, et reste protégé par le droit applicable de la propriété intellectuelle. Les droits non expressément accordés par le CLUF standard sont réservés."
          }
        </p>
        {"\n\n  "}
        <h2>{"Disponibilité et modifications"}</h2>
        {"\n  "}
        <p>
          {
            "Nous pouvons améliorer, modifier, suspendre ou arrêter des fonctionnalités. HealthKit, StoreKit, les widgets, les notifications et les modèles sur l’appareil dépendent des services Apple, d’un matériel compatible, du système d’exploitation, des autorisations et de données suffisantes."
          }
        </p>
        {"\n\n  "}
        <h2>{"Confidentialité"}</h2>
        {"\n  "}
        <p>
          {"La "}
          <a href={asset("fr/privacy.html")}>
            {"Politique de confidentialité"}
          </a>
          {
            " explique la manière dont Reasons Within traite les informations et fait partie de ces conditions."
          }
        </p>
        {"\n\n  "}
        <h2>{"Éligibilité"}</h2>
        {"\n  "}
        <p>
          {
            "Vous ne pouvez utiliser Reasons Within que si la loi de votre lieu de résidence vous permet d’accepter les présentes conditions. Si la législation locale exige l’autorisation d’un parent ou tuteur, vous devez disposer de cette autorisation."
          }
        </p>
        {"\n\n  "}
        <h2>{"Contact"}</h2>
        {"\n  "}
        <p>
          {"Questions sur ces conditions : "}
          <a href="mailto:info@reasonswithin.com">{"info@reasonswithin.com"}</a>
          {"."}
        </p>
        {"\n\n  "}
        <footer>
          <a href={asset("fr/feedback/")}>{"Votre avis"}</a>
          {"\n    "}
          <a href={asset("fr/index.html")}>{"Accueil"}</a>
          {"\n    "}
          <a href={asset("fr/support.html")}>{"Assistance"}</a>
          {"\n    "}
          <a href={asset("fr/privacy.html")}>
            {"Politique de confidentialité"}
          </a>
          {"\n  "}
        </footer>
        {"\n"}
      </main>
      {"\n"}
    </>
  );
}
