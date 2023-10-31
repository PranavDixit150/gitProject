const express = require("express");

const app = express();
app.post("/", (req,res) => {
  console.log("hey this is git hub.");
});

app.listen(2004, () => {
  console.log("server is running on 2004");
});
