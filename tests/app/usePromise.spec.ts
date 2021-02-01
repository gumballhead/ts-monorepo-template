import "@testing-library/jest-dom/extend-expect";
import { renderHook } from "@testing-library/react-hooks";
import { usePromise } from "app/api";
import { AsyncTask } from "lib";

describe("useAsyncTask hook", () => {
    const matcher = {
        isLoading: () => "⏳",
        isSuccess: () => "😀",
        isFailure: () => "🙁"
    };

    test("useAsyncTask success", async () => {
        const promise = () => new Promise(resolve => setTimeout(resolve, 100));
        const { result, waitForNextUpdate } = renderHook(() => usePromise(promise));
        expect(AsyncTask.isLoading(result.current)).toBe(true);
        expect(result.current.when(matcher)).toBe("⏳");

        await waitForNextUpdate();
        expect(AsyncTask.isComplete(result.current)).toBe(true);
        expect(result.current.when(matcher)).toBe("😀");
    });

    test("useAsyncTask failure", async () => {
        const promise = () => new Promise((resolve, reject) => setTimeout(reject, 100));
        const { result, waitForNextUpdate } = renderHook(() => usePromise(promise));
        expect(AsyncTask.isLoading(result.current)).toBe(true);
        expect(result.current.when(matcher)).toBe("⏳");

        await waitForNextUpdate();
        expect(AsyncTask.isComplete(result.current)).toBe(true);
        expect(result.current.when(matcher)).toBe("🙁");
    });
});
