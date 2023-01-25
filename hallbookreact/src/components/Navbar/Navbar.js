import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

import { FaBars, FaTimes } from "react-icons/fa";


export default function Navbar() {

    const activeClassLink = "px-2 py-2.5 hover:bg-cprimary-300 hover:text-csecond-100 rounded-md transition bg-blue-200"
    const normalClassLink = "px-2 py-2.5 hover:bg-cprimary-300 hover:text-csecond-100 rounded-md transition"

  return (  
    <div>
      <nav className="w-full rounded-sm bg-cprimary-100 px-8 py-1 text-lg text-cprimary-800 shadow-lg">
        <div className="flex items-center justify-between">
          {/* logo and primary nav */}
          <div className="flex items-center space-x-10">
            {/* logo */}
            <div>
              <Link to="/" className="flex items-center space-x-2 px-2 py-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 cursor-pointer text-blue-500"
                >
                  <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                  <path
                    fillRule="evenodd"
                    d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-bold">BookHall</span>
              </Link>
            </div>
            {/* primary nav */}
            <div>
              <ul className="flex items-center space-x-6">
                <li>
                  <NavLink
                    to="/"
                    // className={`px-2 py-2.5 hover:bg-cprimary-300 hover:text-csecond-100 rounded-md transition ${({isActive})=>isActive?"bg-red-500":"bg-black-500"}`}
                    // className={({isActive})=>isActive?"bg-red-500":"bg-blue-500"}
                    // className={`${({isActive})=>isActive?"bg-red-500":"bg-blue-500"}`}
                    className={({isActive})=>isActive?activeClassLink:normalClassLink}
                
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about"
                  className={({isActive})=>isActive?activeClassLink:normalClassLink}
                  >About</NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* secondary nav */}
          <div>
            <NavLink to="/login" className={({isActive})=>isActive?activeClassLink:normalClassLink}>Login</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
