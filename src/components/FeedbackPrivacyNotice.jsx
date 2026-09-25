import { feedbackURL } from "../feedback/config.js";
import { feedbackCopy } from "../feedback/copy.js";
export default function FeedbackPrivacyNotice({lang}) {
  if (!feedbackURL(lang)) return null;
  const titles = {en:"Website feedback", uk:"Відгуки на сайті", fr:"Commentaires sur le site", es:"Comentarios en el sitio web"};
  return <section><h2>{titles[lang]}</h2><p>{feedbackCopy[lang].disclosure}</p><p>{feedbackCopy[lang].note}</p></section>;
}
