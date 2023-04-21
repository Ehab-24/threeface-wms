import appAPI from "..";
import { Warehouse } from "../../..//types";


export async function createWarehouse(warehouse: Warehouse): Promise<Warehouse | null> {
    try {
        const response = await appAPI.post('/warehouse', warehouse) as { data: Warehouse };
        return response.data;
    }
    catch (error: any) {
        alert(error.response.data?.message ?? error.message);
        return null;
    }
}

export async function getWarehouse(): Promise<Warehouse | null> {
    try {
        return await appAPI('/warehouse') as Warehouse;
    }
    catch(error: any) {
        alert(error.response.data?.message ?? error.message);
        return null;
    }
}

export async function updateWarehouse(warehouse: Warehouse): Promise<Warehouse | null> {
    try {
        const response = await appAPI.patch('/warehouse', warehouse) as { data: Warehouse };
        return response.data;
    }
    catch (error: any) {
        alert(error.response.data?.message ?? error.message);
        return null;
    }
}

export async function deleteWarehouse(): Promise<boolean> {
    try {
        await appAPI.delete('/warehouse');
        return true;
    }
    catch (error: any) {
        alert(error.response.data?.message ?? error.message);
        return false;
    }
}
