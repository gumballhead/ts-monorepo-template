import { useEffect, useState } from "react";
import { AsyncTask, Result } from "lib";

export function useAsyncTask<T>(request: (...args: unknown[]) => Promise<T>, ...args: unknown[]): AsyncTask<T> {
    const [model, update] = useState<AsyncTask<T>>(new AsyncTask.Loading());

    useEffect(() => {
        (async function() {
            const result = await Result.fromAsync(request(...args));
            update(new AsyncTask.Complete(result));
        })();
    }, [request, ...args]);

    return model;
}
