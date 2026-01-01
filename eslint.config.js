import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  { ignores: ['dist'] },

  // Vue Flat Config đúng cho eslint-plugin-vue v10
  ...vue.configs['flat/recommended'],

  {
    files: ['**/*.{js,vue}'],

    languageOptions: {
      globals: globals.browser
    },

    rules: {
      ...js.configs.recommended.rules,

      // Common rules bạn cần
      'vue/multi-word-component-names': 'off',
      'no-console': 1,
      'no-lonely-if': 1,
      'no-trailing-spaces': 1,
      'no-multi-spaces': 1,
      'no-multiple-empty-lines': 1,
      'space-before-blocks': ['error', 'always'],
      'object-curly-spacing': [1, 'always'],
      'indent': ['warn', 2],
      'semi': [1, 'never'],
      'quotes': ['error', 'single'],
      'array-bracket-spacing': 1,
      'linebreak-style': 0,
      'no-unexpected-multiline': 'warn',
      'keyword-spacing': 1,
      'comma-dangle': 1,
      'comma-spacing': 1,
      'arrow-spacing': 1
    }
  }
]

