import { crypto } from '@waves/ts-lib-crypto';
import { inferTypes } from '@libs/utils';

export type WavesCrypto = inferTypes.GetReturnType<typeof crypto>;

export abstract class CryptoProvider {
    abstract newCrypto(): WavesCrypto;
}
