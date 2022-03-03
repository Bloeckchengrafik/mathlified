import nodeResolve from '@rollup/plugin-node-resolve';
import commonJS from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';
import {terser} from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    plugins: [
      nodeResolve(),
      commonJS(),
      terser(),
      typescript({tsconfig: './tsconfig.json'})
    ],
    output: {
      name: 'mathlifier',
      sourcemap: true,
      file: pkg.main,
      format: 'es',
    }
  }
];