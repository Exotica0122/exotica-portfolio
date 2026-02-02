import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode(), tailwind(), react()]
});