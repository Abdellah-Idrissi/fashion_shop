import Filters from "../filters/Filters";
import ProductCard from "./ProductCard";

type productsPageTypes = {
  products: productsType;
  segment: segmentType;
};

export default function Products({ products, segment }: productsPageTypes) {
  return (
    <div className="mb-[40px]">
      <div className="flex flex-col gap-[50px] md:flex-row relative">
        <Filters segment={segment} />

        <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {products.map((product: productType) => (
            <ProductCard key={product.id} product={product} segment={segment} />
          ))}
        </div>
      </div>
    </div>
  );
}
