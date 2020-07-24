import vue from 'rollup-plugin-vue'
export default [
  {
    input: './packages/index.js',
    output: {
      format: 'esm',
      file: 'dist/library.js'
    },
    plugins: [vue()]
  }
]
