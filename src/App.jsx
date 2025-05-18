import "./App.css";

import TopHeader from "./components/header/TopHeader";
import BottomHeader from "./components/header/BottomHeader";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Footer from "./components/footer/Footer";
import Cart from "./pages/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollTop from "./components/ScrollTop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./pages/categoryPage/CategoryPage";

import SearchResults from "./pages/SearchResults";
import FavoritePage from "./pages/favpage/FavoritePage";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BottomHeader />
      </header>
      <Toaster
        position="bottom-right"
        toastOptions={{
          background: "#c9c9c9",
          borderRadius: "5px",
          padding: "14px",
        }}
      />
      <ScrollTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}
export default App;
