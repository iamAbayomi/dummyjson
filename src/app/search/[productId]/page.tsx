import { Product } from "../../../types/product";
import Image from "next/image";
import { fetchProductById, fetchProducts } from "@/services/api";

// This function generates static pages for the first 10 products
export async function generateStaticParams() {
  const products: Product[] = await fetchProducts();
  const paths = products.slice(0, 10).map((product) => ({
    productId: product.id.toString(),
  }));

  return paths;
}

// Define the type for props
// interface ProductPageProps {
//   params: {
//     productId: string;
//   };
// }

// The Server Component for product page rendering
const ProductPage = async (params: { params: Promise<{ productId: string}>}) => {
//  const { productId } = params;

  // Dynamically fetch product data
  const product: Product = await fetchProductById(parseInt((await params.params).productId));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-detail">
      <Image
        className="mx-auto"
        width={500}
        height={500}
        src={product.thumbnail}
        alt={product.title}
      />
      <h1 className="mb-[10px] font-[600] text-[16px]">{product.title}</h1>
      <p className="text-[14px]">{product.description}</p>
      <p className="mt-[20px] text-[12px]">Price: ${product.price}</p>
      <button className="mt-[10px]">Add to Cart</button>
    </div>
  );
};

export default ProductPage;