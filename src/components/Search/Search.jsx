import React from 'react';
import './Search.scss';

const Search = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Buscar" className="textField" name="search" />
            <button type="button" id="btn-search">{""}<i className="fas fa-search"></i></button>
        </div>
    );
};

export default Search;
