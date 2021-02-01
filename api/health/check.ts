import http from "http";

const port = process.env.API_PORT ?? 3000;

http.get(`http://0.0.0.0:${port}/health`, res => {
    console.log(`HEALTH CHECK STATUS: ${res.statusCode} ${res.statusMessage}`);
    process.exit(res.statusCode === 200 ? 0 : 1);
})
.on("error", err => {
    console.error(`HEALTH CHECK ERROR: ${err.message}`);
    process.exit(1);
})
.end();
