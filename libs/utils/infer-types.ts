/**
 * @see https://dev.to/miracleblue/how-2-typescript-serious-business-with-typescripts-infer-keyword-40i5
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GetReturnType<original extends Function> = original extends (...x: any[]) => infer returnType
    ? returnType
    : never;
/**
 * @see https://dev.to/miracleblue/how-2-typescript-serious-business-with-typescripts-infer-keyword-40i5
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GetArgumentType<original extends Function> = original extends (...x: infer argumentsType) => any
    ? argumentsType
    : never;
