"use client";

import { prata } from "@/app/layout";
import { useSearchParams } from "next/navigation";

export default function SectionTitle({
  segment,
  font,
}: {
  segment: segmentType;
  font: string;
}) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div
      className={`text-[30px] md:text-[40px] my-8 mb-10 text-center ${font}`}
    >
      <span className="capitalize">{segment}</span>
      <span>
        {category === "tshirts"
          ? " T-shirts"
          : category === "sweaters"
          ? " Sweaters"
          : ""}
      </span>
    </div>
  );
}
