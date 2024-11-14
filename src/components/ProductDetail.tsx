// components/ProductDetail.tsx
import { Product } from '../types/product';
import Image from 'next/image';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="product-detail">
      <Image className='mx-auto' width={500} height={500} src={product.thumbnail} alt={product.title} />
      <h1 className="mb-[10px] font-[600] text-[16px]">{product.title}</h1>
      <p className='text-[14px]'>{product.description}</p>
      <p className='mt-[20px] text-[12px]'>Price: ${product.price}</p>
      <button className='mt-[10px]'>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
