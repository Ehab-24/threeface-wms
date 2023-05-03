import { Supplier } from '../../../types';
import appAPI from '..';

export async function getSupplier(id: string): Promise<Supplier | null> {
  try {
    return (await appAPI.get('/warehouse/supplier/' + id)) as Supplier;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return null;
  }
}

export async function getAll(
  limit: number,
  page: number
): Promise<Supplier[] | null> {
  try {
    const { data } = await appAPI.get('/warehouse/supplier', {
      params: { limit: limit, page: page }
    });
    return data.data as Supplier[];
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return null;
  }
}

export async function createSupplier(
  supplier: Supplier
): Promise<Supplier | null> {
  try {
    const { data } = await appAPI.post('/warehouse/supplier', supplier);
    return data.data as Supplier;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return null;
  }
}

export async function updateSupplier(
  supplier: Supplier
): Promise<Supplier | null> {
  try {
    const { data } = await appAPI.patch(
      '/warehouse/supplier/' + supplier._id,
      supplier
    );
    return data.data as Supplier;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return null;
  }
}

export async function deleteSupplier(id: string): Promise<boolean> {
  try {
    await appAPI.delete('/warehouse/supplier/' + id);
    return true;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return false;
  }
}

export async function deleteAllSuppliers(): Promise<boolean> {
  try {
    await appAPI.delete('/warehouse/supplier');
    return true;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return false;
  }
}
