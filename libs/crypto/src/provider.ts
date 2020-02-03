import { CryptoProvider } from './abstract';

export class CryptoProviderImpl implements CryptoProvider {
    constructor(private secret: string) {
        if (!secret || typeof secret !== 'string') {
            throw new Error('The secret argument must be not empty string!');
        }
        this.create(secret);
    }

    get secretKey() {
        return this.secret;
    }

    protected crypto: unknown;

    protected create(secret: string): unknown {
        if (!this.crypto) {
            this.crypto = { secret };
        }
        return this.crypto;
    }
}
