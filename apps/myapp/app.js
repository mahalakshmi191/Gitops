const express = require("express");
const app = express();

app.get("/", (req,res)=> res.send("GitOps Working"));

app.listen(3000);
