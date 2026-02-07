import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

import expressiveCode from 'astro-expressive-code';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode(), tailwind(), react(), icon()]
});