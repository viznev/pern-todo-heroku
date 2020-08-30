const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json()); // req.body

// ROUTES //

// CREATE a todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newTodo.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// GET all  todos

// GET a todo

// UPDATE a todo

// DELETE a todo

app.listen(5000, () => {
    console.log("Server started on port 5000.")
});