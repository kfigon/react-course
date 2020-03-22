import React from 'react'
import './SearchBox.css'

const SearchBox = (props) => {
    return (
        <input 
            className="search-box"
            type="search"
            placeholder="wyszukaj"
            onChange={props.searchFunction} />
    );
}

export default SearchBox;