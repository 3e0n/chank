import { CryptoProvider } from './abstract';
import { CryptoProviderImpl } from './provider';

export function cryptoProviderFactory(secret: string): CryptoProvider {
    const inst = new CryptoProviderImpl(secret);
    return inst;
}
