import { CryptoProvider } from './abstract';
import { WavesCryptoCreator } from './vendor-crypto-type-only';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const umdWavesModule = (window as any)['@waves/ts-lib-crypto'];
const cryptoCreator: WavesCryptoCreator = umdWavesModule && umdWavesModule.crypto;

export class CryptoProviderImpl implements CryptoProvider {
    constructor(private seedKey: string) {
        if (cryptoCreator === undefined) {
            throw new Error(`UMD module crypto not found in window['@waves/ts-lib-crypto']!`);
        }
        if (!seedKey || typeof seedKey !== 'string') {
            throw new Error('The seedKey argument must be not empty string!');
        }
    }

    protected crypto = cryptoCreator && cryptoCreator({ seed: this.seedKey, output: 'Base58' });

    keyPair() {
        return this.crypto.keyPair();
    }
}
