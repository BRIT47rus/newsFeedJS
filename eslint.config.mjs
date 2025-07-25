import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintParserTypescript from '@typescript-eslint/parser';

export default [
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: eslintParserTypescript,
            parserOptions: {
                project: './tsconfig.json',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            '@typescript-eslint': eslintPluginTypescript,
        },
        rules: {
            ...eslintPluginTypescript.configs['eslint-recommended'].rules,
            ...eslintPluginTypescript.configs.recommended.rules,
            quotes: [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true,
                },
            ],
            'comma-dangle': [
                'error',
                {
                    arrays: 'always-multiline',
                    objects: 'always-multiline',
                    imports: 'always-multiline',
                    exports: 'always-multiline',
                    functions: 'never', // Changed this from 'always-multiline' to 'never' based on your previous input.
                },
            ],
            indent: ['error', 2],
        },
    },
    // REMOVE THE COMMA FROM HERE
    {
        ignores: ['node_modules/', 'dist/', 'build/'],
    },
];
