"use client"

import { useSignUp } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react"
import { toast } from "sonner";

export default function VerifyEmail() {
  const codeRef = useRef<HTMLInputElement>(null)
  const [verifyCodeLoading, setVerifyCodeLoading] = useState(false);
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  
  const handleVerifyEmail = async (e:FormEvent)=> {
    e.preventDefault();
    setVerifyCodeLoading(true)
    if (!isLoaded) return;
    const code = codeRef.current?.value.trim() as string


    // START OF VERIFICATION EMAIL 

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId })
        router.push("/")
        toast.success('You signed up successfully')
      }
      else {
        console.log(JSON.stringify(completeSignUp, null, 2))
        toast.error('Something wrong occured')
      }

      setVerifyCodeLoading(false)

    } 
    catch (error: any) {
      setVerifyCodeLoading(false)
      toast.error(error.errors[0].longMessage)
    }

  }


  return (
    <div className="mmd:w-[80%] authFormStyle">
      
      <div className="text-center mb-5">
        <h3 className="text-[30px] uppercase leading-none mb-[6px]">Verify Email</h3>
        <p className="font-light text-gray-500 ">Check your email address for the code</p>
      </div>

      <form className="flex flex-col gap-y-2">
        <div>
        <label htmlFor="code" className="labelStyle">Code</label>
        <input
          id="code"
          type="text"
          placeholder="enter the verification code"
          ref={codeRef}
          className="inputStyle"
        />
        </div>

        <button
          onClick={handleVerifyEmail}
          className="blackBtn mt-2"
          disabled={verifyCodeLoading}
        >
          {verifyCodeLoading ? 'Verifying' : 'Verify'}
        </button>
      </form>

      <p className="text-gray-600 mt-[18px] text-[14px] font-light">
        Already have an Account <span className="font-sans text-[12px] font-semibold">?</span> 
        <Link href={'/sign-in'} className="text-mainColor font-medium pl-1 hover:underline underline-offset-2">Sign In</Link>
      </p>
      <p className="text-gray-600 mt-[10px] text-[13px] font-light">
        Or go back 
        <Link href={'/'} className="text-mainColor font-medium pl-1 hover:underline underline-offset-2">Home</Link>
      </p>

    </div>
  )
}
