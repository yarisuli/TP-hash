import express from "express";
const app = express();
const port = 3000;

import hasheo from "./hasheo.js";

app.use(express.json());

app.get("/", (_, res) => {
    res.send("API is working!");
});

app.post("/hash", hasheo.hashearContra);
app.post("/compare", hasheo.compareContra);

app.listen(port, () => console.log("Running on port" + " " + port))