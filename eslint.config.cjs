const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    ignores: ["public/assets/fonts/**", "public/assets/images/**", "public/assets/icons/**", "node_modules/**"]
  },
  js.configs.recommended,
  {
    files: ["public/assets/js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        ...globals.browser
      }
    }
  }
];
