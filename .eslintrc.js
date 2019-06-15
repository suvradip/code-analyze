module.exports = {
   root: true,
   env: {
      browser: true,
      node: true,
   },
   parserOptions: {
      parser: 'babel-eslint',
   },
   // extends: [
   //    'airbnb-base',
   //    '@nuxtjs',
   //    'plugin:nuxt/recommended',
   //    'plugin:prettier/recommended',
   //    'prettier',
   //    'prettier/vue',
   // ],
   // plugins: ['prettier'],
   extends: ['airbnb-base', '@nuxtjs', 'prettier', 'prettier/vue'],
   plugins: ['prettier'],
   // extends: ['airbnb-base', 'plugin:vue/recommended', 'prettier'],
   // plugins: ['vue'],
   // add your custom rules here
   rules: {
      'nuxt/no-cjs-in-config': 'off',
      'no-console': 'off',
   },
};
