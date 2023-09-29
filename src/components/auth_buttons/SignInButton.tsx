"use client"

import { cn } from "@/lib/utils";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";

type propsTypes = {
  styles?:string,
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SignInButton({styles,setIsOpen}:propsTypes) {

  return (
    <SignedOut>
      <Link
        onClick={()=> setIsOpen && setIsOpen(false)}
        className={cn('blackBtn',styles)}
        href="/sign-in"
      >
        Sign In
      </Link>
    </SignedOut>
  )

}
