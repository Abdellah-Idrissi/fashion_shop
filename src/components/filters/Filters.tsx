import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HighToLow from "./HighToLow";
import LowToHigh from "./LowToHigh";
import Sweaters from "./Sweaters";
import Tshirts from "./Tshirts";

export default function Filters({ segment }: { segment: segmentType }) {
  return (
    <div className="w-full md:w-[200px]  ">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-b border-gray-100">
          <AccordionTrigger className={"text-mainColor/70 "}>
            Price
          </AccordionTrigger>

          <AccordionContent>
            <div className="pl-[5px] text-[13px] flex flex-col gap-2 ">
              <HighToLow segment={segment} />
              <LowToHigh segment={segment} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-b border-gray-100">
          <AccordionTrigger className={"text-mainColor/70 "}>
            Categories
          </AccordionTrigger>

          <AccordionContent>
            <div className="pl-[5px] text-[13px] flex flex-col gap-2">
              <Sweaters segment={segment} />
              <Tshirts segment={segment} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
