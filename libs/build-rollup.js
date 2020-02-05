/* eslint-disable @typescript-eslint/no-var-requires */
const rollup = require('rollup');
const cryptoConfig = require('./crypto/rollup.config');

const config = cryptoConfig[0];

async function build() {
    const bundle = await rollup.rollup(config);
    await bundle.write(config);
}

build();
