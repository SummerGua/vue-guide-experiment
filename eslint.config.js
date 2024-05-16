import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
// 暂时会出问题，等适配v9
// import pluginVue from "eslint-plugin-vue";

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'spaced-comment': ['error', 'always'],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // ...pluginVue.configs["flat/essential"],
];
