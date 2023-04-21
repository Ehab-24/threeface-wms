import { Product } from '../../../types';
import appAPI from '..';

export async function getProduct(id: string): Promise<Product | null> {
  try {
    return (await appAPI.get('/warehouse/product/' + id)) as Product;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return null;
  }
}

export async function getProducts(
  limit: number = 20,
  page: number = 1,
  sortField?: string,
  sortType?: string
): Promise<Product[] | null> {
  try {
    const response = (await appAPI.get('/warehouse/product', {
      params: { limit, page, sortField, sortType }
    }));
    return response.data.data as Product[];
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return null;
  }
}

export async function createProduct(
  product: Product
): Promise<Product | null> {
  try {
    const response = (await appAPI.post('/warehouse/product', product));
    return response.data.data as Product;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return null;
  }
}

export async function updateProduct(
  product: Product
): Promise<Product | null> {
  try {
    const response = (await appAPI.patch(
      '/warehouse/product/' + product._id,
      product
    ));
    return response.data.data as Product;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return null;
  }
}

export async function deleteProduct(id: string): Promise<boolean> {
  try {
    await appAPI.delete('/warehouse/product/' + id);
    return true;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return false;
  }
}

export async function deleteAllProducts(): Promise<boolean> {
  try {
    await appAPI.delete('/warehouse/product');
    return true;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return false;
  }
}
