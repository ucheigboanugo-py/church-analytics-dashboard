// backend/models/Branch.js
const mongoose = require('mongoose');

const BranchSchema = new mongoose.Schema({
  name: String,
  location: String,
  // Add other relevant fields
});

module.exports = mongoose.model('Branch', BranchSchema);
