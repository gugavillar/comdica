module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'eslint-plugin-import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/order': ['error', {
      groups: [
        ["builtin", "external", "internal"],
        ["parent", "sibling", "object", "type"],
        "index"
      ],
      pathGroups: [
        {
          pattern: "{react,react-dom/**}",
          group: "external",
          position: "before"
        },
        {
          pattern: "{@chakraui/**,@chakraui/*}",
          group: "external",
          position: "before"
        }
      ],
      pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        }
    }]
  }
}
