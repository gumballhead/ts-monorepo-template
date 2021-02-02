import { Request, Response } from "express";

export interface HealthStatus {
    uptime: number;
    timestamp: number;
}

export default (_request: Request, response: Response): Response<HealthStatus> =>
    response.send({
        uptime: process.uptime(),
        timestamp: Date.now()
    });
