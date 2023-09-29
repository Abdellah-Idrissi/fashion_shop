import DeleteCartProduct from "./DeleteCartProduct";
import CartProductLink from "./CartProductLink";
import { Dispatch, SetStateAction } from "react";

type propsType = {
  product:cartItem,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function CartProduct({product : {sizes , details} , setIsOpen}: propsType) {
  return (
    <li className="flex items-center gap-x-[7px]">

    <CartProductLink details={details} setIsOpen={setIsOpen}/>

    <div className="flex flex-1 items-center justify-end gap-2 ml-2">

      <button className=" h-7 w-[42px] rounded border-gray-200 bg-gray-100/60 text-center text-sm text-gray-500 [-moz-appearance:_textfield] focus:outline-none cursor-default">
        {sizes.length}
      </button>

      <DeleteCartProduct product={details}/>

    </div>
    
  </li>
  )
}
