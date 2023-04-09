import type { Invoice } from "../../types";
import { getAuth, User } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  QuerySnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from ".";

export async function createInvoice(invoice: Invoice): Promise<Invoice> {
  try {
    const user: User | null = getAuth().currentUser;
    const docRef: DocumentData = await addDoc(
      collection(db, "vendors", user!.uid, "invoices"),
      invoice
    );
    return (invoice._id = docRef.id);
  } catch (error: any) {
    // ! dev only
    console.error("Error creating invoice: ", error);

    throw new Error(error.message);
  }
}

export async function deleteInvoice(id: string): Promise<void> {
  try {
    const user: User | null = getAuth().currentUser;
    await deleteDoc(doc(db, "vendors", user!.uid, "invoices", id));
  } catch (error: any) {
    // ! dev only
    console.error("Error deleting invoice: ", error);

    throw new Error(error.message);
  }
}

export async function updateInvoice(invoice: Invoice): Promise<void> {
  try {
    if (!invoice._id) {
      throw new Error("Invoice ID is undefined");
    }
    const user: User | null = getAuth().currentUser;
    await setDoc(
      doc(db, "vendors", user!.uid, "invoices", invoice._id!),
      invoice
    );
  } catch (error: any) {
    // ! dev only
    console.error("Error updating invoice: ", error);

    throw new Error(error.message);
  }
}

export async function getInvoices(vendorId: string): Promise<Invoice[]> {
    try {
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
            collection(db, "vendors", vendorId, "invoices")
        );
        const invoices: Invoice[] = [];
        querySnapshot.forEach((doc) => {
            invoices.push(doc.data() as Invoice);
        });
        return invoices;
    }
    catch (error: any) {
        // ! dev only
        console.error("Error updating invoice: ", error);
    
        throw new Error(error.message);
    }
}