import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import PageTransition from "../components/PageTransition";
import Loader from "./home/loader/Loader";
import Product from "../components/product/Product";

function SearchResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = new URLSearchParams(useLocation().search).get("query");
  console.log(query);
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await response.json();
        console.log("data", data);
        setResults(data.products || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      fetchResults();
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [query]);

  console.log("resr", results);

  return (
    <PageTransition key={query}>
      <div className="category-products">
        {results.length > 0 ? (
          <div className="container">
            <div className="top-slide">
              <h2>Results for :{query}</h2>
            </div>
            <div className="products">
              {loading ? (
                <Loader />
              ) : (
                results.map((item, index) => (
                  <Product key={index} item={item} />
                ))
              )}
            </div>
          </div>
        ) : (
          <div className="container">
            <p>No results found</p>
          </div>
        )}
      </div>
    </PageTransition>
  );
}

export default SearchResults;
