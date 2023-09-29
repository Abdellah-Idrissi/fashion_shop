'use client' 

import Image from 'next/image'

import errorPic from "../../public/manconfused.svg"

export default function Error({error,reset}: { error: Error & { digest?: string } , reset: () => void }) {

  return (
    <div className='flex-1 grid place-items-center'>
      <div className='text-center'>
        <Image src={errorPic} alt='error-pic' className='w-[400px] h-[300px] mt-[-80px]'/>
        <div className='mt-[-15px]'>
          <h2 className='mb-2'>Something went wrong!</h2>
          <button  onClick={()=> reset()} className='blackBtn'>
            Try Again
          </button>
        </div>
      </div>
    </div>
  )
}