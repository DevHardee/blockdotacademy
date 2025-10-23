module.exports = {
    root: true,
    ignorePatterns: [
        "dist/",
        "node_modules/",
        "vite.config.*",
        "tailwind.config.*",
        "postcss.config.*",
      ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: { version: "detect" },
    },
    env: {
      browser: true,
      es2023: true,
      node: true,
    },
    plugins: [
      "react",
      "react-hooks",
      "react-refresh",
      "@typescript-eslint",
      "prettier",
    ],
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
    ],
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          semi: true,
          singleQuote: false,
          trailingComma: "es5",
          printWidth: 100,
          tabWidth: 2,
        },
      ],
      "react-refresh/only-export-components": "warn",
      "react/react-in-jsx-scope": "off", // Vite + React 17+ don’t need React in scope
    },
  };
  