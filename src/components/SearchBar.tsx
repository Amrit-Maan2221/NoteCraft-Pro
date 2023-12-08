"use client";

import React, { useState } from 'react'

function SearchBar() {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className='flex bg-gray-50 rounded-lg'>
            <button type='button' className="material-symbols-outlined p-3">search</button>
            <input type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="block w-full p-3 text-sm text-gray-900 bg-gray-50 focus-visible:outline-none" placeholder="Search" required />
            {searchValue ? (
                <button type='button' onClick={() => setSearchValue('')} className="material-symbols-outlined p-3">
                    close
                </button>
            ) : null}
        </div>
    )
}

export default SearchBar