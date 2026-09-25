export function feedbackURL(lang = "en", config = import.meta.env) {
  const localized = {
    en: config.VITE_FILLOUT_URL,
    uk: config.VITE_FILLOUT_URL_UK,
    fr: config.VITE_FILLOUT_URL_FR,
    es: config.VITE_FILLOUT_URL_ES,
  };
  const configured = localized[lang] || localized.en;
  if (!configured) return null;
  try {
    const url = new URL(configured);
    if (
      url.protocol !== "https:" ||
      !(
        url.hostname === "fillout.com" || url.hostname.endsWith(".fillout.com")
      ) ||
      !/^\/t\/[a-zA-Z0-9]+\/?$/.test(url.pathname)
    )
      return null;
    url.search = "";
    url.hash = "";
    return url;
  } catch {
    return null;
  }
}

export function formLink(lang, search = "", config = import.meta.env) {
  const url = feedbackURL(lang, config);
  if (!url) return null;
  const incoming = new URLSearchParams(search);
  url.searchParams.set(
    "source",
    incoming.get("source") === "ios" ? "ios" : "website",
  );
  url.searchParams.set("lang", lang);
  for (const key of ["app_version", "ios_version"]) {
    const value = incoming.get(key);
    if (value && /^\d+(?:\.\d+){0,3}$/.test(value))
      url.searchParams.set(key, value);
  }
  return url.href;
}
