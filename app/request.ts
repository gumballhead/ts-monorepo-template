export const request = <T>(url: string): Promise<T> =>
    fetch(url).then(response => response.json());

const save = <T, R>(method: "POST" | "PUT", url: string, payload: T): Promise<R> =>
    fetch(url, {
        method,
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json());

export const put = <T, R>(url: string, payload: T): Promise<R> =>
    save("PUT", url, payload);

export const post = <T, R>(url: string, payload: T): Promise<R> =>
    save("POST", url, payload);
