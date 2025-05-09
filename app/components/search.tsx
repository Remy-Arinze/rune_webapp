'use client'
import React, { useState } from 'react';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleReset = () => {
    setSearchValue('');
  };

  return (
    <div className="flex justify-center items-center">
      <form className="relative w-[200px] text-sm">
        {/* Fancy background */}
        <div className="absolute inset-0 bg-[var(--dark)] rounded-full shadow-sm -z-10 pointer-events-none" />
        
        <label htmlFor="search" className="w-full flex items-center h-10 px-3">
          {/* Search input */}
          <input
            className="w-full placeholder:text-[12px] bg-transparent text-white ml-7 focus:outline-none placeholder:text-[#949faa]"
            type="text"
            required
            placeholder="Search"
            id="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          
          {/* Search icon */}
          <div className="absolute left-3">
            <svg 
              viewBox="0 0 24 24" 
              aria-hidden="true" 
              className="w-[17px] h-[17px] block"
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
              </g>
            </svg>
          </div>
          
          {/* Close button (visible when input has value) */}
          {searchValue && (
            <button 
              className="absolute right-3 flex items-center justify-center text-white p-0.5 w-5 h-5 rounded-full bg-orange-400"
              type="reset"
              onClick={handleReset}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-3 w-3" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
          )}
        </label>
      </form>
    </div>
  );
};

export default SearchInput;