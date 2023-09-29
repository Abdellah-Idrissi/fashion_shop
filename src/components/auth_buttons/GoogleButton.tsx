"use client"
import { ImGoogle } from "react-icons/im";
import { Button } from "../ui/button";
import { useSignIn } from "@clerk/nextjs";
import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { cn } from "@/lib/utils";

export default function GoogleButton({styles}:{styles?:string}) {

  const {isLoaded ,  signIn } = useSignIn()
  const [isLoading,setIsLoading] = useState(false)

  const handleGoogleAuth = async ()=> {
    if (!isLoaded) return;
    setIsLoading(true)

    await signIn.authenticateWithRedirect({
      strategy:'oauth_google',
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    })

    setIsLoading(false)

  }

  return (
    <Button disabled={isLoading} onClick={handleGoogleAuth} variant="outline" className={cn('flex items-center gap-x-[10px] justify-center',styles)}>
      {isLoading ? <AiOutlineReload className={'text-[14px] animate-spin'}/> : <ImGoogle className={'text-[14px]'}/> }
      Continue with Google 
    </Button>
  )
}
