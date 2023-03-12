import "./search-box.styles.css";
import { ChangeEvent } from "react";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    onChange={onChangeHandler}
    placeholder={placeholder}
  />
);

export default SearchBox;
