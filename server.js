const express = require("express");
const mysql = require("mysql2");



const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        // MySQL username,
        user: "root",
        // MySQL Password
        password: "@Springsidelane10",
        database: "election"
    },
    console.log("Connected to the election database")
);

db.query("SELECT * FROM candidates", (err, rows) => {
    console.log(rows);
});

//Catchall response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});