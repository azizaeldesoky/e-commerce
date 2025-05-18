import React, { useEffect } from "react";
import { useParams } from "react-router";
import Product from "../../components/product/Product";
import "./CategoryPage.css";
import Loader from "../home/loader/Loader";
import PageTransition from "../../components/PageTransition";

function CategoryPage() {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setCategoryProducts(data))
      .catch((error) =>
        console.error("Error fetching category products:", error)
      )
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <PageTransition>
      <div className="category-products">
        <div className="container">
          <div className="top-slide">
            <h2>{category}</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="products">
            {loading ? (
              <Loader />
            ) : (
              categoryProducts.products.map((item, index) => (
                <Product key={index} item={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default CategoryPage;
