/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint", "unicorn", "prettier", "unused-imports"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "next",
    "next/core-web-vitals",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    curly: ["error", "all"],
    "prefer-const": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/keyword-spacing": "error",
    "@typescript-eslint/space-infix-ops": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/prop-types": "off",
    "unused-imports/no-unused-imports": "error",
    "max-len": [
      "error",
      {
        code: 80,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
      },
    ],
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
      },
    ],
    "object-curly-spacing": ["error", "always"],
    "arrow-parens": ["error", "always"],
    "linebreak-style": 0,
    "no-confusing-arrow": [
      "error",
      {
        allowParens: false,
      },
    ],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
        vars: "all",
      },
    ],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
      },
    ],
  },
};
module.exports = config;
