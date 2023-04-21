import { User } from '@/types';
import { useCookies } from 'vue3-cookies';
import appAPI from '.';

export async function updateUser(
  user: User & Omit<User, 'isVerified' | 'email'>
): Promise<User | null> {
  try {
    return await appAPI.patch('/user', user);
  } catch (error) {
    return null;
  }
}

export async function deleteeUser(): Promise<boolean> {
  try {
    await appAPI.delete('/user');
    return true;
  } catch (error) {
    return false;
  }
}

export async function getUser(): Promise<User | null> {
  try {
    const res = await appAPI.get('/user');
    return res.data as User;
  } catch (error) {
    useCookies().cookies.remove('Authorization');
    return null;
  }
}
