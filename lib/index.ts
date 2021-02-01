export type UnaryOperator<T, R> = (item: T) => R;
export type Callback<T> = UnaryOperator<T, void>;
export type BinaryOperator<T, U, R> = (first: T, second: U) => R;
export type Accumulator<T, R> = BinaryOperator<R, T, R>;
export type Nullable<T> = T | null;

export { default as AsyncTask } from "./AsyncTask";
export { default as Result } from "./Result";
