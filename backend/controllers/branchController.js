// backend/controllers/branchController.js
const Branch = require('../models/Branch');

exports.getBranches = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.json(branches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBranch = async (req, res) => {
  const branch = new Branch(req.body);
  try {
    const newBranch = await branch.save();
    res.status(201).json(newBranch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
