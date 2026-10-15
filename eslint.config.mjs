import { defineConfig, globalIgnores } from 'eslint/config';
import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier/flat';

const eslintConfig = defineConfig([
  ...next,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'react/no-unescaped-entities': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/refs': 'off',
      'react-hooks/purity': 'off',
      'react-hooks/unsupported-syntax': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'import/no-anonymous-default-export': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  prettier,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '.contentlayer/**',
  ]),
]);

export default eslintConfig;
