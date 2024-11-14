// components/Navbar.tsx
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (query) params.append("query", query);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <nav className="mt-[10px] mx-auto">
      <div className="mt-[20px] px-[20px] w-full flex items-center justify-between">
        <p onClick={() => router.push("/")} className="cursor-pointer text-center text-base">
          Ecommerce App
        </p>

        {/* Form with search, filter, and sort */}
        <form className="flex items-center gap-2 flex-wrap" onSubmit={handleSearch}>
          <div className="border rounded px-[10px]">
            <input
              className="text-xs px-[10px]"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
            />
            <FontAwesomeIcon
              onClick={handleSearch}
              className="h-[10px] mb-[2px] cursor-pointer"
              icon={faSearch}
            />
          </div>

        </form>
      </div>
    </nav>
  );
};

export default Navbar;
