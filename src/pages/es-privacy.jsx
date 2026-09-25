import FeedbackPrivacyNotice from "../components/FeedbackPrivacyNotice.jsx";
import { asset } from "../asset.js";

export default function Page2() {
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
          <a href={asset("privacy.html")} lang="en">
            {"English"}
          </a>
          {"\n    "}
          <a href={asset("uk/privacy.html")} lang="uk">
            {"Українська"}
          </a>
          {"\n    "}
          <a href={asset("fr/privacy.html")} lang="fr">
            {"Français"}
          </a>
          {"\n    "}
          <a href={asset("es/privacy.html")} lang="es" aria-current="page">
            {"Español"}
          </a>
          {"\n  "}
        </nav>
        {"\n\n  "}
        <h1>{"Política de privacidad"}</h1>
        {"\n  "}
        <p className="date">
          {"Reasons Within · En vigor desde el 16 de septiembre de 2026"}
        </p>
        {"\n\n  "}
        <p>
          {
            "Esta política describe cómo trata la información la app Reasons Within para iOS. Reasons Within está operada por Yaryna Maksymiuk. Puedes enviar preguntas y solicitudes sobre privacidad a "
          }
          <a href="mailto:info@reasonswithin.com">{"info@reasonswithin.com"}</a>
          {"."}
        </p>
        {"\n\n  "}
        <h2>{"Datos de Apple Salud"}</h2>
        {"\n  "}
        <p>
          {
            "Con tu permiso, Reasons Within lee determinadas categorías de Apple Salud, incluidas mediciones cardiacas, de sueño, actividad, cuerpo, respiración, luz diurna, atención plena, ciclo y datos relacionados. Tú decides qué categorías autorizas."
          }
        </p>
        {"\n  "}
        <p>
          {
            "Las mediciones sin procesar de Apple Salud se tratan en tu iPhone. No se suben a servidores de Reasons Within, no se venden, no se usan para publicidad ni para entrenar modelos de aprendizaje automático. Reasons Within no tiene sistema de cuentas ni opera un servidor de datos de salud."
          }
        </p>
        {"\n\n  "}
        <h2>{"Información guardada en tu dispositivo"}</h2>
        {"\n  "}
        <p>
          {
            "La app guarda localmente la información necesaria para prestar sus funciones, como:"
          }
        </p>
        {"\n  "}
        <ul>
          {"\n    "}
          <li>{"registros de sensaciones y notas opcionales;"}</li>
          {"\n    "}
          <li>
            {
              "objetivos, idioma, hora de notificaciones y preferencias de respiración y visualización;"
            }
          </li>
          {"\n    "}
          <li>
            {
              "reacciones a patrones, ciclo de vida de patrones e historial de calibración de previsiones;"
            }
          </li>
          {"\n    "}
          <li>{"resúmenes semanales y mensuales y el Archivo Plus;"}</li>
          {"\n    "}
          <li>
            {"capturas de widgets y estado de programación de notificaciones."}
          </li>
          {"\n  "}
        </ul>
        {"\n  "}
        <p>
          {
            "Esta información no se sube a Reasons Within. El derecho a la suscripción se comprueba mediante StoreKit de Apple; Reasons Within no recibe los datos de tu tarjeta de pago."
          }
        </p>
        {"\n\n  "}
        <h2>{"Explicaciones en el dispositivo"}</h2>
        {"\n  "}
        <p>
          {
            "En dispositivos compatibles, un resumen mensual puede usar el framework Foundation Models de Apple en el dispositivo para redactar hechos ya calculados por la app. La indicación, los hechos de salud y el texto generado permanecen en tu dispositivo y no se envían a Reasons Within, PostHog ni a un servicio de entrenamiento de modelos. Cuando el framework no está disponible, la app usa un resumen determinista y localizado."
          }
        </p>
        {"\n\n  "}
        <h2>{"Qué escribe la app en Apple Salud"}</h2>
        {"\n  "}
        <p>
          {
            "El único registro que Reasons Within puede añadir a Apple Salud es una sesión de atención plena correspondiente a un ejercicio de respiración que completes, y solo después de conceder permiso de escritura. La app nunca modifica ni elimina registros existentes de Salud."
          }
        </p>
        {"\n\n  "}
        <h2>{"Análisis de producto y diagnósticos seudónimos opcionales"}</h2>
        {"\n  "}
        <p>
          {
            "Antes de inicializar el SDK de análisis, Reasons Within pregunta si quieres compartir datos de análisis. Solo si eliges «Compartir análisis», la app envía eventos seudónimos limitados a un proyecto de PostHog alojado en la Unión Europea. Estos eventos usan un identificador aleatorio generado por la app y pueden incluir la versión de la app, información del sistema operativo y dispositivo, marcas de tiempo, pantallas o funciones usadas, interacciones con widgets y notificaciones, resultados del flujo de compra e información técnica sobre errores."
          }
        </p>
        {"\n  "}
        <p>
          {
            "Algunos eventos operativos incluyen categorías o recuentos limitados derivados del funcionamiento de la app: por ejemplo, el tipo y la etapa de un patrón, si una previsión cumplía los requisitos, recuentos de concordancia o el identificador y estado de disponibilidad de una consulta de Salud. No incluyen mediciones ni fechas de Salud sin procesar, puntuaciones o notas de sensaciones, contenido de notificaciones, resúmenes o archivos, contenido exportado ni indicaciones y resultados de Foundation Models."
          }
        </p>
        {"\n  "}
        <p>
          {
            "Reasons Within no envía a PostHog tu nombre, correo electrónico, cuenta de Apple ni identificador publicitario y no llama a la API de identificación de PostHog. Como ocurre con cualquier solicitud de internet, el servicio de PostHog recibe la dirección IP de conexión. No usamos estos análisis para rastrearte entre apps o sitios web de otras empresas ni para publicidad."
          }
        </p>
        {"\n  "}
        <p>
          {
            "Los eventos de análisis se conservan solo durante el tiempo razonablemente necesario para evaluar la fiabilidad y el uso de las funciones; después se eliminan o agregan. PostHog actúa como nuestro encargado del tratamiento para análisis y debe proteger la información que trata. Consulta el "
          }
          <a href="https://posthog.com/privacy">
            {"aviso de privacidad de PostHog"}
          </a>
          {"."}
        </p>
        {"\n\n  "}
        <h2>{"Conservación y eliminación"}</h2>
        {"\n  "}
        <p>
          {
            "La información local permanece hasta que la eliminas mediante la app, se sustituye durante el uso normal o eliminas la app. Eliminar Reasons Within borra del dispositivo su base local, preferencias, archivo y contenedor de widgets. Una sesión de atención plena ya escrita en Apple Salud permanece allí hasta que la elimines en Salud."
          }
        </p>
        {"\n  "}
        <p>
          {
            "Para solicitar acceso a los análisis asociados al identificador de la app o su eliminación, contacta con "
          }
          <a href="mailto:info@reasonswithin.com">{"info@reasonswithin.com"}</a>
          {
            ". Puede que necesitemos información limitada del dispositivo o del evento para localizar los registros."
          }
        </p>
        {"\n\n  "}
        <h2>{"Tus opciones y derechos"}</h2>
        {"\n  "}
        <p>
          {
            "Los análisis se basan en tu consentimiento. Puedes concederlo o retirarlo en cualquier momento en Reasons Within → Ajustes → «Compartir análisis y diagnósticos». Retirarlo detiene la recopilación futura y no cambia el funcionamiento de la app. Puedes cambiar los permisos de Salud en la app Salud abriendo tu perfil y después Apps → Reasons Within. Los permisos de notificaciones se controlan en Ajustes de iOS."
          }
        </p>
        {"\n  "}
        <p>
          {
            "También puedes contactarnos para ejercer los derechos disponibles donde vives, incluidos acceso, rectificación, eliminación, limitación, oposición, retirada del consentimiento o presentación de una reclamación ante una autoridad de control."
          }
        </p>
        {"\n\n  "}
        <h2>{"Sin publicidad ni venta de datos"}</h2>
        {"\n  "}
        <p>
          {
            "Reasons Within no contiene publicidad, no vende información personal y no comparte información con corredores de datos ni anunciantes."
          }
        </p>
        {"\n\n  "}
        <h2>{"Privacidad infantil"}</h2>
        {"\n  "}
        <p>
          {
            "La app no solicita la edad del usuario ni envía nombres, datos de contacto o datos sin procesar de Apple Salud mediante los análisis. Si crees que se nos ha enviado información relacionada con un menor, ponte en contacto para que podamos investigarlo y eliminarla cuando corresponda."
          }
        </p>
        {"\n\n  "}
        <h2>{"Tratamiento internacional"}</h2>
        {"\n  "}
        <p>
          {
            "Los análisis se tratan mediante el alojamiento de PostHog en la Unión Europea. Apple trata las compras del App Store y los servicios de Apple Salud conforme a sus propias condiciones y política de privacidad."
          }
        </p>
        {"\n\n  "}
        <h2>{"Cambios"}</h2>
        {"\n  "}
        <p>
          {
            "Podemos actualizar esta política cuando cambie la app o los requisitos legales. Revisaremos la fecha de entrada en vigor de esta página. Los cambios importantes se comunicarán en la app o la ficha del App Store cuando corresponda."
          }
        </p>
        {"\n\n  "}
        <h2>{"Contacto"}</h2>
        {"\n  "}
        <p>
          {"Preguntas o solicitudes sobre privacidad: "}
          <a href="mailto:info@reasonswithin.com">{"info@reasonswithin.com"}</a>
          {"."}
        </p>
        {"\n\n  "}
        <FeedbackPrivacyNotice lang="es" />
        <footer>
          <a href={asset("es/feedback/")}>{"Comentarios"}</a>
          {"\n    "}
          <a href={asset("es/index.html")}>{"Inicio"}</a>
          {"\n    "}
          <a href={asset("es/support.html")}>{"Soporte"}</a>
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
