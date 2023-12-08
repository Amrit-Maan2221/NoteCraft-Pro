"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import OffCanvas from './OffCanvas';

function Navigation() {
    const [isOffCanvasVisible, setOffCanvasVisible] = useState(false);
    const closeOffCanvas = () => {
        setOffCanvasVisible(false);
    };
    const openOffCanvas = () => {
        setOffCanvasVisible(true);
    };
    return (
        <>
            <header className='flex bg-white underline-shadow align-items px-4 py-2 items-center justify-between'>
                <div>
                    <button type='button' onClick={openOffCanvas} className="material-symbols-outlined p-4">menu</button>
                </div>
                <div className='search-box flex-1 max-w-xl'>
                    <div className="mx-2">
                        <SearchBar />
                    </div>
                </div>
                <div className='profile'>
                    <Link href='profile' className="material-symbols-outlined p-4">
                        person
                    </Link>
                </div>
            </header>
            <nav>
                <OffCanvas offCanvasSate={{isOffCanvasVisible,closeOffCanvas}} />
            </nav>
        </>
    )
}

export default Navigation