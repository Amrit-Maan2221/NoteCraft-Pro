import React, { useEffect, useState } from 'react'
import Link from "next/link";

function OffCanvas({ offCanvasSate }: any) {
    const {isOffCanvasVisible,closeOffCanvas} = offCanvasSate;

    return (
        <div>
            <div className={`${isOffCanvasVisible ? 'opacity-50': 'opacity-0 hidden'} h-screen w-screen bg-black top-0 left-0 fixed transition-opacity duration-500 ease-linear`} onClick={closeOffCanvas} />
            <div className={`bg-white h-screen w-72 fixed top-0 left-0 ${isOffCanvasVisible ? 'translate-x-0' :'-translate-x-full'} transition-translate duration-200 ease-linear`}>
                <div className='flex flex-col justify-between items-center w-full'>
                    <div className='flex underline-shadow py-2 pl-4 w-full items-center'>
                        <div className='flex logo flex-1 justify-between items-center'>
                            <img
                                className='h-12'
                                src="/assets/icons/logo.svg"
                                alt="NoteCraft Logo"
                            />
                            <h1 className='text-center text-2xl font-bold text-gray-900 flex-1'>
                                Note Craft
                            </h1>
                        </div>
                        <button type='button' onClick={closeOffCanvas} className="material-symbols-outlined p-4">close</button>
                    </div>
                    <ul className="flex flex-col w-full py-4 pr-4">
                        <li onClick={closeOffCanvas} >
                            <Link href='/home' className="site-menu-item">
                                <span className="material-symbols-outlined">
                                    text_snippet
                                </span>
                                Notes
                            </Link>
                        </li>
                        <li onClick={closeOffCanvas} >
                            <Link href='/bin' className="site-menu-item" >
                                <span className="material-symbols-outlined">
                                    delete
                                </span>
                                Bin
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OffCanvas