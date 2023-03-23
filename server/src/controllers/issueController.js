const Issue = require("../models/Issue");
const mongoose = require("mongoose");
const helpers = require("./helpers");

/* ********** Mutations ********** */

exports.createIssue = async (req, res) => {
  const { userId, username, projectId, title, description, assignees } = req.body;

  if (!projectId || !title || !userId || !username) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  try {
    const issue = await Issue.create({
      owner: {
        uid: userId,
        name: username,
      },
      projectId,
      title,
      description,
      assignees: assignees ?? [],
      comments: [],
    });
    res.status(201).json(issue);
  }
  catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).json({ message: err.message });
      return;
    }
    res.status(500).json({ message: err.message });
  }
}

/* ********** Query ********** */

exports.getIssuesForProject = async (req, res) => {
  // * set short to true to get a short version of the issues

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

  try {
    helpers.specificStatus(req, pipeline);
    helpers.sortByCreatedAt(req, pipeline);
    helpers.shortProjection(req, pipeline);
    helpers.pageAndLimit(req, pipeline);

    const issues = await Issue.aggregate(pipeline);
    res.status(200).json(issues);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getIssueCountForProject = async (req, res) => {
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

  if (req.query.status) {
    pipeline[0].$match.status = req.query.status;
  }

  try {
    const response = await Issue.aggregate(pipeline);
    res.status(200).json(response[0].count);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getIssue = async (req, res) => {
  // * set 'short' to true to get a short version of the issue

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
        comments: 0,
        assignees: 0,
        createdAt: 0,
      },
    });
  }

  try {
    const issue = await Issue.aggregate(pipeline);
    res.status(200).json(issue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCommentsForIssue = async (req, res) => {
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

  
  try {
    helpers.sortByCreatedAt(req, pipeline);
    helpers.pageAndLimit(req, pipeline);

    const comments = await Issue.aggregate(pipeline);
    res.status(200).send(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
