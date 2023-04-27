const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  first_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Student", studentSchema);

// const Student = model("Student", studentSchema);

// module.exports = Student;
