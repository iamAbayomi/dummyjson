// app/search/page.tsx
"use client";

import { useEffect, useState, Suspense } from "react"; // Import Suspense
import { useSearchParams } from "next/navigation";
import { fetchProducts } from "../../services/api";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../types/product";

const SearchPageContent: React.FC = () => {
  const searchParams = useSearchParams(); // Use Next.js's `useSearchParams` hook for client-side-safe query access
  const query = searchParams.get("query") || ""; // Safely get the query parameter
  const [products, setProducts] = useState<Product[]>([]); // State for fetched products
  const [category, setCategory] = useState(""); // State for category filter
  const [sort, setSort] = useState(""); // State for sorting

  // Fetch products on component mount or when `query` changes
  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProducts(query);
      setProducts(fetchedProducts);
    };

    fetchData();
  }, [query]);

  // Optional: Filtering and Sorting Logic
  const filteredAndSortedProducts = products
    .filter((product) => {
      if (!category) return true;
      return product.category === category; // Adjust according to actual product categories
    })
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="px-[10px]">
      <h1 className="pl-[10px] mt-[30px] mb-[10px] ml-[5px] text-[14px]">
        Search Results
      </h1>
      <div>
        {/* Category Filter Dropdown */}
        <select
          className="text-xs px-[10px] border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
        </select>

        {/* Sort Dropdown */}
        <select
          className="text-xs px-[10px] border rounded"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      <div className="product-grid">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Wrap the component with Suspense to handle the useSearchParams()
const SearchPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchPageContent />
    </Suspense>
  );
};

export default SearchPage;
