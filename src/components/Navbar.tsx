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
    if (query) router.push(`/search?query=${query}`);
  };

  return (
    <nav className="mt-[10px]  mx-auto">
      <div className="mt-[20px] px-[20px] w-full flex items-center justify-between">
        <p onClick={() => router.push("/")} className="text-center text-base">Ecommerce App </p>
        <form className="">
          <div className="border rounde px-[10px]">
            <input
              className="text-xs px-[10px]"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
            />
            <FontAwesomeIcon
              onClick={handleSearch}
              className="h-[10px] mb-[2px]"
              icon={faSearch}
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
