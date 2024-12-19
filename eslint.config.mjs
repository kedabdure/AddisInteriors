import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import nextConfig from "eslint-config-next";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"], // Include TypeScript if using
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  nextConfig, // Adds Next.js-specific ESLint rules
];
