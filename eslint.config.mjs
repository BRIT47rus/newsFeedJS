import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    globalIgnores(['**/dist/']),
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
        },
    },
]);
