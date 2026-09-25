import { asset } from "../asset.js";

export default function Page3() {
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
          <a href={asset("support.html")} lang="en">
            {"English"}
          </a>
          {"\n    "}
          <a href={asset("uk/support.html")} lang="uk">
            {"Українська"}
          </a>
          {"\n    "}
          <a href={asset("fr/support.html")} lang="fr">
            {"Français"}
          </a>
          {"\n    "}
          <a href={asset("es/support.html")} lang="es" aria-current="page">
            {"Español"}
          </a>
          {"\n  "}
        </nav>
        {"\n\n  "}
        <h1>{"Soporte"}</h1>
        {"\n  "}
        <p>
          {
            "Reasons Within lee Apple Salud en tu iPhone para mostrar con cautela patrones en tu propio historial."
          }
        </p>
        {"\n\n  "}
        <div className="card">
          {"¿Necesitas ayuda? Escribe a "}
          <a href="mailto:info@reasonswithin.com">{"info@reasonswithin.com"}</a>
          {
            ". No incluyas mediciones de salud ni otra información sensible en el mensaje."
          }
        </div>
        {"\n\n  "}
        <div className="card feedback-callout">
          <p>Informa de un error, sugiere una función o comparte tu opinión.</p>
          <a href={asset("es/feedback/")}>{"Comentarios"}</a>
        </div>
        <h2>{"Apple Salud"}</h2>
        {"\n  "}
        <h3>{"La app está vacía o no puede leer Salud."}</h3>
        {"\n  "}
        <p>
          {
            "Abre la app Salud, toca tu foto de perfil y ve a Apps → Reasons Within. Activa las categorías que quieras compartir. También puedes abrir Reasons Within → Ajustes → Acceso a Apple Salud. Apple no indica a las apps si se ha rechazado una categoría de lectura concreta, por lo que puede que no aparezcan datos hasta que habilites el acceso."
          }
        </p>
        {"\n\n  "}
        <h3>{"¿Por qué falta una métrica?"}</h3>
        {"\n  "}
        <p>
          {
            "El dispositivo de origen debe escribir primero esa medición en Apple Salud. Algunas métricas necesitan un Apple Watch u otro dispositivo compatible, y las vistas de sueño o recuperación necesitan mediciones suficientemente recientes."
          }
        </p>
        {"\n\n  "}
        <h3>{"¿Qué escribe Reasons Within en Apple Salud?"}</h3>
        {"\n  "}
        <p>
          {
            "Solo una sesión de atención plena correspondiente a un ejercicio de respiración que completes, y únicamente después de que lo autorices. La app nunca modifica ni elimina tus registros existentes de Salud."
          }
        </p>
        {"\n\n  "}
        <h2>{"Patrones, resúmenes y previsiones"}</h2>
        {"\n  "}
        <h3>{"¿Por qué todavía no veo ningún patrón?"}</h3>
        {"\n  "}
        <p>
          {
            "Los patrones necesitan suficiente historial personal coherente. Un hallazgo puede aparecer primero como evidencia en desarrollo y solo se confirma si continúa manteniéndose. Es preferible no mostrar nada que presentar una conclusión débil."
          }
        </p>
        {"\n\n  "}
        <h3>{"¿Cuándo aparece una previsión de recuperación?"}</h3>
        {"\n  "}
        <p>
          {
            "Después de un día de actividad y solo cuando tu historial contiene suficiente evidencia confirmada de recuperación. La previsión se pausa si su precisión reciente deja de justificar que se muestre."
          }
        </p>
        {"\n\n  "}
        <h3>{"¿Cómo funcionan los resúmenes semanales y mensuales?"}</h3>
        {"\n  "}
        <p>
          {
            "Tu primer resumen semanal es gratis; Plus desbloquea uno nuevo cada semana. Los resúmenes mensuales comparan meses naturales completos cuando hay suficientes datos. En iPhone compatibles, el modelo de lenguaje de Apple en el dispositivo puede redactar los hechos mensuales verificados; en caso contrario, la app usa un resumen completo escrito previamente. Las entradas y los resultados permanecen en el dispositivo."
          }
        </p>
        {"\n\n  "}
        <h3>{"¿Puedo exportar un resumen mensual?"}</h3>
        {"\n  "}
        <p>
          {
            "Sí. Abre el resumen y usa Compartir. La exportación se crea de forma local y tú eliges dónde enviarla o guardarla."
          }
        </p>
        {"\n\n  "}
        <h2>{"Reasons Within Plus"}</h2>
        {"\n  "}
        <h3>{"¿Qué sigue siendo gratis?"}</h3>
        {"\n  "}
        <p>
          {
            "La disposición diaria, las sensaciones, la salud, las tendencias, la evidencia de patrones y tu primer resumen semanal."
          }
        </p>
        {"\n\n  "}
        <h3>{"¿Qué incluye Plus?"}</h3>
        {"\n  "}
        <p>
          {
            "Un nuevo resumen cada semana, resúmenes mensuales, previsiones de recuperación cuando cumples los requisitos, una trayectoria de Bio Age de ocho semanas y el Archivo de análisis y patrones en el dispositivo."
          }
        </p>
        {"\n\n  "}
        <h3>{"¿Cómo restauro o gestiono mi suscripción?"}</h3>
        {"\n  "}
        <p>
          {
            "Abre Reasons Within → Ajustes → Reasons Within Plus. Usa Restaurar compras si no se reconoce una suscripción activa. Los suscriptores pueden elegir Gestionar suscripción para cambiarla o cancelarla mediante Apple. Eliminar la app no cancela la suscripción."
          }
        </p>
        {"\n\n  "}
        <h3>{"¿Cómo canjeo un código de oferta?"}</h3>
        {"\n  "}
        <p>
          {
            "Abre Reasons Within → Ajustes → Reasons Within Plus → Canjear código de oferta y sigue la hoja del App Store."
          }
        </p>
        {"\n\n  "}
        <h2>{"Notificaciones y widgets"}</h2>
        {"\n  "}
        <h3>{"No recibo notificaciones."}</h3>
        {"\n  "}
        <p>
          {
            "Permítelas en la app Ajustes de iOS, en Reasons Within → Notificaciones. En la app, abre el engranaje → Notificaciones para comprobar el estado y elegir la hora de entrega más temprana. Las alertas de patrones llegan como máximo una vez al día."
          }
        </p>
        {"\n\n  "}
        <h3>{"¿Cómo añado un widget?"}</h3>
        {"\n  "}
        <p>
          {
            "Mantén pulsada la pantalla de inicio, toca Editar o +, busca Reasons Within y elige Today, Bio Age, Activity o Calories. Abre primero la app una vez para que el widget pueda recibir datos."
          }
        </p>
        {"\n\n  "}
        <h2>{"Idioma y datos"}</h2>
        {"\n  "}
        <h3>{"¿Cómo cambio el idioma?"}</h3>
        {"\n  "}
        <p>
          {
            "Abre el engranaje → Idioma y elige inglés, ucraniano, francés o español."
          }
        </p>
        {"\n\n  "}
        <h3>{"¿Dónde se guarda mi información?"}</h3>
        {"\n  "}
        <p>
          {
            "Tus datos de salud y contenido personal permanecen en el dispositivo. Si eliges «Compartir análisis», se envían datos limitados de uso y diagnóstico al servicio europeo de PostHog para ayudarnos a mejorar la app. Puedes cambiar esta opción en Ajustes. Consulta la "
          }
          <a href={asset("es/privacy.html")}>{"Política de privacidad"}</a>
          {"."}
        </p>
        {"\n\n  "}
        <h3>{"¿Cómo elimino mi información?"}</h3>
        {"\n  "}
        <p>
          {
            "Eliminar Reasons Within borra del dispositivo su base de datos local, preferencias, archivo y datos de widgets. Las sesiones de atención plena ya guardadas en Apple Salud permanecen allí hasta que las elimines en Salud. Para solicitar la eliminación de los análisis seudónimos, escribe a "
          }
          <a href="mailto:info@reasonswithin.com">{"info@reasonswithin.com"}</a>
          {"."}
        </p>
        {"\n\n  "}
        <footer>
          <a href={asset("es/feedback/")}>{"Comentarios"}</a>
          {"\n    "}
          <a href={asset("es/index.html")}>{"Inicio"}</a>
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
