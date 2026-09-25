import { createRoot, hydrateRoot } from "react-dom/client";
import { App, resolvePage, pages } from "./App.jsx";
import "./base.css";
import "./landing.css";
const path = resolvePage(window.location.pathname);
const page = pages[path];
document.documentElement.lang = page?.lang || "en";
document.body.className = path === "index.html" ? "landing" : "";
if (page) document.title = page.title;
const root = document.getElementById("root");
root.hasChildNodes() && root.querySelector("main")
  ? hydrateRoot(root, <App path={path} />)
  : createRoot(root).render(<App path={path} />);
