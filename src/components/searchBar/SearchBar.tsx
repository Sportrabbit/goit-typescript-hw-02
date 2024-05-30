import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
    const [ query, setQuery ] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim() === "") {
            toast.error("Empty field!");
            return;
        }
        onSubmit(query);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
    <header className={css["header-search-field"]}>
      <form onSubmit={handleSubmit} className={css["header-form"]}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
          className={css["header-field"]}
        />
        <button type="submit" className={css["header-btn"]}>
          Search
        </button>
      </form>
    </header>
    );
}

export default SearchBar;