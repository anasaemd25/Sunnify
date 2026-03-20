require('dotenv').config();

const express = require("express");
const cors = require("cors");
const { sunnifyRouter } = require("./routes/sunnifyRouter.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", sunnifyRouter);

const port = process.env.BACKEND_PORT;

app.listen(port, () => {
    console.log(`Running backend on localhost:${port}`);
});
