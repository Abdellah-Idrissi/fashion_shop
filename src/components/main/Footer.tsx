"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer({font}:{font:string}) {
  const pathname = usePathname();

  return (
    <footer
      className={`pt-9 ${pathname === "/" ? "bg-white" : "bg-gray-100"} `}
    >
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center ">
          <Link href={"/"} className={`${font} text-[25px]`}>
            FashionShop
          </Link>
        </div>

        <p className="mx-auto px-3 mt-4 max-w-md text-center pb-9 font-light leading-relaxed text-gray-500">
          Fashion is a state of mind, where creativity knows no bounds. Choose
          your own style, and let it reflect the uniqueness within you
        </p>
      </div>

      <div className=" border-t border-gray-200 py-3 font-light  ">
        <p className="text-center text-xs/relaxed text-gray-500">
          © FashionShop {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
