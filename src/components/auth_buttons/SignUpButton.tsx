"use client"

import { cn } from "@/lib/utils";
import { SignedOut, useUser } from "@clerk/nextjs";
import Link from "next/link";

type propsTypes = {
  styles?:string,
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SignUpButton({styles,setIsOpen}:propsTypes) {


  return (
    <SignedOut>
      <Link
        onClick={()=> setIsOpen && setIsOpen(false)}
        className={cn('grayBtn',styles)}
        href="/sign-up"
      >
        Sign Up
      </Link>
    </SignedOut>
  )
}