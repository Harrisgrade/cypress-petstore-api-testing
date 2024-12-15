import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      host: "https://petstore.swagger.io/v2/"
    }
  },
});
