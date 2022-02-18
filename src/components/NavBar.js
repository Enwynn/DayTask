import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

// The NavBar component,

const Navbar = () => {

    return (

        <nav className="bg-gray-700 h-24 ">

            <div className="flex items-center justify-between pr-20">

                {/*!-- Logo and the website name --!*/}

                <div className="flex pr-5  m-5">
                    <div className="pl-5">
                        {Logo()}
                    </div>

                    <div>
                        <p className="text-white font-bold p-2 order-first font text-3xl">DayTask</p>
                    </div>
                </div>

                {/*!-- The link section of the navbar --!*/}

                <div className="flex pr-11 text-2xl">
                    <div>

                            <Link className="text-red-500 hover:text-red-400 p-2 transition-all" to="/">Home</Link>
                        </div>

                        <div>
                            <Link className="text-red-500 hover:text-red-400 p-2 transition-all"
                                  to="/about">About</Link>
                        </div>
                        <div>
                            <Link className="text-red-500 hover:text-red-400 p-2 transition-all"
                                x  to="/contact">Contact</Link>
                        </div>
                    
                </div>

                {/*!-- Sign in --!*/}

                <div className="pr-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
                        <path
                            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/>
                    </svg>

                </div>


            </div>

        </nav>

    )

    // Logo for the NavBar

    function Logo() {
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-10" fill="pink" viewBox="0 0 24 24"
                    stroke="red">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
        </svg>;
    }

}
export default Navbar;



