import { Invitation } from '../../../types';
import appAPI from '..';

export async function getSentInvitations(
  limit: number = 20,
  page: number = 1,
  sortField?: string,
  sortType?: string
): Promise<Invitation[] | null> {
  try {
    const response = (await appAPI.get('/warehouse/invitation/sent', {
      params: { limit, page, sortField, sortType }
    })) as { data: Invitation[] };
    return response.data;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return null;
  }
}

export async function getReceivedInvitations(
  limit: number = 20,
  page: number = 1,
  sortField?: string,
  sortType?: string
): Promise<Invitation[] | null> {
  try {
    const response = (await appAPI.get('/warehouse/invitation/received', {
      params: { limit, page, sortField, sortType }
    })) as { data: Invitation[] };
    return response.data;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return null;
  }
}

export async function sendInvitation(
  invitation: Invitation
): Promise<Invitation | null> {
  try {
    const response = (await appAPI.post(
      '/warehouse/invitation',
      invitation
    )) as {
      data: Invitation;
    };
    return response.data;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return null;
  }
}

export async function updateInvitation(
  status: 'read' | 'accepted' | 'rejected'
): Promise<Invitation | null> {
  try {
    const response = (await appAPI.patch(
      '/warehouse/invitation/' + status
    )) as {
      data: Invitation;
    };
    return response.data;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return null;
  }
}

export async function deleteInvitation(id: string): Promise<boolean> {
  try {
    await appAPI.delete('/warehouse/invitation/' + id);
    return true;
  } catch (error: any) {
    alert(error.response.data?.message ?? error.message);
    return false;
  }
}
