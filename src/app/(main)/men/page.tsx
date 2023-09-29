import Products from "@/components/products_page_components/Products";
import SectionTitle from "@/components/products_page_components/SectionTitle";
import fetchProducts from "@/helpers/fetchProducts";
import { prata } from "../../layout";

type menTypes = {
  searchParams: searchParamsType;
};

export default async function Men({ searchParams }: menTypes) {
  const { products }: returnType = await fetchProducts("men", searchParams);

  return (
    <div className="layoutStyle">
      <SectionTitle segment="men" font={prata.className} />
      <Products products={products} segment="men" />
    </div>
  );
}
