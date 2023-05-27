module.exports = {
  parser: "@typescript-eslint/parser",
  // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020,
    // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },

  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },

  extends: ["plugin:@typescript-eslint/recommended", "prettier", "plugin:prettier/recommended", "plugin:storybook/recommended"]
};