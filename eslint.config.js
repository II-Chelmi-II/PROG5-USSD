module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
        __dirname: "readonly",
        module: "readonly"
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
  {
    ignores: ["node_modules/**"],
  },
];