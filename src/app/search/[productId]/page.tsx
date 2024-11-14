// app/search/[productId]/page.tsx
import { fetchProductById, fetchProducts } from '../../../services/api';
import ProductDetail from '../../../components/ProductDetail';
import { Product } from '../../../types/product';

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product: Product = await fetchProductById(parseInt(params.productId));

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;

export async function generateStaticParams() {
  // Pre-generate pages for a set of product IDs
  const products = await fetchProducts('');
  return products.slice(0, 10).map((product) => ({
    productId: product.id.toString(),
  }));
}
