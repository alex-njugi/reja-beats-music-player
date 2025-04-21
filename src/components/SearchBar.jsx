import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [searchData, setSearchData] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedData = searchData.trim();
        if (trimmedData) {
            onSearch(trimmedData);
        }
    };
  return (
    <form onSubmit={handleSubmit} className="search-bar">
        <input type='text' value={searchData} onChange={(e) => setSearchData(e.target.value)}
        placeholder='Search songs, artists...'/>

        <button type='submit'>Search</button>
    </form>
  )
};


export default SearchBar
