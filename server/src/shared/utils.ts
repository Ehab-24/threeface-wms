import { Request } from 'express';
import { Customer, Invitation, Invoice, PageInfo, Product } from '../types';

export function extendPipeline(
  pipeline,
  req: Request
): { limit: number; page: number } {
  const sortField: string = req.query.sort as string;
  const sortType: string = req.query.sortType as string;
  let page: number = Number(req.query.page) ?? 1;
  let limit: number = Number(req.query.limit) ?? 20;

  if (page < 1) {
    page = 1;
  }
  if (limit < 1) {
    limit = 1;
  }

  if (sortField) {
    pipeline.push({
      $sort: {
        sortField: sortType === 'DESC' ? -1 : 1
      }
    });
  }
  pipeline.push({
    $skip: page * limit - limit
  });
  pipeline.push({
    $limit: limit + 1
  });

  return { limit, page };
}

export function getPageInfo(
  response: Customer[] | Product[] | Invoice[] | Invitation[],
  page: number,
  limit: number
): PageInfo {
  if (response.length > limit) {
    response.pop();
  }
  return {
    hasNextPage: response.length > limit,
    hasPreviousPage: page > 1,
    nextPage: page + 1,
    previousPage: page - 1,
    cursor: page * limit
  };
}
