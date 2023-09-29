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
          sizes="50vw"
          alt="first pic"
          priority
          className="object-cover"
        />
      </SwiperSlide>

      <SwiperSlide className="relative">
        <Image
          src={images[1]}
          fill
          sizes="50vw"
          alt="second pic"
          priority
          className="object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
}
