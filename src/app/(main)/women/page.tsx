import Products from "@/components/products_page_components/Products";
import SectionTitle from "@/components/products_page_components/SectionTitle";
import fetchProducts from "@/helpers/fetchProducts";
import { prata } from "../../layout";

type WomenTypes = {
  searchParams: searchParamsType;
};

export default async function Women({ searchParams }: WomenTypes) {
  const { products }: returnType = await fetchProducts("women", searchParams);

  return (
    <div className="layoutStyle flex-1">
      <SectionTitle segment="women" font={prata.className} />
      <Products products={products} segment="women" />
    </div>
  );
}
