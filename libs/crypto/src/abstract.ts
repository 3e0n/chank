import { TKeyPair } from './vendor-crypto-type-only';

export abstract class CryptoProvider {
    abstract keyPair(): TKeyPair;
}
