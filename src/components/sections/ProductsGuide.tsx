import { prata } from "@/app/layout";
import Image from "next/image";
import React from "react";
import productguide1 from "../../../public/productguide1.jpg";
import productguide2 from "../../../public/productguide2.jpg";
import productguide3 from "../../../public/productguide3.jpg";
import { getBlurDataUrL } from "@/helpers/getBlurDataUrl";
import { FadeDownProducts } from "../animated/FadeDownProducts";

export default async function ProductsGuide() {
  const firstBlurDataUrl = await getBlurDataUrL("productguide1.jpg");
  const secondBlurDataUrl = await getBlurDataUrL("productguide2.jpg");
  const thirdBlurDataUrl = await getBlurDataUrL("productguide3.jpg");

  return (
    <div className="layoutStyle">
      <div className="section">
        <FadeDownProducts font={prata.className} />

        <div className="grid grid-cols-1 grid-rows-3 gap-5 gap-y-7 sm:grid-cols-3 sm:grid-rows-1">
          <div className="">
            <Image
              src={productguide1}
              alt="product guide 1"
              className="productguideImg"
              placeholder="blur"
              blurDataURL={firstBlurDataUrl}
              sizes="(min-width: 640px) 33.33vw, 95vw"
            />
            <h3 className="productGuideTitle">modern sweaters</h3>
            <p className="productGuideDesc">
              Modern sweaters offer a fusion of contemporary design and comfort,
              providing stylish warmth for your wardrobe
            </p>
          </div>

          <div>
            <Image
              src={productguide2}
              alt="product guide 2"
              placeholder="blur"
              blurDataURL={secondBlurDataUrl}
              className="productguideImg"
              sizes="(min-width: 640px) 33.33vw, 95vw"
            />

            <h3 className="productGuideTitle">built to last</h3>
            <p className="productGuideDesc">
              Discover enduring quality and style in our t-shirts and sweaters,
              where enduring style meets unmatched durability, ensuring your
              wardrobe stands the test of time
            </p>
          </div>

          <div>
            <Image
              src={productguide3}
              placeholder="blur"
              blurDataURL={thirdBlurDataUrl}
              alt="product guide 3"
              className="productguideImg"
              sizes="(min-width: 640px) 33.33vw, 95vw"
            />

            <h3 className="productGuideTitle">premuim shirts</h3>
            <p className="productGuideDesc">
              Elevate your wardrobe with our premium shirts, meticulously
              crafted for timeless style and exceptional quality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
