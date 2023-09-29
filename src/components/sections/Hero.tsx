import { prata } from "@/app/layout";
import { FadeDownHero } from "../animated/FadeDownHero";
import Image from "next/image";
import star from "../../../public/star.svg"

export default function Hero() {
  return (
    <div className="bg-hero heroHeight bg-center bg-no-repeat bg-cover rounded-sm relative -z-10 bg-[#d5d5d5] ">
      <FadeDownHero font={prata.className} />
      <Image
        src={star}
        alt="star"
        className=" w-[80px] md:w-[100px] absolute bottom-0 "
      />
      <Image
        src={star}
        alt="star"
        className=" w-[80px] md:w-[100px] absolute bottom-0 right-0 "
      />
    </div>
  );
}
