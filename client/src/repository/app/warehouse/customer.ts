import { Customer } from "../../../types";
import appAPI from "..";

export async function getCustomer(id: string): Promise<Customer | null> {
    try {
        return await appAPI.get('/warehouse/customer/' + id) as Customer;
    }
    catch(error: any) {
        alert(error.response.data?.message ?? error.message);
        return null;
    }
}

export async function getAll(): Promise<Customer[] | null> {
    try {
        const {data} = await appAPI.get('/warehouse/customer');
        return data.data as Customer[];
    }
    catch (error: any) {
        alert(error.response.data?.message ?? error.message);
        return null;
    }
}

export async function createCustomer(customer: Customer): Promise<Customer | null> {
    try {
        const {data} = await appAPI.post('/warehouse/customer', customer);
        return data.data as Customer;
    }
    catch (error: any) {
        alert(error.response.data?.message ?? error.message);
        return null;
    }
}

export async function updateCustomer(customer: Customer): Promise<Customer | null> {
    try {
        const {data} = await appAPI.patch('/warehouse/customer/' + customer._id, customer);
        return data.data as Customer;
    }
    catch (error: any) {
        alert(error.response.data?.message ?? error.message);
        return null;
    }
}

export async function deleteCustomer(id:string): Promise<boolean> {
    try {
        await appAPI.delete('/warehouse/customer/' + id);
        return true;
    }
    catch (error: any) {
        alert(error.response.data?.message ?? error.message);
        return false;
    }
}

export async function deleteAllCustomers(): Promise<boolean> {
    try {
        await appAPI.delete('/warehouse/customer');
        return true;
    }
    catch (error: any) {
        alert(error.response.data?.message ?? error.message);
        return false;
    }
}