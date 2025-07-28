import { defineConfig } from 'eslint/config';
import tsParser from '@typescript-eslint/parser';

export default defineConfig([
    {
        // extends: ['eslint:recommended', 'prettier'],
        languageOptions: {
            parser: tsParser,
        },
    },
]);
