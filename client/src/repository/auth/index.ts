import axios from 'axios';
import { useCookies } from 'vue3-cookies';

const authAPI = axios.create({
  baseURL: 'http://localhost:3000/api/auth',
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function register(email: string, password: string): Promise<any> {
  try {
    const res = await authAPI.post('/register', { email, password });
    return res.data;
  }
  catch(error: any) {
    alert(error.response.data.message);
  }
}

export async function login(email: string, password: string): Promise<boolean> {
  try {
    const res = await authAPI.post('/login', { email, password });
    useCookies().cookies.set('Authorization', `Bearer ${res.data.data.token}`);
    return true;
  } catch (error: any) {
    alert(error.response.data.message);
    return false;
  }
}

export async function sendVerificationCode(
  email: string,
  password: string
): Promise<any> {
  return await authAPI.patch('/send-code', { email, password });
}

export async function verifyCode(
  email: string,
  password: string,
  code: number
): Promise<boolean> {
  try {
    await authAPI.patch('/verify-code', { email, password, code });
    return true;
  }
  catch(error: any) {
    alert(error.response.data.message ?? error.message);
    return false;
  }
}
