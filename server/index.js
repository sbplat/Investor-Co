const express = require("express");

const PORT = 3001;

const app = express()

app.get("/api", (req, res) => {
    res.json({message: "Hello from server API"});
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
