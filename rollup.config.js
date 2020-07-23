import vue from 'rollup-plugin-vue'
import { eslint } from 'rollup-plugin-eslint'
export default [
  // ESM build to be used with webpack/rollup.
  {
    input: './index.js',
    output: {
      format: 'esm',
      file: 'dist/library.esm.js'
    },
    plugins: [
      vue(),
      eslint({
        include: ['src/**/*.js'] // 需要检查的部分
      })
    ]
  },
  // SSR build.
  {
    input: './index.js',
    output: {
      format: 'cjs',
      file: 'dist/library.ssr.js'
    },
    plugins: [vue({ template: { optimizeSSR: true } })]
  }
]
