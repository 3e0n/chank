import { CryptoProvider } from './abstract';
import { CryptoProviderImpl } from './provider';

const nowSecret = String(Date.now());
export function cryptoProviderFactory(secret?: string): CryptoProvider {
    const inst = new CryptoProviderImpl(secret || nowSecret);
    return inst;
}
