import HealthStatusViewModel from "app/healthstatus/viewmodel";

test("format api uptime", () => {
    const status = {
        uptime: 123.45,
        timestamp: new Date().getTime() - 123.45
    };

    const model = new HealthStatusViewModel(status);
    expect(model.started).toMatch("Today");
    expect(model.uptime).toBe("2 minutes");
});
