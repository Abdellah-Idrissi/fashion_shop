import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavMenuProduct from "./NavMenuProduct";
import { localProductsArr } from "./ProductsAccordion";
import Image from "next/image";
import firstFront from "../../../public/firstFront.jpg"
import firstBack from "../../../public/firstBack.jpg"
import secondFront from "../../../public/secondFront.jpg"
import secondBack from "../../../public/secondBack.jpg"
import thirdFront from "../../../public/thirdFront.jpg"
import thirdBack from "../../../public/thirdBack.jpg"




export default function ProductsNavigation() {
  return (
    <NavigationMenu className="">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex items-center cursor-pointer NavHover">
              <p>
                Products
              </p>
          </NavigationMenuTrigger>

          <NavigationMenuContent>

            <div className="grid grid-cols-3 grid-rows-1 gap-4 p-6 navigationScreen z-50">

              <NavigationMenuLink>
                <NavMenuProduct localProduct={localProductsArr[0]} >
                  <>
                    <Image
                        src={firstFront}
                        alt="front"
                        sizes={`30vw`}
                        fill
                        priority
                        placeholder="blur"
                        className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 bg-gray-100"
                      />

                      <Image
                        src={firstBack}
                        fill
                        sizes={`30vw`}
                        alt="back"
                        priority
                        placeholder="blur"
                        className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 bg-gray-100"
                      />
                  </>
                </NavMenuProduct>
              </NavigationMenuLink>


              <NavigationMenuLink>
                <NavMenuProduct localProduct={localProductsArr[1]}  >
                  <>
                    <Image
                        src={secondFront}
                        alt="front"
                        sizes={`30vw`}
                        fill
                        priority
                        placeholder="blur"
                        className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 bg-gray-100"
                      />

                      <Image
                        src={secondBack}
                        fill
                        sizes={`30vw`}
                        alt="back"
                        priority
                        placeholder="blur"
                        className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 bg-gray-100"
                      />
                  </>
                </NavMenuProduct>
              </NavigationMenuLink>


              <NavigationMenuLink>
                <NavMenuProduct localProduct={localProductsArr[2]} >
                  <>
                      <Image
                          src={thirdFront}
                          alt="front"
                          sizes={`30vw`}
                          fill
                          priority
                          placeholder="blur"
                          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 bg-gray-100"
                        />

                        <Image
                          src={thirdBack}
                          fill
                          sizes={`30vw`}
                          alt="back"
                          priority
                          placeholder="blur"
                          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 bg-gray-100"
                        />
                  </>
                </NavMenuProduct>
              </NavigationMenuLink>


            </div>

          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
