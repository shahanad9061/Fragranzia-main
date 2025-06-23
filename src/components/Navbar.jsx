import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaBell, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items || []);
  const cartCount = cartItems.length; 

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <div className=
        "text-2xl font-bold 
        text-blue-900 
        mr-6
        animate-ap
        ">Fragranzia</div>

        <ul className="hidden lg:flex gap-6 font-medium text-gray-700 flex-grow justify-end">
          <li className=" font-semibold pb-1">
            <Link to="/" className="hover:text-blue-900">Home</Link>
          </li>
          <li className="hover:text-blue-900 cursor-pointer">
            <Link to="/products" className="hover:text-blue-900">Products</Link>
          </li>
          <li className="hover:text-blue-900 cursor-pointer">Gifting</li>
          <li className="hover:text-blue-900 cursor-pointer">
            <Link to="/About" className="hover:text-blue-900">About</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center border rounded-full px-4 py-2 bg-gray-100">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search Here"
              className="bg-transparent outline-none text-sm w-40"
            />
          </div>

        <div className="flex gap-3">
          <button className="relative p-2 rounded-full border hover:bg-gray-100">
            <Link to="/Cart" className="hover:text-blue-900">
              <FaShoppingCart className="text-xl" />
              {cartCount >= 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </button>
            <button className="p-2 rounded-full border hover:bg-gray-100">
              <FaBell />
            </button>
            <button className="p-2 rounded-full border hover:bg-gray-100">
              <FaUser />
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <ul className="flex flex-col gap-4 mt-4 font-medium text-gray-700 lg:hidden">
          <li className="text-blue-900 font-semibold">Home</li>
          <li className="hover:text-blue-900 cursor-pointer">Products</li>
          <li className="hover:text-blue-900 cursor-pointer">Gifting</li>
          <li className="hover:text-blue-900 cursor-pointer">About</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;