import { db } from "@/firebase/setup"
import { updateCart } from "@/rtk/slices/cart-slice"
import { store } from "@/rtk/store"
import { doc, getDoc } from "firebase/firestore"

export default async function initializeUserData(userId:string) {
  const docRef = doc(db, "users", userId)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    store.dispatch(updateCart(docSnap.data()))
  } 
}
