import { useEffect, useState } from "react";
import { IoMdMenu, IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";

const NavLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/About" },
  { title: "Accessories", path: "/Accessories" },
  { title: "Blog", path: "/Blog" },
  { title: "Contact", path: "/contact" },
];

function BottomHeader() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    setIsCategoryOpen(false);
  }, [location]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="bottom-header">
      <div className="container">
        <nav className="nav">
          <div className="category-nav">
            <div
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className={`category-btn `}
            >
              <IoMdMenu />
              <p>Browse Category</p>
              <IoMdArrowDropdown />
            </div>
            <div
              className={`categories-nav-list ${
                isCategoryOpen ? "active" : ""
              }`}
            >
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={`/category/${category.slug}`}
                  className="category"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="nav-links">
            {NavLinks.map((link) => (
              <li
                className={location.pathname === link.path ? "active" : ""}
                key={link.title}
              >
                <Link to={link.path} className="nav-link">
                  {link.title}
                </Link>
              </li>
            ))}
          </div>
        </nav>
        <div className="sign-reges-icons">
          <Link>
            <PiSignInBold />
          </Link>
          <Link>
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BottomHeader;
