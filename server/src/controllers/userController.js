const User = require("../models/User");
const Project = require("../models/Project");

// TODO: Remove this end point
exports.getAllUsers = async (_, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.sendStatus(400);
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  }
  catch (err) {
    res.status(400);
  }
};

exports.getAllProjectsForUser = async (req, res) => {
  try {
    const projects = await Project.find({ ownerId: req.params.id });
    res.status(200).json(projects);
  }
  catch (err) {
    res.status(400);
  }
}

