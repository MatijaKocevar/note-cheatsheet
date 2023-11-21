module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    plugins: ['vue', 'prettier'],
    rules: {
        'prettier/prettier': ['warn'],
        '@typescript-eslint/no-explicit-any': 'error'
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.vue'],
            rules: {
                // Additional rules or overrides for TypeScript files
            }
        }
    ]
}
