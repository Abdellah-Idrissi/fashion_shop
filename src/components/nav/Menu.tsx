"use client";

import {
  Sheet,
  SheetContent,
  SheetOverlay,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { useState } from "react";
import SignInButton from "../auth_buttons/SignInButton";
import SignUpButton from "../auth_buttons/SignUpButton";
import SignOutButton from "../auth_buttons/SignOutButton";
import ProductsAccordion from "./ProductsAccordion";



export const localProductsArr : localProductsType = [
  {images:['firstFront.jpg','firstBack.jpg'],title:'CONTRAST PRINT SWEATSHIRT',price:49,id:7,segment:'men',styles:'col-span-4'},
  {images:['secondFront.jpg','secondBack.jpg'],title:'LONG PRINTED T-SHIRT',price:25,id:24,segment:'women',styles:'col-span-4 row-start-2'},
  {images:['thirdFront.jpg','thirdBack.jpg'],title:'CASHMERE SWEATER',price:59,id:1,segment:'men',styles:'col-span-4 row-start-3'}
]

export default function Menu() {

  const [isOpen, setIsOpen] = useState(false)

  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <button
          aria-label="menu icon"
          onClick={()=> setIsOpen(true)}
          className={
            "text-[25px] cursor-pointer ml-4 mt-[1.5px] transition text-mainColor/80 duration-200 hover:text-mainColor md:hidden"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      <SheetOverlay className="md:hidden"/>

      <SheetContent
        side={"left"}
        className="w-full md:hidden max-w-[400px] overflow-y-auto transition duration-200 scrollbar-thin scrollbar-thumb-gray-200/80 hover:scrollbar-thumb-gray-200"
      >
        <p className="text-[25px] my-3 text-center uppercase">Navigation</p>

        <ProductsAccordion setIsOpen={setIsOpen}/>

        <Link
          onClick={closeSheet}
          href={"/men"}
          className="NavHoverSm border-b border-gray-200 py-3 block hover:underline"
        >
          Men
        </Link>

        <Link
          onClick={closeSheet}
          href={"/women"}
          className="NavHoverSm border-b border-gray-200 py-3 block hover:underline"
        >
          Women
        </Link>

        <div className="flex gap-x-2 my-10">
          <SignInButton styles="w-1/2" setIsOpen={setIsOpen} />
          <SignUpButton styles="w-1/2" setIsOpen={setIsOpen} />
          <SignOutButton styles="flex-1" setIsOpen={setIsOpen} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
