import { sizes } from "@/components/product_page_components/Sizes";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="layoutStyle mb-[70px] sm:mb-[100px]">
      <div className="mt-[65px]">
        <div className="flex flex-col sm:flex-row gap-y-[20px] gap-x-[30px]  justify-center">
          <Skeleton className="h-[450px] sm:w-[60%] md:w-[30%] rounded-none" />

          <div className="flex flex-col gap-y-3 sm:gap-y-5 sm:w-[350px] md:w-[450px]">
            <Skeleton className="h-[25px] w-[200px] rounded-sm" />

            <div className="flex justify-between items-end gap-[10px]">
              <Skeleton className="w-[50px] h-[15px] rounded-sm" />
              <Skeleton className="w-[20px] h-[15px] rounded-sm" />
            </div>

            <div className="flex gap-1 mt-3 sm:mt-0">
              {sizes.map((i) => (
                <Skeleton className=" w-[27px] h-[27px] rounded-sm" key={i} />
              ))}
            </div>

            <Skeleton className="w-[100px] h-[27px] rounded-sm" />

            <div>
              <div className="flex  items-end gap-[3px]">
                <Skeleton className="w-[60px] h-[25px] rounded-sm" />
                <Skeleton className="w-[60px] h-[25px] rounded-sm" />
              </div>

              <Skeleton className="w-[200px] h-[10px] rounded-sm mt-1" />
            </div>

            <div className="flex gap-3">
              <Skeleton className="w-[100px] h-[30px]" />
              <Skeleton className="flex-1 h-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
