"use client"
import { useClerk } from "@clerk/nextjs"
import { type HandleOAuthCallbackParams } from "@clerk/types"
import { useEffect } from "react"
import { AiOutlineReload } from "react-icons/ai"

// Running out of edge function execution units on vercel free plan
// export const runtime = "edge"


export type SSOCallbackPageProps = {
  searchParams: HandleOAuthCallbackParams
}

export default function SSOCallbackPage({searchParams}: SSOCallbackPageProps) {
  const { handleRedirectCallback } = useClerk()

  useEffect(() => {
    void handleRedirectCallback(searchParams)
  }, [searchParams, handleRedirectCallback])

  return (
    <AiOutlineReload className={'text-[50px] mx-auto animate-spin'}/>
  )
}
