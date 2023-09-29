import { prata } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import { getBlurDataUrL } from "@/helpers/getBlurDataUrl";
import { FadeDownVariety } from "../animated/FadeDownVariety";

export default async function Variety() {
  const firstBlurDataUrl = await getBlurDataUrL("variety1.jpg");
  const secondBlurDataUrl = await getBlurDataUrL("variety2.jpg");
  const thirdBlurDataUrl = await getBlurDataUrL("variety3.jpg");
  const forthBlurDataUrl = await getBlurDataUrL("variety4.jpg");

  return (
    <div className="bg-gray-100 section">
      <div className="layoutStyle">
        <FadeDownVariety font={prata.className} />

        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-5 mt-2">
          <Link
            href={"/men?category=sweaters"}
            className="group h-[450px] relative overflow-hidden border "
          >
            <Image
              src={"/variety1.jpg"}
              fill
              className="object-cover group-hover:scale-110 transition duration-200"
              alt=""
              sizes="80vw"
              placeholder={"blur"}
              blurDataURL={firstBlurDataUrl}
            />
            <div className="absolute textShadow group-hover:underline bottom-[8px] text-[30px] left-[10px]">
              <p className="">MEN-</p>
              <p className="">SWEATERS</p>
            </div>
          </Link>

          <Link
            href={"/men?category=tshirts"}
            className="h-[450px] group relative overflow-hidden border "
          >
            <Image
              src={"/variety2.jpg"}
              fill
              className="object-cover group-hover:scale-110 transition duration-200"
              alt=""
              sizes="80vw"
              placeholder={"blur"}
              blurDataURL={secondBlurDataUrl}
            />
            <div className="absolute textShadow group-hover:underline bottom-[8px] text-[30px] left-[10px]">
              <p>MEN-</p>
              <p>TSHIRTS</p>
            </div>
          </Link>

          <Link
            href={"/women?category=sweaters"}
            className="h-[450px] group relative overflow-hidden border "
          >
            <Image
              src={"/variety3.jpg"}
              fill
              className="object-cover group-hover:scale-110 transition duration-200"
              alt=""
              sizes="80vw"
              placeholder={"blur"}
              blurDataURL={thirdBlurDataUrl}
            />
            <div className="absolute group-hover:underline textShadow bottom-[8px] text-[30px] left-[10px]">
              <p>WOMEN-</p>
              <p>SWEATERS</p>
            </div>
          </Link>

          <Link
            href={"/women?category=tshirts"}
            className="h-[450px] group relative overflow-hidden border "
          >
            <Image
              src={"/variety4.jpg"}
              fill
              className="object-cover group-hover:scale-110 transition duration-200"
              alt=""
              sizes="80vw"
              placeholder={"blur"}
              blurDataURL={forthBlurDataUrl}
            />
            <div className="absolute group-hover:underline textShadow bottom-[8px] text-[30px] left-[10px]">
              <p>WOMEN-</p>
              <p>TSHIRTS</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
