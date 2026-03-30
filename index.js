const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to SaaS Application (Node.js) 🚀");
});

// Dynamic user route
app.get("/user/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}, this is your SaaS app!`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});