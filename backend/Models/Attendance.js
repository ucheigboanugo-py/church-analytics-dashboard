// backend/models/Attendance.js
const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  branch: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch' },
  date: Date,
  count: Number,
  // Add other relevant fields
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
