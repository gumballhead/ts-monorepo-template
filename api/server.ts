import api from "./api";

const port = process.env.API_PORT ?? 3000;

api.listen(port, () => {
    console.log(`api started on port ${port}`);
});
