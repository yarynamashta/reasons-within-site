import { asset } from "../asset.js";

export default function Page4() {
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
          <a href={asset("terms.html")} lang="en">
            {"English"}
          </a>
          {"\n    "}
          <a href={asset("uk/terms.html")} lang="uk">
            {"Українська"}
          </a>
          {"\n    "}
          <a href={asset("fr/terms.html")} lang="fr">
            {"Français"}
          </a>
          {"\n    "}
          <a href={asset("es/terms.html")} lang="es" aria-current="page">
            {"Español"}
          </a>
          {"\n  "}
        </nav>
        {"\n\n  "}
        <h1>{"Condiciones de uso"}</h1>
        {"\n  "}
        <p className="date">
          {"Reasons Within · En vigor desde el 16 de septiembre de 2026"}
        </p>
        {"\n\n  "}
        <p>
          {"Estas condiciones complementan el "}
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
            {
              "Contrato de licencia de usuario final estándar de Apple para aplicaciones con licencia"
            }
          </a>
          {
            " (el «EULA estándar»), que rige tu licencia para usar Reasons Within. Si existe un conflicto, prevalece el EULA estándar."
          }
        </p>
        {"\n\n  "}
        <h2>{"Solo bienestar general"}</h2>
        {"\n  "}
        <p>
          {
            "Reasons Within es una herramienta de autoconocimiento y bienestar general. No es un producto sanitario y no ofrece diagnóstico, tratamiento, consejo médico, supervisión de emergencias ni sustituye la atención profesional. No retrases la búsqueda de ayuda médica por información mostrada en la app. En una emergencia, contacta con los servicios de emergencia locales."
          }
        </p>
        {"\n\n  "}
        <h2>{"Tus datos y resultados"}</h2>
        {"\n  "}
        <p>
          {
            "La app depende de datos facilitados por Apple Salud, dispositivos conectados e información que introduces. Las mediciones pueden estar incompletas, retrasadas, ser inexactas o no estar disponibles. Los patrones, la disposición, Bio Age, los resúmenes y las previsiones son estimaciones y observaciones, no pruebas de causa y efecto ni garantías de resultados futuros. Tú eres responsable de tus decisiones sobre salud y actividad."
          }
        </p>
        {"\n\n  "}
        <h2>{"Reasons Within Plus"}</h2>
        {"\n  "}
        <p>
          {
            "Reasons Within Plus se ofrece mediante suscripciones mensuales y anuales con renovación automática. La app muestra la duración, las funciones incluidas y el precio local total antes de la compra. El pago se carga a tu cuenta de Apple después de la confirmación."
          }
        </p>
        {"\n  "}
        <p>
          {
            "La suscripción se renueva automáticamente salvo que la canceles al menos 24 horas antes del final del periodo actual. Apple carga la renovación en tu cuenta. Puedes gestionarla o cancelarla en los ajustes de suscripciones de Apple o desde Reasons Within → Ajustes → Reasons Within Plus → Gestionar suscripción. Eliminar la app no cancela la suscripción."
          }
        </p>
        {"\n  "}
        <p>
          {
            "Usa Restaurar compras si no se reconoce un derecho activo. Apple gestiona la facturación, los reembolsos, los códigos de oferta y las suscripciones conforme a las normas del App Store. Las funciones que requieren suficiente historial personal mantienen sus requisitos de evidencia incluso con Plus."
          }
        </p>
        {"\n\n  "}
        <h2>{"Uso aceptable"}</h2>
        {"\n  "}
        <p>
          {
            "Solo puedes usar Reasons Within con fines legales y personales y de acuerdo con el EULA estándar. No puedes hacer un uso indebido de la app, interferir en su funcionamiento, intentar un acceso no autorizado ni usarla para infringir derechos de otras personas."
          }
        </p>
        {"\n\n  "}
        <h2>{"Propiedad intelectual"}</h2>
        {"\n  "}
        <p>
          {
            "Reasons Within, incluidos su diseño, textos, software y marca, se licencia y no se vende, y está protegida por la legislación aplicable de propiedad intelectual. Se reservan los derechos no concedidos expresamente por el EULA estándar."
          }
        </p>
        {"\n\n  "}
        <h2>{"Disponibilidad y cambios"}</h2>
        {"\n  "}
        <p>
          {
            "Podemos mejorar, cambiar, suspender o retirar funciones. HealthKit, StoreKit, los widgets, las notificaciones y los modelos en el dispositivo dependen de servicios de Apple, hardware compatible, compatibilidad del sistema operativo, permisos y datos suficientes."
          }
        </p>
        {"\n\n  "}
        <h2>{"Privacidad"}</h2>
        {"\n  "}
        <p>
          {"La "}
          <a href={asset("es/privacy.html")}>{"Política de privacidad"}</a>
          {
            " explica cómo trata la información Reasons Within y forma parte de estas condiciones."
          }
        </p>
        {"\n\n  "}
        <h2>{"Requisitos"}</h2>
        {"\n  "}
        <p>
          {
            "Solo puedes usar Reasons Within si la legislación de tu lugar de residencia te permite aceptar estas condiciones. Si la legislación local exige la autorización de un padre, una madre o un tutor, debes contar con ella."
          }
        </p>
        {"\n\n  "}
        <h2>{"Contacto"}</h2>
        {"\n  "}
        <p>
          {"Preguntas sobre estas condiciones: "}
          <a href="mailto:info@reasonswithin.com">{"info@reasonswithin.com"}</a>
          {"."}
        </p>
        {"\n\n  "}
        <footer>
          <a href={asset("es/feedback/")}>{"Comentarios"}</a>
          {"\n    "}
          <a href={asset("es/index.html")}>{"Inicio"}</a>
          {"\n    "}
          <a href={asset("es/support.html")}>{"Soporte"}</a>
          {"\n    "}
          <a href={asset("es/privacy.html")}>{"Política de privacidad"}</a>
          {"\n  "}
        </footer>
        {"\n"}
      </main>
      {"\n"}
    </>
  );
}
