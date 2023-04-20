import { Request } from "express";

export function extendPipeline(pipeline, req: Request): unknown {
  const sortField = req.query.sort;
  const sortType = req.query.sortType;
  const skip = req.query.skip;
  const limit = req.query.limit;

  if (sortField) {
    pipeline.push({
      $sort: {
        sortField: sortType === 'DESC' ? -1 : 1
      }
    });
  }
  if (skip) {
    pipeline.push({
      $skip: skip
    });
  }
  if (limit) {
    pipeline.push({
      $limit: limit
    });
  }
  return pipeline;
}