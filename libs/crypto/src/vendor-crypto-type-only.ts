// eslint-disable-next-line prettier/prettier
import type { crypto, TKeyPair, TPublicKey, TPrivateKey, TRSAKeyPair } from '@waves/ts-lib-crypto';
import { inferTypes } from '@libs/utils';

export type WavesCryptoCreator = typeof crypto;

export type WavesCrypto = inferTypes.GetReturnType<typeof crypto>;

export {
    TKeyPair, TPublicKey, TPrivateKey, TRSAKeyPair
}
