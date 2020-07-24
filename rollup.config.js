import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
const plugins = [
  commonjs(),
  vue(),
  postcss({
    // Extract CSS to the same location where JS file is generated but with .css extension.
    extract: true,
    // Use named exports alongside default export.
    namedExports: true,
    // Minimize CSS, boolean or options for cssnano.
    minimize: true,
    // Enable sourceMap.
    sourceMap: true,
    // This plugin will process files ending with these extensions and the extensions supported by custom loaders.
    extensions: ['.css']
  })
]
export default [
  {
    input: './packages/index.js',
    output: {
      format: 'esm',
      file: 'dist/library.js'
    },
    plugins
  },
  {
    input: './packages/index.js',
    output: {
      format: 'esm',
      file: 'example/src/fiori-design-vue/index.js'
    },
    plugins
  }
]
