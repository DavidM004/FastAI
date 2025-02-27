// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import icon from "astro-icon";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [tailwind(), alpinejs({ entrypoint: "/src/alpine" }), icon()],
  devToolbar: { enabled: false },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
