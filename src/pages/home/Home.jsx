import { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider";
import SlideProduct from "../../components/product/SlideProduct";
import "./home.css";
import Loader from "./loader/Loader";
import PageTransition from "../../components/PageTransition";
const categories = [
  "smartphones",
  "laptops",
  "sunglasses",
  "mens-watches",
  "mobile-accessories",
  "sports-accessories",
  "tablets",
];
function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await res.json();
            return { [category]: data.products };
          })
        );

        const productsData = Object.assign({}, ...result);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <PageTransition>
      <div>
        <HeroSlider />

        {loading ? (
          <Loader />
        ) : (
          categories.map((category) => {
            return (
              <SlideProduct
                key={category}
                data={products[category]}
                title={category.replace("-", " ")}
              />
            );
          })
        )}
      </div>
    </PageTransition>
  );
}

export default Home;
