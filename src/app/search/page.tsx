// app/search/page.tsx

import { fetchProducts } from "../../services/api";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../types/product";

interface SearchPageProps {
  searchParams: { query: string };
}

const SearchPage: React.FC<SearchPageProps> = async ({ searchParams }) => {
  const products: Product[] = await fetchProducts(searchParams.query);

  return (
    <div className="px-[10px]">
      <h1 className="pl-[10px] mt-[30px] mb-[10px] ml-[5px] text-[14px]">
        Search Results
      </h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
