const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODBURI).catch((err) => {
  console.log(err);
});

// const db = mongoose.connection;
// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
