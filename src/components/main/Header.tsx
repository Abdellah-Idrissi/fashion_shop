"use client"

import { prata } from "@/app/layout";
import Link from "next/link";
import ProductsNavigation from "../nav/ProductsNavigation";
import Cart from "../cart/Cart";
import Menu from "../nav/Menu";
import SignOutButton from "../auth_buttons/SignOutButton";
import SignInButton from "../auth_buttons/SignInButton";
import { useEffect, useState } from "react";

export default function Header({ font }: { font: string }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])


  return (
    <header className={`bg-white fixed transition-colors duration-200 inset-x-0 z-30 top-0 ${isSticky ? 'glassEffect' : ''}`}>
      <div className="layoutStyle">
        <div>
          <div className="flex h-16 items-center justify-between">
            <Link href={"/"} className={`${font} text-[25px]`}>
              FashionShop
            </Link>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <div className="flex items-center gap-6 text-sm">
                  <ProductsNavigation />

                    <Link className="NavHover" href="/men">
                      Men
                    </Link>

                    <Link className="NavHover" href="/women">
                      Women
                    </Link>
                </div>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="md:flex sm:gap-4 hidden">
                <SignInButton />
                <SignOutButton />
              </div>

              <div className="flex items-center ">
                <Cart />
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
