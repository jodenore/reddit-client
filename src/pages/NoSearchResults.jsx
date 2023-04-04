import React from "react";
import { HiBan } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
const NoSearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  return (
    <div className="error-card">
      <HiBan />
      <div className="search-content">
        Hm.. we couldn't find any results for "{query}"
      </div>
    </div>
  );
};

export default NoSearchResults;
