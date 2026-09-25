export function asset(path) {
  let relative = path.replace(/^\/+/, "");
  relative = relative.replace(/index\.html$/, "").replace(/\.html$/, "/");
  if (["uk", "fr", "es"].includes(relative)) relative += "/";
  return import.meta.env.BASE_URL + relative;
}
