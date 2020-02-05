import React from 'react';

import { cryptoProviderFactory } from '@libs/crypto';

const test = () => {
    const crypto = cryptoProviderFactory();
    console.log(crypto.keyPair());
};

export const App = () => (
    <div>
        <p>Hello world!!!</p>
        <button onClick={test}>crypto</button>
    </div>
);
