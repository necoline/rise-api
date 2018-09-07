const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentModel = new Schema({
  studentId: { type: String, required: true, index: { unique: true } },
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
  preferredName: { type: String, required: false },
  dob: { type: String, required: true },
  guardianFirstName: { type: String, required: false },
  guardianLastName: { type: String, required: false },
});

module.exports = mongoose.model('Student', studentModel, 'students'); 