"use client"

import setQueries from "@/helpers/setQueries"
import { useRouter, useSearchParams } from "next/navigation"

export default function Sweaters({segment}:{segment:segmentType}) {
  const router = useRouter()

  const searchParams = useSearchParams()
  const priceQuery = searchParams.get('category')
  const hasSweaters = priceQuery && priceQuery === 'sweaters'

  const addQueryFn = (key:queryKeyType,value:queryValueType)=> {
    const queries = setQueries(key,value)
    router.push(`/${segment}/?${queries}`)
  }

  return (
    <div onClick={()=> addQueryFn('category','sweaters')} className={`filterBtn ${hasSweaters && 'active'}`}>
      Sweaters
    </div>
  )
}
