import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import {terser} from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/main.js',
    format: 'esm',
  },
  external: ['react-is'],
  plugins: [
    resolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    terser({mangle: false}),
  ],
}
