import { defineConfig } from 'eslint/config';
import tsParser from '@typescript-eslint/parser';

export default defineConfig([
    {
        languageOptions: {
            parser: tsParser,
        },
    },
]);
