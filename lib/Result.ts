/* eslint node/handle-callback-err: 0 */
import type { UnaryOperator } from "./index";

interface IResult<T> {
    get(): T;
    when<R>(matcher: Result.Matcher<T, R>): R;
    map<R>(operator: UnaryOperator<T, R>): Result<R>;
    flatMap<R>(operator: UnaryOperator<T, Result<R>>): Result<R>;
}

namespace Result {
    export enum Type {
        Success = "Success",
        Failure = "Failure"
    }

    export interface Matcher<T, R> {
        isSuccess(data: T): R;
        isFailure(error: Error): R;
    }

    export class Success<T> implements IResult<T> {
        public type = Type.Success;
        public constructor(private readonly data: T) {}
        public get = (): T => this.data;
        public when = <R>(matcher: Matcher<T, R>): R => matcher.isSuccess(this.data);
        public map = <R>(operator: UnaryOperator<T, R>): Result<R> => Result.from(() => operator(this.data));
        public flatMap = <R>(operator: UnaryOperator<T, Result<R>>): Result<R> => operator(this.data);
    }

    export class Failure<T> implements IResult<T> {
        public type = Type.Failure;
        public constructor(private readonly error: Error) {}
        public get = (): T => { throw this.error; }
        public when = <R>(matcher: Matcher<T, R>): R => matcher.isFailure(this.error);
        public map = <R>(_operator: UnaryOperator<T, R>): Result<R> => new Failure<R>(this.error);
        public flatMap = <R>(_operator: UnaryOperator<T, Result<R>>): Result<R> => new Failure<R>(this.error);
    }

    export const isSuccess = <T>(result: Result<T>): result is Success<T> =>
        result.type === Type.Success;

    export const isFailure = <T>(result: Result<T>): result is Failure<T> =>
        result.type === Type.Failure;

    export function from<T>(op: () => T): Result<T> {
        try {
            return new Success(op());
        } catch (error) {
            return new Failure(error);
        }
    }

    export const fromAsync = <T>(promise: Promise<T>): Promise<Result<T>> =>
        promise.then(data => new Result.Success(data), reason => new Result.Failure(Error(reason)));
}

type Result<T> = Result.Success<T> | Result.Failure<T>;

export default Result;
