import { useEffect, useState } from "react";
import { useParams } from "react-router";

import "./productDetailes.css";

import SlideProduct from "../../components/product/SlideProduct";
import Loader from "../home/loader/Loader";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import PageTransition from "../../components/PageTransition";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProductDetails();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products);
      })
      .catch((error) => console.error("Error fetching product:", error))
      .finally(() => setLoadingRelatedProducts(false));
  }, [product?.category]);

  if (!product) return <div className="loading">Product not found</div>;

  return (
    <PageTransition key={product.id}>
      {loading ? (
        <Loader />
      ) : (
        <div className="item-details">
          <div className="container">
            <ProductImages product={product} />
            <ProductInfo product={product} />
          </div>
        </div>
      )}

      {loadingRelatedProducts ? (
        <Loader />
      ) : (
        <SlideProduct
          key={product.category}
          data={relatedProducts}
          title={product.category.replace("-", "")}
        />
      )}
    </PageTransition>
  );
}

export default ProductDetails;
