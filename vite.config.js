import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.BASE_PATH || "/";
  const cleanURLs = (server) => {
    server.middlewares.use((req, res, next) => {
      const url = new URL(req.url, "http://localhost");
      const path = url.pathname.startsWith(base)
        ? url.pathname.slice(base.length)
        : null;
      if (
        path &&
        /^(?:(?:uk|fr|es)\/)?(?:privacy|support|terms|feedback)$|^(?:uk|fr|es)$/.test(
          path,
        )
      ) {
        res.writeHead(308, { Location: url.pathname + "/" + url.search });
        res.end();
        return;
      }
      next();
    });
  };
  return {
    plugins: [
      react(),
      {
        name: "clean-page-urls",
        configureServer: cleanURLs,
        configurePreviewServer: cleanURLs,
      },
    ],
    base: env.BASE_PATH || "/",
    define: {
      __SITE_URL__: JSON.stringify(env.SITE_URL || ""),
    },
  };
});
