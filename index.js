const express = require("express");
const phones = require("./phones.json");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("My phone information is coming tomorrow dd");
});
app.get("/phones", (req, res) => {
  res.send(phones);
});
app.get("/phones/:id", (req, res) => {
  const id = req.params.id;
  console.log("I need data for id :", id);
});
app.listen(port, () => {
  console.log(`My phone server is running on port: ${port}`);
});
