import Product from "@/components/product_page_components/Product";
import Title from "@/components/product_page_components/Title";
import getProducts from "@/helpers/getProducts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const womenProducts = await getProducts("women");

  return womenProducts.map((product: productType) => ({
    id: product.id.toString(),
  }));
}

type propsType = {
  params: {
    id: string;
  };
};

export default async function MenProductPage({ params: { id } }: propsType) {
  const womenProducts = await getProducts("women");
  const product: productType = womenProducts[Number(id) - 1];

  if (!product) {
    notFound();
  }

  return (
    <div className="layoutStyle mb-[70px] sm:mb-[100px]">
      <Product product={product} segment="women">
        <Title title={product.title} />
      </Product>
    </div>
  );
}
