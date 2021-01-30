import express from "express";

const api = express();

api.get("/health", (_request, response) => response.send({
    uptime: process.uptime(),
    timestamp: Date.now()
}));

export default api;
