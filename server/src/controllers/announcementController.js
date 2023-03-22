const Announcement = require("../models/Announcement");
const mongoose = require("mongoose");

/* ********** Mutations ********** */

exports.createAnnouncement = async (req, res) => {
  const { userId, username, projectId, text } = req.body;

  if (!projectId || !text || !userId || !username) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  try {
    const announcement = await Announcement.create({
      owner: {
        uid: userId,
        name: username,
      },
      projectId,
      text,
      comments: [],
    });
    res.status(201).json(announcement);
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
}

/* ********** Query ********** */

exports.getAnnouncement = async (req, res) => {
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
      },
    });
  }

  try {
    const announcement = await Announcement.aggregate(pipeline);
    res.status(200).json(announcement);
  } catch (err) {
    res.sendStatus(500).json({ message: err.message });
  }
};

exports.getAnnouncementsForProject = async (req, res) => {
  const pipeline = [
    {
      $match: {
        projectId: new mongoose.Types.ObjectId(req.params.pid),
      },
    }
  ];
  if (req.query.short === "true") {
    pipeline.push({
      $project: {
        comments: 0,
        createdAt: 0,
      },
    });
  }

  try {
    const announcements = await Announcement.aggregate(pipeline);
    res.status(200).json(announcements);
  } catch (err) {
    res.sendStatus(500).json({ message: err.message });
  }
};

exports.getAnnouncementCountForProject = async (req, res) => {
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

  try {
    const response = await Announcement.aggregate(pipeline);
    res.status(200).json(response[0].count);
  } catch (err) {
    res.sendStatus(500).json({ message: err.message });
  }
};

exports.getCommentsForAnnouncement = async (req, res) => {
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
    const comments = await Announcement.aggregate(pipeline);
    res.status(200).json(comments);
  } catch (err) {
    res.sendStatus(500).json({ message: err.message });
  }
};
