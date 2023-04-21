import { Invoice } from '../../../types';
import appAPI from '..';

export async function getInvoice(id: string): Promise<Invoice | null> {
  try {
    return (await appAPI.get('/warehouse/invoice/' + id)) as Invoice;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return null;
  }
}

export async function getInvoices(
  limit: number = 20,
  page: number = 1,
  sortField?: string,
  sortType?: string
): Promise<Invoice[] | null> {
  try {
    const {data} = await appAPI.get('/warehouse/invoice', {
      params: { limit, page, sortField, sortType }
    });
    return data.data as Invoice[];
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return null;
  }
}

export async function createInvoice(invoice: Invoice): Promise<Invoice | null> {
  try {
    const {data} = (await appAPI.post('/warehouse/invoice', invoice));
    return data.data as Invoice;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return null;
  }
}

export async function updateInvoice(invoice: Invoice): Promise<Invoice | null> {
  try {
    const response = (await appAPI.patch(
      '/warehouse/invoice/' + invoice._id,
      invoice
    ));
    return response.data.data as Invoice;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return null;
  }
}

export async function deleteInvoice(id: string): Promise<boolean> {
  try {
    await appAPI.delete('/warehouse/invoice/' + id);
    return true;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return false;
  }
}

export async function deleteAllInvoices(): Promise<boolean> {
  try {
    await appAPI.delete('/warehouse/invoice');
    return true;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return false;
  }
}
