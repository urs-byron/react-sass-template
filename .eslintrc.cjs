module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 15,
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],

    ignorePatterns: ['dist', 'vite.config.ts', 'node_modules'],
    rules: {
        'react/react-in-jsx-scope': 0,
        'import/prefer-default-export': 0,
        'react/require-default-props': 0,
        'no-console': 0,
    },
}
