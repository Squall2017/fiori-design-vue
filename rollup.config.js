import vue from 'rollup-plugin-vue'
import { eslint } from 'rollup-plugin-eslint'
import commonjs from '@rollup/plugin-commonjs'
export default [
  // ESM build to be used with webpack/rollup.
  {
    input: './packages/index.js',
    output: {
      format: 'cjs',
      file: 'dist/library.js'
    },
    plugins: [
      commonjs(),
      vue(),
      eslint({
        include: ['./packages/**/*.js'] // 需要检查的部分
      })
    ]
  }
]
