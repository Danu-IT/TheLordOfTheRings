import express from "express";
import router from "./router.js";

const PORT = 5000;
const app = express();

app.use("/api", router);

app.listen(PORT, () => console.log(`SERVER STARTED PORT: ${PORT}`));
