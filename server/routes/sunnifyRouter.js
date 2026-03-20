const express = require("express");
const { query } = require("../helpers/db.js");

const sunnifyRouter = express.Router();

sunnifyRouter.get("/register", async (req, res) => {
    res.status(200).json({ message: "OK" });
})

sunnifyRouter.post("/register", async (req, res) => {
    try {
        // Check if user already exists
        let result = await query("SELECT * FROM users");
        let rows = result.rows ? result.rows : [];

        if (rows.some(row => row.username === req.body.username)) {
            res.status(409).json({ error: "Username already exists!" });
            return;
        }
        else if (rows.some(row => row.email === req.body.email)) {
            res.status(409).json({ error: "Email already in use!" });
            return;
        }

        // Validation of username and email
        // TODO

        // Create new user in database
        result = await query("INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id",
            [
                req.body.username,
                req.body.email,
                req.body.pwHash
            ]);
        res.status(200).json({ id: result.rows[0].id });
    } catch (error) {
        errorResponse(res, error);
    }
});

//sunnifyRouter.get("/", async (req, res) => {
//    try {
//        const result = await query("SELECT * FROM task");
//        const rows = result.rows ? result.rows : [];
//        res.status(200).json(rows);
//    } catch (error) {
//        errorResponse(res, error);
//    }
//});

//sunnifyRouter.post("/new", async (req, res) => {
//    try {
//        const result = await query("INSERT INTO task (description) VALUES ($1) RETURNING *",
//            [req.body.description]);
//        res.status(200).json({ id: result.rows[0].id });
//    } catch (error) {
//        errorResponse(res, error);
//    }
//});

//sunnifyRouter.delete("/delete/:id", async (req, res) => {
//    const id = parseInt(req.params.id);

//    try {
//        const result = await query("DELETE FROM task WHERE id = $1", [id]);
//        res.status(200).json({ id: id });
//    } catch (error) {
//        errorResponse(res, error);
//    }
//})

const errorResponse = (res, error) => {
    console.log(error);
    res.statusMessage = error;
    res.status(500).json({ error: error });
}

module.exports = { sunnifyRouter };
