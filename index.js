require("dotenv").config();
require("./db");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Student = require("./models/student");

const port = process.env.PORT || 3000;

// const mongoDB = 'mongodb://127.0.0.1:27017/my_database';
// const mongoDB = 'mongodb+srv://<username>:<password>@sandbox.apxur.mongodb.net/test';
const mongoDB = process.env.MONGODBURI;
// console.log(mongoDB);
mongoose.connect(mongoDB);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// CREATE - Using .create() over the Schema that we have declared in the models folder

app.post("/students", (req, res) =>
  Student.create({
    name: "Rid",
    first_name: "Vek",
    email: "rid@vek.com",
  })
    .then((newStudents) => {
      res.send(newStudents);
    })
    .catch((err) => res.send(err))
);

app.get("/", (req, res) =>
  Student.find({})
    .then((models) => {
      res.send(models);
    })
    .catch((err) => {
      res.send(err);
    })
);

// Only One find
app.get("/single", (req, res) =>
  Student.find({ name: "Jenny" })
    .then((models) => {
      res.send(models);
    })
    .catch((err) => {
      res.send(err);
    })
);

// UPDATE - updateMany()
app.put("/", (req, res) =>
  Student.updateMany({ name: "John" }, { $set: { name: "Bob" } }).then(
    function (newStudents) {
      res.send(newStudents);
    }
  )
);

// DELETE - .deleteOne()
app.delete("/:id", (req, res) =>
  Student.deleteOne({ _id: req.params.id }).then(function () {
    res.end();
  })
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
