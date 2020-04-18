module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/eslint-recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "max-len": ["error", { code: 160 }],
    quotes: [1, "double"],
    "linebreak-style": ["error", "windows"],
    "object-curly-newline": ["error", { multiline: true }],
    "no-alert": 0,
    "no-console": 0,
    "react/jsx-one-expression-per-line": 0,
    "arrow-parens": ["error", "as-needed"],
    "import/no-cycle": [0, { maxDepth: 5 }],
    "react/require-default-props": 0,
    "import/no-extraneous-dependencies": 0,
  },
};
