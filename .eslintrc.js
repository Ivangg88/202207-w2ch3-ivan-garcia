module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-plusplus": "off",
    "no-alert": "off",
    "no-console": "off",
  },
};
