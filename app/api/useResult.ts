import { useEffect, useState } from "react";
import { AsyncTask, Result } from "lib";

type Args = unknown[];
type Request<T, A extends Args> = (...args: A) => Promise<T>;

export function useResult<T, A extends Args>(request: Request<Result<T>, A>, ...args: A): AsyncTask<T> {
    const [model, update] = useState<AsyncTask<T>>(new AsyncTask.Loading());

    useEffect(() => {
        (async function() {
            const result = await request(...args);
            update(new AsyncTask.Complete(result));
        })();
    }, [request, ...args]);

    return model;
}

export function usePromise<T, A extends Args>(request: Request<T, A>, ...args: A): AsyncTask<T> {
    const [model, update] = useState<AsyncTask<T>>(new AsyncTask.Loading());

    useEffect(() => {
        (async function() {
            const result = await Result.fromAsync(request(...args));
            update(new AsyncTask.Complete(result));
        })();
    }, [request, ...args]);

    return model;
}
