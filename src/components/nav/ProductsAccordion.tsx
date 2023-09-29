import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import firstFront from "../../../public/firstFront.jpg"
import firstBack from "../../../public/firstBack.jpg"
import secondFront from "../../../public/secondFront.jpg"
import secondBack from "../../../public/secondBack.jpg"
import thirdFront from "../../../public/thirdFront.jpg"
import thirdBack from "../../../public/thirdBack.jpg"
import NavMenuProduct from "./NavMenuProduct";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

export const localProductsArr : localProductsType = [
  {images:['firstFront.jpg','firstBack.jpg'],title:'CONTRAST PRINT SWEATSHIRT',price:49,id:7,segment:'men',styles:'col-span-4'},
  {images:['secondFront.jpg','secondBack.jpg'],title:'LONG PRINTED T-SHIRT',price:25,id:24,segment:'women',styles:'col-span-4 row-start-2'},
  {images:['thirdFront.jpg','thirdBack.jpg'],title:'CASHMERE SWEATER',price:59,id:1,segment:'men',styles:'col-span-4 row-start-3'}
]

export type AccordionPropsType = {
  setIsOpen:Dispatch<SetStateAction<boolean>>
}


export default function ProductsAccordion({setIsOpen}:AccordionPropsType) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className={"NavHoverSm mt-4"}>
          Products
        </AccordionTrigger>

        <AccordionContent>

          <div className="grid grid-cols-1 grid-rows-3 gap-4">

            <NavMenuProduct localProduct={localProductsArr[0]}  setIsOpen={setIsOpen}>
              <>
                <Image
                    src={firstFront}
                    alt="front"
                    sizes={`50vw`}
                    fill
                    priority
                    placeholder="blur"
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 bg-gray-100"
                  />

                  <Image
                    src={firstBack}
                    fill
                    sizes={`50vw`}
                    alt="back"
                    priority
                    placeholder="blur"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 bg-gray-100"
                  />
              </>
            </NavMenuProduct>

            <NavMenuProduct localProduct={localProductsArr[1]} setIsOpen={setIsOpen}>
              <>
                <Image
                    src={secondFront}
                    alt="front"
                    sizes={`50vw`}
                    fill
                    priority
                    placeholder="blur"
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 bg-gray-100"
                  />

                  <Image
                    src={secondBack}
                    fill
                    sizes={`50vw`}
                    alt="back"
                    priority
                    placeholder="blur"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 bg-gray-100"
                  />
              </>
            </NavMenuProduct>

            <NavMenuProduct localProduct={localProductsArr[2]}  setIsOpen={setIsOpen}>
              <>
                  <Image
                      src={thirdFront}
                      alt="front"
                      sizes={`50vw`}
                      fill
                      priority
                      placeholder="blur"
                      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 bg-gray-100"
                    />

                    <Image
                      src={thirdBack}
                      fill
                      sizes={`50vw`}
                      alt="back"
                      priority
                      placeholder="blur"
                      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 bg-gray-100"
                    />
              </>
            </NavMenuProduct>

          </div>

        </AccordionContent>

      </AccordionItem>
    </Accordion>
  );
}