import axios from "axios";

describe("health check endpoint", () => {
    it("should respond with a status report", async () => {
        const response = await axios.get("/health");
        expect(response.status).toBe(200);
        expect(response.data.uptime).toBeGreaterThan(0);
        expect(response.data.timestamp).toBeGreaterThan(0);
    });
});
