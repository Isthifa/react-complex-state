import React from "react";
import "../index.css";

export default function NavBar() {
    return (
        <div className="NavBar">
            <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
                <a href="/" className="pl-8">Tailwind CSS</a>
                <div className="px-4 cursor-pointer md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </div>
                <div className="pr-8 md:block hidden">
                    <a href="/" className="p-4">Home</a>
                    <a href="/" className="p-4">About</a>
                    <a href="/" className="p-4">Contact</a>
                </div>
            </nav>
        </div>

    )
}