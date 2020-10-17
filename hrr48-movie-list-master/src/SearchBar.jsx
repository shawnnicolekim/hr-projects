import React from 'react';

var SearchBar = ({handleSearchKeyPress, handleSearchSubmit}) => {
  return (
    <div className="searchBar">
      <input
        type="text"
        className="searchInput"
        onKeyPress={(event) => handleSearchKeyPress(event)}
      />
      <button
        type="button"
        className="searchButton"
        onClick={(event) => {
          handleSearchSubmit(event, );
        }}
      >Begin The Search!</button>
    </div>
  );
}

export default SearchBar