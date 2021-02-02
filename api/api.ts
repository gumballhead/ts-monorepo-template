import express from "express";
import { getHealth } from "./health";

const api = express();

api.get("/health", getHealth);

export default api;
