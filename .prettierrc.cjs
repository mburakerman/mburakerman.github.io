module.exports = {
  printWidth: 80,
  semi: true,
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,

  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
};
