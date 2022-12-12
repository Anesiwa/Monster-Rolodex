import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    onChange={onChangeHandler}
    placeholder={placeholder}
  />
);

export default SearchBox;
