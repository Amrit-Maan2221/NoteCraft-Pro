import React from 'react'

function Navigation() {
    return (
        <header className='flex bg-white align-items px-4 py-2 items-center justify-between'>
            <div className='p-2'>
                <button type='button' className="material-symbols-outlined">menu</button>
            </div>
            <div className='search-box flex-1 max-w-xl'>
                <div className="mx-8 flex bg-gray-50 rounded-lg">
                    <button type='button' className="material-symbols-outlined p-3">search</button>
                    <input type="text" className="block w-full p-3 text-sm text-gray-900 bg-gray-50 focus-visible:outline-none" placeholder="Search" required />
                    <button type='button' className="material-symbols-outlined p-3">close</button>
                </div>
            </div>
            <div className='profile p-2'>
                <button type='button' className="material-symbols-outlined">
                    person
                </button>
            </div>
        </header>
    )
}

export default Navigation