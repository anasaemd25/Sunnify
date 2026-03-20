const express = require('express');
const path = require('path');

const app = express();
const port = 5000;
const client = path.join(__dirname, "..", "client");

app.use(express.static(client));

app.get("/", (req, res) => {
    res.sendFile(path.join(client, "main.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(client, "register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(client, "login.html"));
});

app.get("/post/create", (req, res) => {
    res.sendFile(path.join(client, "createpost.html"));
});

app.listen(port, () => {
    console.log(`Running frontend on localhost:${port}`);
})