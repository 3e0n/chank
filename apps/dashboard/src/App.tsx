import React from 'react';

import { cryptoProviderFactory } from '@libs/crypto';

const crypto = cryptoProviderFactory().newCrypto();

export const App = () => (
    <div>
        <p>Hello world!!!</p>
        <button
            onClick={() => {
                console.log(crypto.keyPair('secret'));
            }}
        >
            crypto
        </button>
    </div>
);
