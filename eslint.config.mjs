import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest, // ✅ Ajout des globals Jest (test, expect, describe…)
      },
    },
    rules: {
      // tes règles perso ici si besoin
    },
  },
];