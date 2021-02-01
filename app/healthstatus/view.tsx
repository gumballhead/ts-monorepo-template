import React from "react";
import { useAsyncTask } from "../api";
import getHealthStatus from "./request";
import HealthStatusViewModel from "./viewmodel";
import "../assets/healthstatus.css";

const Loading = (): JSX.Element =>
    <div className="loading">Loading...</div>;

const ApiStatus = (status: HealthStatusViewModel): JSX.Element => <>
    <h2 className="status">The api is <span className="success">UP</span></h2>

    <div className="started">
        <span className="label">Started:</span>
        <span className="value">{status.started}</span>
    </div>

    <div className="uptime">
        <span className="label">Uptime:</span>
        <span className="value">{status.uptime}</span>
    </div>
</>;

const Failure = (): JSX.Element =>
    <h2 className="status">The api is <span className="failure">DOWN</span></h2>;

const HealthStatusView = (): JSX.Element =>
    <div className="api-health">{
        useAsyncTask(getHealthStatus).when({
            isLoading: Loading,
            isSuccess: ApiStatus,
            isFailure: Failure
        })
    }</div>;

export default HealthStatusView;
