import { HealthStatus } from "api/health";
import { get } from "../api";
import HealthStatusViewModel from "./viewmodel";

export default (): Promise<HealthStatusViewModel> =>
    get<HealthStatus>("health").then(status => new HealthStatusViewModel(status.get()));
