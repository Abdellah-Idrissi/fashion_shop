"use client"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiOutlineShoppingBag } from "react-icons/hi2"
import Link from "next/link";
import { useAppSelector } from "@/rtk/hooks";
import CartProduct from "./CartProduct";
import {  TbShoppingCartX } from "react-icons/tb";
import { useState } from "react";

export default function Cart() {
  const cart = useAppSelector(state=> state.cart)
  const cartArr = Object.values(cart)
  const [isOpen,setIsOpen] = useState(false)


  return (

    <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="relative cursor-pointer"  onClick={()=> setIsOpen(true)}>
          <HiOutlineShoppingBag  className={'text-[20px] transition  text-mainColor/80 duration-200 hover:text-mainColor'}/>
          {
            cartArr.length === 0 ? 
            "": 
            <div className="bg-mainColor text-white w-[16px] h-[16px] absolute grid place-items-center leading-none text-[11px] rounded-full top-[-9px] right-[-10px]">{cartArr.length}</div>
          }
        </div>

      <SheetOverlay/>

      <SheetContent className="w-full max-w-[400px] flex flex-col">

        <p className="text-[25px] mt-3 text-center uppercase">SHOP CART</p>
        <div className="relative flex-1 w-full h-full pt-2 pb-5 pb overflow-y-hidden"
          aria-modal="true"
        >


          <div className="mt-5 space-y-6 flex flex-col justify-between h-full">

            <ul className="space-y-4  pr-[15px] transition duration-200 overflow-y-auto scrollbar-thin scrollbar-thumb-mainColor hover:scrollbar-thumb-mainColor/90">
              {
                cartArr.length === 0 ? 
                <div className=" text-center mt-7 ">
                  <TbShoppingCartX className={'text-[80px] font-light mx-auto text-[#0000001a]'}/>
                  <p className="capitalize mt-2 text-[#0000004d]">no items in cart</p>
                </div> : 
                (cartArr.map((product,i)=> (<CartProduct key={i} product={product} setIsOpen={setIsOpen}/>)))
              }
            </ul>

            <div className="space-y-4 text-center ">

            <SheetClose asChild>
              <Link
                href="/checkout"
                className="blackBtn block"
              >
                Checkout
              </Link>
            </SheetClose>

              <SheetClose asChild>
                <div
                  className="inline-block text-sm NavHover underline underline-offset-4 cursor-pointer"
                >
                  Continue shopping
                </div>
              </SheetClose>
            </div>

          </div>

        </div>

      </SheetContent>


    </Sheet>
  )
}
