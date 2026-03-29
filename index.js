import "./src/config/env.js";
import express from "express";
import gameRoute from "./src/routes/gameRoute.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/games", gameRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});