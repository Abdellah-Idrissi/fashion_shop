import { db } from "@/firebase/setup"
import { updateCart } from "@/rtk/slices/cart-slice"
import { store } from "@/rtk/store"
import { deleteDoc, doc, getDoc } from "firebase/firestore"
import updateCartInFirestore from "./updateCartInFirestore"
import isObjectEmpty from "./isObjectEmpty"
import { mergeCarts } from "./mergeCarts"

export default async function initializeUserDataMerge(userId:string,uid:string) {
  const docRef = doc(db, "users", userId)
  const docSnap = await getDoc(docRef)
  const {cart} = store.getState()

  // user does not even exist in firestore OR exist but empty
  if (!docSnap.exists() || isObjectEmpty(docSnap.data())) {
    await updateCartInFirestore(cart,userId)
    await deleteDoc(doc(db, "users", uid))
    localStorage.removeItem('uid')
  }

  // user exist in firestore but not empty
  else if (docSnap.exists()) {
    const mergedCart = mergeCarts(docSnap.data(),cart)
    await updateCartInFirestore(mergedCart,userId)
    await deleteDoc(doc(db, "users", uid))
    localStorage.removeItem('uid')
    store.dispatch(updateCart(mergedCart))
  }

}
