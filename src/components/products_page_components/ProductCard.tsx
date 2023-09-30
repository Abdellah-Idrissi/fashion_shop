import Image from "next/image";
import Link from "next/link";
import AddToCartModal from "./AddToCartModal";

type productCardType = { product: productType; segment: segmentType };

export default function ProductCard({ product, segment }: productCardType) {
  const { title, price, id, images } = product;

  return (
    <div className={`group block `}>
      <div className="relative h-[350px] bg-gray-100 overflow-hidden mb-2">
        <Link href={`/${segment}/${id}`} className="relative block h-full">
          <Image
            src={images[0]}
            alt="front product pic"
            sizes={`(min-width: 808px) 30vw, 50vw`}
            fill
            priority
            className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
          />

          <Image
            src={images[1]}
            fill
            sizes={`(min-width: 808px) 30vw, 50vw`}
            priority
            alt="back product pic"
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />
        </Link>

        <AddToCartModal product={product} segment={segment} />
      </div>

      <Link href={`/${segment}/${id}`} className="relative bg-white pt-3">
        <h3 className="text-[13px] uppercase text-mainColor/90 group-hover:underline group-hover:underline-offset-4">
          {title}
        </h3>

        <div className="mt-1.5 text-[15px] text-mainColor">
          <p className="tracking-wide"><span className="text-[14px]">$</span>{price}</p>
        </div>
      </Link>
    </div>
  );
}
