const express = require("express");
const app = express();
const path = require("path");

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log("Se prendio");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});

app.use(express.static(path.join(__dirname, "public")));
