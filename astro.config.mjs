import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    preact({
      compat: true,
    }),
    tailwind(),
  ],
  adapter: node({
    mode: "standalone",
  }),
});
