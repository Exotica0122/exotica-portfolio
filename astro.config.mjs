import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode(), tailwind(), react(), icon()],
});
