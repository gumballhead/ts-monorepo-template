import { HealthStatus } from "api/health";
import { get } from "../api";
import HealthStatusViewModel from "./viewmodel";
import type { Result } from "lib";

export default (): Promise<Result<HealthStatusViewModel>> =>
    get<HealthStatus>("health").then(result =>
        result.map(status => new HealthStatusViewModel(status)));
