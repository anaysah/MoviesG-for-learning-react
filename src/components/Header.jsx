import React from 'react';
import './Header.css'

const Header = ({ searchTerm, handleSearchInputChange, handleSearchButtonClick }) => {
  return (
    <div className='header py-3 mb-4 mb-sm-5'>
    <div className=' container'>
      <h1 className="title">Movies G</h1>
      <div className="d-flex gap-2 ">
        <input
          className="form-control form-control-sm"
          placeholder="Search a Movie"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <button
          className="btn btn-primary"
          onClick={handleSearchButtonClick}
        >
          Search
        </button>
      </div>
    </div>
    </div>
  );
};

export default Header;
