import moment from "moment";
import { HealthStatus } from "api/health";

export default class HealthStatusViewModel {
    public constructor(private readonly status: HealthStatus) {}

    public get started(): string {
        return moment().subtract(this.status.uptime * 1000).calendar();
    }

    public get uptime(): string {
        return moment.duration(this.status.uptime * 1000).humanize();
    }
}
