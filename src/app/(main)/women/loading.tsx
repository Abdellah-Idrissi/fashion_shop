import { Skeleton } from "@/components/ui/skeleton";

const skeletonsArr = [1,2,3,4,5,6,7,8,9,10]

export default function Loading() {
  return (
    <div className="layoutStyle mb-[40px]">

      <Skeleton className={`h-[30px] w-[250px] mx-auto my-8 mb-[50px]  `}/>

      <div className="flex flex-col gap-[50px] md:flex-row relative">
        
        <div className="w-full md:w-[200px]">
          <Skeleton className=" w-full h-[20px] mb-4" />
          <Skeleton className=" w-full h-[20px]" />
        </div>

        <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {skeletonsArr.map((i)=> (
            <div key={i}>
              <Skeleton  className=" h-[450px] mb-4" />
              <Skeleton  className=" w-[70%] h-[10px] mb-2" />
              <Skeleton  className=" w-[10%] h-[7px]" />
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}
