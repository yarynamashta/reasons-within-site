import { asset } from "../asset.js";

export default function Page1() {
  return (
    <>
      <a className="skip-link" href="#main">
        {"Saltar al contenido"}
      </a>
      {"\n"}
      <main id="main" className="wrap">
        {"\n  "}
        <nav className="language-nav" aria-label="Idioma">
          {"\n    "}
          <a href={asset("index.html")} lang="en">
            {"English"}
          </a>
          {"\n    "}
          <a href={asset("uk/index.html")} lang="uk">
            {"Українська"}
          </a>
          {"\n    "}
          <a href={asset("fr/index.html")} lang="fr">
            {"Français"}
          </a>
          {"\n    "}
          <a href={asset("es/index.html")} lang="es" aria-current="page">
            {"Español"}
          </a>
          {"\n  "}
        </nav>
        {"\n\n  "}
        <img
          className="mark"
          src={asset("icon.png")}
          alt="Icono de la app Reasons Within"
        />
        {"\n  "}
        <h1>{"Reasons Within"}</h1>
        {"\n  "}
        <p className="tagline">{"Comprende los patrones de tu cuerpo."}</p>
        {"\n\n  "}
        <p>
          {
            "Reasons Within lee los datos de Apple Salud que autorizas —sueño, actividad, señales de recuperación, contexto del ciclo, luz diurna, salud cardiaca y más— y los compara con "
          }
          <strong>{"tu propio valor de referencia"}</strong>
          {
            ". Añade un registro privado de sensaciones para conectar las mediciones con cómo te sentiste realmente."
          }
        </p>
        {"\n  "}
        <p>
          {
            "Tus datos de salud, registros, resúmenes y explicaciones se procesan en el iPhone y no se envían a Reasons Within. Los análisis opcionales nos ayudan a mejorar la app y nunca incluyen datos de salud ni notas personales. Consulta la "
          }
          <a href={asset("es/privacy.html")}>{"Política de privacidad"}</a>
          {"."}
        </p>
        {"\n\n  "}
        <p className="eyebrow">{"Qué hace"}</p>
        {"\n  "}
        <ul className="feature-list">
          {"\n    "}
          <li>
            <strong>{"Contexto diario"}</strong>
            {
              " — disposición y cambios recientes explicados según tu intervalo habitual."
            }
          </li>
          {"\n    "}
          <li>
            <strong>{"Patrones personales"}</strong>
            {
              " — los hallazgos empiezan acumulando evidencia y solo se confirman si se mantienen."
            }
          </li>
          {"\n    "}
          <li>
            <strong>{"Resúmenes semanales y mensuales"}</strong>
            {
              " — explicaciones serenas de qué cambió, qué se mantuvo y qué sigue siendo incierto."
            }
          </li>
          {"\n    "}
          <li>
            <strong>{"Previsiones de recuperación"}</strong>
            {
              " — después de un día de actividad y solo cuando existe suficiente historial personal confirmado."
            }
          </li>
          {"\n    "}
          <li>
            <strong>{"Tendencias de Salud y Bio Age"}</strong>
            {
              " — incluida una trayectoria de Bio Age de ocho semanas con Reasons Within Plus."
            }
          </li>
          {"\n    "}
          <li>
            <strong>{"Historial privado"}</strong>
            {
              " — consulta resúmenes y cambios de patrones en el Archivo Plus del dispositivo."
            }
          </li>
          {"\n    "}
          <li>
            <strong>{"Widgets de la pantalla de inicio"}</strong>
            {" — Today, Bio Age, Activity y Calories."}
          </li>
          {"\n  "}
        </ul>
        {"\n\n  "}
        <h2>{"Gratis y Plus"}</h2>
        {"\n  "}
        <p>
          {
            "La disposición diaria, las sensaciones, la salud, las tendencias, la evidencia de patrones y tu primer resumen semanal siguen siendo gratis. Reasons Within Plus añade un nuevo resumen cada semana, resúmenes mensuales, previsiones de recuperación cuando cumples los requisitos, la trayectoria de Bio Age de ocho semanas y el Archivo de análisis y patrones. Los planes mensual y anual se renuevan automáticamente hasta que los canceles en tu cuenta de Apple."
          }
        </p>
        {"\n\n  "}
        <a
          className="button"
          href="https://apps.apple.com/app/reasons-within/id6778074598"
        >
          {"Ver en el App Store"}
        </a>
        {"\n\n  "}
        <p className="disclaimer">
          {
            "Reasons Within es una herramienta de bienestar general y autoconocimiento. No es un producto sanitario y no diagnostica, trata ni ofrece consejo médico."
          }
        </p>
        {"\n\n  "}
        <footer>
          <a href={asset("es/feedback/")}>{"Comentarios"}</a>
          {"\n    "}
          <a href={asset("es/support.html")}>{"Soporte"}</a>
          {"\n    "}
          <a href={asset("es/privacy.html")}>{"Política de privacidad"}</a>
          {"\n    "}
          <a href={asset("es/terms.html")}>{"Condiciones de uso"}</a>
          {"\n  "}
        </footer>
        {"\n"}
      </main>
      {"\n"}
    </>
  );
}
