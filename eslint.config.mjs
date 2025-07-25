import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintParserTypescript from '@typescript-eslint/parser';

export default [
    {
        files: ['**/*.ts', '**/*.tsx'], // Применяется ко всем файлам .ts и .tsx
        languageOptions: {
            parser: eslintParserTypescript,
            parserOptions: {
                project: './tsconfig.json', // Укажите путь к вашему файлу tsconfig.json
                ecmaFeatures: {
                    jsx: true, // Включить парсинг JSX для файлов .tsx
                },
            },
        },
        plugins: {
            '@typescript-eslint': eslintPluginTypescript,
        },
        rules: {
            // Добавьте или переопределите любые нужные правила
            // Например, для использования рекомендуемых правил TypeScript:
            ...eslintPluginTypescript.configs['eslint-recommended'].rules,
            ...eslintPluginTypescript.configs.recommended.rules,
            // Возможно, вы также захотите включить react/jsx-uses-react, react/jsx-uses-vars, если используете React
            // или, если не используете React, отключите соответствующие правила
        },
    },
    {
        files: ['**/*.js'], // Применяется ко всем файлам .js (если они у вас есть)
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        rules: {
            // Добавьте свои правила для JavaScript здесь
        },
    },
    // Вы также можете добавить глобальный игнор для файлов/папок здесь, если нужно,
    // вместо устаревшего .eslintignore
    {
        ignores: ['node_modules/', 'dist/', 'build/'],
    },
];
