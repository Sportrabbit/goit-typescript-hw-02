import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
    const [ query, setQuery ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === "") {
            toast.error("Empty field!");
            return;
        }
        onSubmit(query);
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <header className={css["header-search-field"]}>
          <form onSubmit={handleSubmit} className={css["header-form"]}>
            <input
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
              value={query}
              onChange={handleChange}
              className={css["header-field"]}
            />
            <button type="submit" className={css["header-btn"]}>Search</button>
          </form>
        </header>
    );
}