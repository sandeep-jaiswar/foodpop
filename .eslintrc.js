module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:all",
    "plugin:react/all",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "comma-dangle": "off",
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        semi: false,
        singleQuote: false,
        trailingComma: "es5",
      },
    ],
    "react/react-in-jsx-scope": "off",
  },
}
