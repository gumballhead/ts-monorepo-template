import { post, put, request } from "../request";
import { Result } from "lib";

export const get = <T>(endpoint: string): Promise<Result<T>> =>
    Result.fromAsync(request(`/api/${endpoint}`));

export const create = <T, R>(endpoint: string, payload: T): Promise<Result<R>> =>
    Result.fromAsync(post(`/api/${endpoint}`, payload));

export const update = <T, R>(endpoint: string, payload: T): Promise<Result<R>> =>
    Result.fromAsync(put(`/api/${endpoint}`, payload));

export const destroy = (endpoint: string): Promise<Result<boolean>> =>
    Result.fromAsync(fetch(`/api/${endpoint}`, { method: "DELETE" })
        .then(response => response.status >= 200 && response.status < 300));
