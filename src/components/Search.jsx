import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="searchBox-container">
      <form className="search-box" onSubmit={handelSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for Products"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default Search;
