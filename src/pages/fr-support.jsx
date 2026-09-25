import { asset } from "../asset.js";

export default function Page7() {
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
          <a href={asset("support.html")} lang="en">
            {"English"}
          </a>
          {"\n    "}
          <a href={asset("uk/support.html")} lang="uk">
            {"Українська"}
          </a>
          {"\n    "}
          <a href={asset("fr/support.html")} lang="fr" aria-current="page">
            {"Français"}
          </a>
          {"\n    "}
          <a href={asset("es/support.html")} lang="es">
            {"Español"}
          </a>
          {"\n  "}
        </nav>
        {"\n\n  "}
        <h1>{"Assistance"}</h1>
        {"\n  "}
        <p>
          {
            "Reasons Within lit Apple Santé sur votre iPhone pour faire ressortir avec prudence les tendances de votre propre historique."
          }
        </p>
        {"\n\n  "}
        <div className="card">
          {"Besoin d’aide ? Écrivez à "}
          <a href="mailto:info@reasonswithin.com">{"info@reasonswithin.com"}</a>
          {
            ". N’incluez pas de mesures de santé ni d’autres informations sensibles dans votre message."
          }
        </div>
        {"\n\n  "}
        <div className="card feedback-callout">
          <p>
            Signalez un bug, proposez une fonctionnalité ou partagez votre avis.
          </p>
          <a href={asset("fr/feedback/")}>{"Votre avis"}</a>
        </div>
        <h2>{"Apple Santé"}</h2>
        {"\n  "}
        <h3>{"L’app est vide ou ne peut pas lire Santé."}</h3>
        {"\n  "}
        <p>
          {
            "Ouvrez l’app Santé, touchez votre photo de profil, puis Apps → Reasons Within. Activez les catégories que vous acceptez de partager. Vous pouvez aussi ouvrir Reasons Within → Réglages → Accès à Apple Santé. Apple ne révèle pas aux apps si une catégorie de lecture précise a été refusée ; aucune donnée ne peut donc apparaître avant que l’accès soit activé."
          }
        </p>
        {"\n\n  "}
        <h3>{"Pourquoi une mesure manque-t-elle ?"}</h3>
        {"\n  "}
        <p>
          {
            "L’appareil source doit d’abord écrire cette mesure dans Apple Santé. Certaines mesures nécessitent une Apple Watch ou un appareil compatible, et les vues de sommeil ou de récupération ont besoin de mesures suffisamment récentes."
          }
        </p>
        {"\n\n  "}
        <h3>{"Qu’écrit Reasons Within dans Apple Santé ?"}</h3>
        {"\n  "}
        <p>
          {
            "Uniquement une séance de pleine conscience pour un exercice respiratoire que vous terminez, et seulement après votre autorisation. L’app ne modifie ni ne supprime jamais vos données Santé existantes."
          }
        </p>
        {"\n\n  "}
        <h2>{"Tendances, bilans et prévisions"}</h2>
        {"\n  "}
        <h3>{"Pourquoi aucune tendance n’apparaît-elle encore ?"}</h3>
        {"\n  "}
        <p>
          {
            "Les tendances demandent un historique personnel suffisant et cohérent. Une observation peut d’abord apparaître comme preuve en construction et n’est confirmée que si elle continue à tenir. Le silence vaut mieux qu’une conclusion fragile."
          }
        </p>
        {"\n\n  "}
        <h3>{"Quand une prévision de récupération apparaît-elle ?"}</h3>
        {"\n  "}
        <p>
          {
            "Après une journée d’activité, uniquement lorsque votre historique contient assez de preuves confirmées sur la récupération. La prévision se met en pause si sa précision récente ne justifie plus son affichage."
          }
        </p>
        {"\n\n  "}
        <h3>{"Comment fonctionnent les bilans hebdomadaires et mensuels ?"}</h3>
        {"\n  "}
        <p>
          {
            "Votre premier bilan hebdomadaire est gratuit ; Plus en débloque un nouveau chaque semaine. Les bilans mensuels comparent des mois calendaires terminés lorsque les données sont suffisantes. Sur les iPhone compatibles, le modèle de langage Apple sur l’appareil peut formuler les faits mensuels vérifiés ; sinon, l’app utilise un résumé complet rédigé à l’avance. Les entrées et les résultats restent sur l’appareil."
          }
        </p>
        {"\n\n  "}
        <h3>{"Puis-je exporter un bilan mensuel ?"}</h3>
        {"\n  "}
        <p>
          {
            "Oui. Ouvrez le bilan et utilisez Partager. L’export est créé localement, puis vous choisissez où l’envoyer ou l’enregistrer."
          }
        </p>
        {"\n\n  "}
        <h2>{"Reasons Within Plus"}</h2>
        {"\n  "}
        <h3>{"Qu’est-ce qui reste gratuit ?"}</h3>
        {"\n  "}
        <p>
          {
            "La forme quotidienne, les ressentis, la santé, les tendances, les preuves des schémas et votre premier bilan hebdomadaire."
          }
        </p>
        {"\n\n  "}
        <h3>{"Que comprend Plus ?"}</h3>
        {"\n  "}
        <p>
          {
            "Un nouveau bilan chaque semaine, les bilans mensuels, les prévisions de récupération éligibles, une trajectoire Bio Age sur huit semaines et les archives d’analyses et de tendances sur l’appareil."
          }
        </p>
        {"\n\n  "}
        <h3>{"Comment restaurer ou gérer mon abonnement ?"}</h3>
        {"\n  "}
        <p>
          {
            "Ouvrez Reasons Within → Réglages → Reasons Within Plus. Utilisez Restaurer les achats si un abonnement actif n’est pas reconnu. Les abonnés peuvent choisir Gérer l’abonnement pour le modifier ou le résilier auprès d’Apple. Supprimer l’app ne résilie pas l’abonnement."
          }
        </p>
        {"\n\n  "}
        <h3>{"Comment utiliser un code promotionnel ?"}</h3>
        {"\n  "}
        <p>
          {
            "Ouvrez Reasons Within → Réglages → Reasons Within Plus → Utiliser un code promotionnel, puis suivez la feuille de l’App Store."
          }
        </p>
        {"\n\n  "}
        <h2>{"Notifications et widgets"}</h2>
        {"\n  "}
        <h3>{"Je ne reçois pas de notifications."}</h3>
        {"\n  "}
        <p>
          {
            "Autorisez-les dans l’app Réglages d’iOS sous Reasons Within → Notifications. Dans l’app, ouvrez l’engrenage → Notifications pour vérifier l’état et choisir l’heure de livraison la plus tôt. Les alertes de tendances arrivent au maximum une fois par jour."
          }
        </p>
        {"\n\n  "}
        <h3>{"Comment ajouter un widget ?"}</h3>
        {"\n  "}
        <p>
          {
            "Maintenez l’écran d’accueil, touchez Modifier ou +, recherchez Reasons Within, puis choisissez Today, Bio Age, Activity ou Calories. Ouvrez d’abord l’app une fois afin que le widget reçoive des données."
          }
        </p>
        {"\n\n  "}
        <h2>{"Langue et données"}</h2>
        {"\n  "}
        <h3>{"Comment changer la langue ?"}</h3>
        {"\n  "}
        <p>
          {
            "Ouvrez l’engrenage → Langue et choisissez l’anglais, l’ukrainien, le français ou l’espagnol."
          }
        </p>
        {"\n\n  "}
        <h3>{"Où mes informations sont-elles stockées ?"}</h3>
        {"\n  "}
        <p>
          {
            "Vos données de santé et contenus personnels restent sur votre appareil. Si vous choisissez « Partager l’analyse », des données limitées d’utilisation et de diagnostic sont envoyées au service européen de PostHog pour nous aider à améliorer l’app. Vous pouvez modifier ce choix dans Réglages. Consultez la "
          }
          <a href={asset("fr/privacy.html")}>
            {"Politique de confidentialité"}
          </a>
          {"."}
        </p>
        {"\n\n  "}
        <h3>{"Comment supprimer mes informations ?"}</h3>
        {"\n  "}
        <p>
          {
            "Supprimer Reasons Within retire de l’appareil sa base locale, ses préférences, ses archives et les données des widgets. Les séances de pleine conscience déjà enregistrées dans Apple Santé y restent jusqu’à ce que vous les supprimiez dans Santé. Pour demander la suppression des données d’analyse pseudonymisées, écrivez à "
          }
          <a href="mailto:info@reasonswithin.com">{"info@reasonswithin.com"}</a>
          {"."}
        </p>
        {"\n\n  "}
        <footer>
          <a href={asset("fr/feedback/")}>{"Votre avis"}</a>
          {"\n    "}
          <a href={asset("fr/index.html")}>{"Accueil"}</a>
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
