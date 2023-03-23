exports.sortByCreatedAt = (req, pipeline) => {
  if (
    req.query.sort &&
    (req.query.sort === "asc" || req.query.sort === "desc")
  ) {
    pipeline.push({
      $sort: {
        createdAt: req.query.sort === "asc" ? 1 : -1,
      },
    });
  }
};

exports.pageAndLimit = (req, pipeline) => {
  // Pagination starts from 1

  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  if (page < 1 || limit < 1) {
    throw new Error("Page and limit must be greater than 0");
  }

  if (req.query.limit) {
    if (req.query.page) {
      pipeline.push({
        $skip: (page - 1) * limit,
      });
    }
    pipeline.push({
      $limit: parseInt(req.query.limit),
    });
  }
};

exports.shortProjection = (req, pipeline) => {
  if (req.query.short === "true") {
    pipeline.push({
      $project: {
        comments: 0,
        assignees: 0,
        createdAt: 0,
        ownerId: 0,
      },
    });
  }
};

exports.specificStatus = (req, pipeline) => {
  if (req.query.status) {
    pipeline[0].$match.status = req.query.status;
  }
};
