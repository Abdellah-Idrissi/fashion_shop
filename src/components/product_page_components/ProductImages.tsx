"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function ProductImages({ images }: { images: string[] }) {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Pagination]}
      className="h-[450px] sm:w-[60%] md:w-[30%] bg-gray-100 !mx-0 sm:mx-auto"
    >
      <SwiperSlide className="relative">
        <Image
          src={images[0]}
          fill
          sizes="(min-width: 1360px) 365px, (min-width: 780px) calc(25.89vw + 18px), (min-width: 700px) calc(78.33vw - 220px), (min-width: 660px) 298px, (min-width: 440px) calc(100vw - 60px), (min-width: 380px) calc(150vw - 250px), (min-width: 340px) calc(200vw - 400px), calc(-215vw + 968px)"
          alt="first pic"
          priority
          className="object-cover"
        />
      </SwiperSlide>

      <SwiperSlide className="relative">
        <Image
          src={images[1]}
          fill
          sizes="(min-width: 1360px) 365px, (min-width: 780px) calc(25.89vw + 18px), (min-width: 700px) calc(78.33vw - 220px), (min-width: 660px) 298px, (min-width: 440px) calc(100vw - 60px), (min-width: 380px) calc(150vw - 250px), (min-width: 340px) calc(200vw - 400px), calc(-215vw + 968px)"
          alt="second pic"
          priority
          className="object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
}
