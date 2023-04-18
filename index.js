require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const userInfoRoute = require('./routes/v1/public/index');

// APPLICATION MIDDLEWARE //
app.use(express.json());
app.use(express.static("public"));

// APPLICATION ROUTES //
app.get("/", (req, res) => res.status(200).send("WELCOME TO THE USER INFO WORLD!"));

app.use('/api/v1/user', userInfoRoute);


app.all("*", (req, res) => {
  res.send("NO ROUTE FOUND.");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});