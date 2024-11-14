// app/search/[productId]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Product } from "../../../types/product";
import Image from "next/image";
import { fetchProductById } from "@/services/api";

const ProductPage: React.FC = () => {
  const { productId } = useParams(); // Access productId from route params
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (productId) {
        const fetchedProduct = await fetchProductById(
          parseInt(productId.toString()) // Convert to number if necessary
        );
        setProduct(fetchedProduct);
      }
    };
    fetchData();
  }, [productId]);

  if (!product) return <p>Loading...</p>;

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
