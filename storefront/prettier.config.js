/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  singleQuote: false,
  arrowParens: "always",
  trailingComma: "all",
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  bracketSpacing: true,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
