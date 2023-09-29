import Hero from "@/components/sections/Hero";
import ProductsGuide from "@/components/sections/ProductsGuide";
import Variety from "@/components/sections/Variety";

export const dynamic = "force-static";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductsGuide />
      <Variety />
    </div>
  );
}
