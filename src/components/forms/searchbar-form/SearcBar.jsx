import React from 'react';
import style from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <form className={style.searchBar} method="get">
            <input className={style.searchBar__text}  placeholder="Search" />
        </form>
    )
}

export default SearchBar;