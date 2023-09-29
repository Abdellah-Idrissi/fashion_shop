import { db } from "@/firebase/setup";
import { doc, setDoc } from "firebase/firestore";

export default async function updateCartInFirestore(cart:cartType,userId:string) {
  await setDoc(doc(db, "users", userId),cart)
}
