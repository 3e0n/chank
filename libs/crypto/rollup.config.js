/* eslint-disable @typescript-eslint/no-var-requires */
const typescript = require('@rollup/plugin-typescript');
const resolve = require('@rollup/plugin-node-resolve');
const cjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');
const path = require('path');

module.exports = [
    {
        input: path.resolve(__dirname, 'src/vendor-rollup-umd-entry.ts'),
        output: {
            format: 'umd',
            name: '@waves/ts-lib-crypto',
            file: path.resolve(__dirname, '../../dist/libs/vendor/crypto.1.4.2.umd.js'),
        },
        plugins: [
            typescript({
                tsconfig: path.resolve(__dirname, '../tsconfig.json'),
            }),
            resolve(),
            cjs(),
            terser(),
        ],
    },
];
