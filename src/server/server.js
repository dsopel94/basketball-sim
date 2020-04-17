const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const users = require("./routes/users");
require("./config/passport")(passport);

const app = express();
const port = 4001;

app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.json()); //parse JSON bodies
app.use(passport.initialize());
app.use("/users", users);

const db = process.env.URI;

mongoose.connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
