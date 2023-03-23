const Project = require("../models/Project");
const mongoose = require("mongoose");

/* ********** Mutations ********** */

exports.createProject = async (req, res) => {
  const { userId, title, description, dueAt, assignees } = req.body;

  if(!userId || !title || !dueAt) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  try {
    const project = await Project.create({
      ownerId: userId,
      title,
      description,
      dueAt,
      assignees,
    });
    res.status(201).json(project);
  }
  catch (err) {

    if (err) {
      if (err.name === "ValidationError") {
        res.status(400).json({ message: err.message });
        return;
      }
      else {
        res.status(500).json({ message: err.message });
        return;
      }
    }

    res.sendStatus(500);
  }
};

exports.updateProject = async (req, res) => {
  res.status(200).send("Updated");
};

exports.deleteProject = async (req, res) => {
  res.status(200).send("Deleted");
};

/* ********** Query ********** */

exports.getProject = async (req, res) => {
  try {
    const id = req.params.id;
    const project =
      req.query.short === "true"
        ? await Project.findById(id).select("title description updatedAt")
        : await Project.findById(id);
    res.status(200).json(project);
  } catch (err) {
    res.sendStatus(400);
  }
};

exports.getProjectsForUser = async (req, res) => {
  const pipeline = [
    {
      $unwind: "$assignees",
    },
    {
      $match: {
        "assignees.uid": new mongoose.Types.ObjectId(req.params.uid),
      },
    },
  ];

  if (req.query.limit) {
    pipeline.push({
      $limit: parseInt(req.query.limit),
    });
  }

  if (req.query.short === "true") {
    pipeline.push({
      $project: {
        ownerId: false,
        assignees: false,
        createdAt: false,
      },
    });
  }

  try {
    const projects = await Project.aggregate(pipeline);
    res.status(200).json(projects);
  } catch (err) {
    res.sendStatus(500).json({ message: err.message });
  }
};
