import { crypto } from '@waves/ts-lib-crypto';
import { CryptoProvider, WavesCrypto } from './abstract';

export class CryptoProviderImpl implements CryptoProvider {
    constructor(private seedKey: string) {
        if (!seedKey || typeof seedKey !== 'string') {
            throw new Error('The seedKey argument must be not empty string!');
        }
        this.create(seedKey);
    }

    newCrypto() {
        return crypto();
    }

    protected crypto!: WavesCrypto;

    protected create(secret: string) {
        if (!this.crypto) {
            this.crypto = crypto({ seed: secret });
        }
        return this.crypto;
    }
}
