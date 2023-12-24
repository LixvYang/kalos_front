module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:prettier/recommended',
    ],
    plugins: [],
    rules: {
        'vue/multi-word-component-names': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['off'],
        'vue/require-prop-types': 'off',
        'vue/require-v-for-key': 'off',
        'vue/valid-template-root': 'off',
        'no-console': 'off',
        'require-await': 'off',
        '@typescript-eslint/no-namespace': 0,
        '@typescript-eslint/no-use-before-define': 0,
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-explicit-any': 0,
        'no-use-before-define': ['error', { variables: false }],
        camelcase: 'off',
        'vue/no-deprecated-slot-attribute': 'off',
    },
    overrides: [
        {
            files: [
                '**/pages/**/*.{js,ts,vue}',
                '**/layouts/**/*.{js,ts,vue}',
                '**/app.{js,ts,vue}',
                '**/error.{js,ts,vue}',
            ],
        },
    ],
}
