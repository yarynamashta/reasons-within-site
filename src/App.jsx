import DocumentHeader from "./components/DocumentHeader.jsx";
import { pages, asset } from "./pages.jsx";
export { pages };
export function resolvePage(pathname) {
  const base = import.meta.env.BASE_URL;
  let path = pathname.startsWith(base)
    ? pathname.slice(base.length)
    : pathname.replace(/^\//, "");
  path = path.replace(/\/index\.html$/, "/");
  if (/^(?:(?:uk|fr|es)\/)?(?:privacy|support|terms|feedback)\/?$/.test(path)) {
    return path.replace(/\/$/, "") + ".html";
  }
  if (/^(?:uk|fr|es)$/.test(path)) path += "/";
  if (!path || path.endsWith("/")) path += "index.html";
  return path;
}
export function App({ path = "index.html" }) {
  const Page = pages[path]?.Component;
  if (Page) {
    if (/(?:privacy|terms|support|feedback)\.html$/.test(path)) {
      return (
        <div className="document-page">
          <DocumentHeader lang={pages[path].lang} path={path} />
          <Page lang={pages[path].lang} />
        </div>
      );
    }
    return <Page lang={pages[path].lang} />;
  }
  return (
    <main className="wrap">
      <h1>A little off the path.</h1>
      <p>This page could not be found.</p>
      <a className="button" href={asset("")}>
        Back to Reasons Within
      </a>
    </main>
  );
}
