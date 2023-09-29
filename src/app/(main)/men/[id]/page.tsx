import Product from "@/components/product_page_components/Product";
import Title from "@/components/product_page_components/Title";
import getProducts from "@/helpers/getProducts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const menProducts = await getProducts("men");

  return menProducts.map((product: productType) => ({
    id: product.id.toString(),
  }));
}

type propsType = {
  params: {
    id: string;
  };
};

export default async function MenProductPage({ params: { id } }: propsType) {
  const menProducts = await getProducts("men");
  const product: productType = menProducts[Number(id) - 1];

  if (!product) {
    notFound();
  }

  return (
    <div className="layoutStyle mb-[70px] sm:mb-[100px]">
      <Product product={product} segment="men">
        <Title title={product.title} />
      </Product>
    </div>
  );
}
