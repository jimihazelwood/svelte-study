import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';

// noinspection JSUnusedGlobalSymbols
export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    name: 'app'
  },
  plugins: [
    resolve(),
    svelte({
      css: function (css) {
        css.write('public/main.css', true);
      }
    })
  ]
}
