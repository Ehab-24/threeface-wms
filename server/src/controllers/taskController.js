const Task = require("../models/Task");
const mongoose = require("mongoose");

/* ********** Mutations ********** */

exports.createTask = async (req, res) => {
  res.status(201).send("OK");
};

exports.updateTask = async (req, res) => {
  res.status(200).send("OK");
};

exports.deleteTask = async (req, res) => {
  res.status(200).send("OK");
};

/* ********** Query ********** */

exports.getTask = async (req, res) => {
  const pipeline = [
    {
      $match: {
        _id: new mongoose.Types.ObjectId(req.params.id),
      },
    },
  ];
  if (req.query.short === "true") {
    pipeline.push({
      $project: {
        createdAt: 0,
        comments: 0,
        assignees: 0,
      },
    });
  }

  try {
    const task = await Task.aggregate(pipeline);
    res.status(200).json(task);
  } catch (err) {
    res.sendStatus(500).json({ message: err.message });
  }
};

exports.getTasksForProject = async (req, res) => {
  const pipeline = [
    {
      $match: {
        projectId: new mongoose.Types.ObjectId(req.params.pid),
      },
    },
    {
      $project: {
        comments: 0,
      },
    },
  ];
  if (req.query.short === "true") {
    pipeline.push({
      $project: {
        comments: 0,
        assignees: 0,
        createdAt: 0,
      },
    });
  }

  try {
    const tasks = await Task.aggregate(pipeline);
    res.status(200).json(tasks);
  } catch (err) {
    res.sendStatus(500).json({ message: err.message });
  }
};

exports.getCommentsForTask = async (req, res) => {
  const pipeline = [
    {
      $match: {
        _id: new mongoose.Types.ObjectId(req.params.id),
      },
    },
    {
      $project: {
        _id: 0,
        comments: 1,
      },
    },
    {
      $unwind: {
        path: "$comments",
      },
    },
    {
      $set: {
        updatedAt: "$comments.updatedAt",
        createdAt: "$comments.createdAt",
        text: "$comments.text",
        owner: "$comments.owner",
        _id: "$comments._id",
      }
    },
    {
      $project: {
        comments: 0
      }
    }
  ];

  if (req.query.sort) {
    pipeline.push({
      $sort: {
        createdAt: req.query.sort === "asc" ? 1 : -1,
      },
    });
  }

  if (req.query.limit) {
    pipeline.push({
      $limit: parseInt(req.query.limit),
    });
  }

  try {
    const comments = await Task.aggregate(pipeline);
    res.status(200).json(comments);
  } catch (err) {
    res.sendStatus(500).json({ message: err.message });
  }
};

exports.getTaskCountForProject = async (req, res) => {
  const pipeline = [
    {
      $match: {
        projectId: new mongoose.Types.ObjectId(req.params.pid),
      },
    },
    {
      $group: {
        _id: null,
        count: { $sum: 1 },
      },
    }, 
  ];

  // switch (req.query.status) {
  //   case "completed":
  //     pipeline[0].$match.status = "completed";
  //     break;
  //   case"in progress":
  //     pipeline[0].$match.status = "in progress";
  //     break;
  //   case"todo":
  //     pipeline[0].$match.status = "todo";
  //     break;
  //   case"cancelled":
  //     pipeline[0].$match.status = "cancelled";
  //     break;
  //   case"planning":
  //     pipeline[0].$match.status = "planning";
  //     break;
  //   default:
  //     // status is not specified
  // }

  try {
    const response = await Task.aggregate(pipeline);
    res.status(200).json(response[0].count);
  } catch (err) {
    res.sendStatus(500).json({ message: err.message });
  }
};
