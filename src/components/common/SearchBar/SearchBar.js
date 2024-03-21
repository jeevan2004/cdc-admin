import React from "react";
import "./searchBar.css";
function SearchBar() {
  return (
    <div className="serach_bar me-2">
      <form>
        <input type="text" className="form-control" placeholder="Search here" />
        <button className="btn" type="submit">
          <i className="fas fa-search" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
