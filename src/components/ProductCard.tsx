// components/ProductCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link className="" href={`/search/${product.id}`}>
      <div className="product-card">
        <Image
          width={400}
          height={400}
          src={product.thumbnail}
          alt={product.title}
        />
        <h2 className="font-[600] text-[16px]">{product.title}</h2>
        <p>${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
