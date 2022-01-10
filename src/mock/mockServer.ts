import { createServer } from "miragejs";

const makeServer = () => createServer({
    routes() {
        this.namespace = process.env.REACT_APP_BACKEND_URL as string;
        this.get("/api/routines", () => {
            return {

            }
        });

        this.post("/api/routines", () => {
            return {

            }
        });

        this.put("/api/routines/:id", () => {
            return {

            }
        });
    }
});