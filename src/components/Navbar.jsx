import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    {
      title: "Jewelry & Accessories",
      path: "/",
    },
    {
      title: "Clothing & Shoes",
      path: "/",
    },
    {
      title: "Home & Living",
      path: "/",
    },
    {
      title: "Wedding & Party",
      path: "/",
    },
    {
      title: "Toys & Entertainment",
      path: "/",
    },
    {
      title: "Art & Collectiblesy",
      path: "/",
    },
    {
      title: "Craft Supplies & Tools",
      path: "/",
    },
  ];
  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0">
      <nav className="flex justify-between container md:py-4 pt-6 pb-3">
        <FaSearch className="text-black w-5 h-5 cursor-pointer hidden md:block"></FaSearch>
        <Link to="/"><img src={logo} alt="" /></Link>

        {/* account and shopping */}
        <div className="text-lg text-black sm:flex items-center gap-4 hidden">
          <a href="" className="flex items-center gap-2">
            <FaUser></FaUser>Account
          </a>
          <a href="" className="flex items-center gap-2">
            <FaShoppingBag />
            Shopping
          </a>
        </div>

        {/* navbar for sm device */}
        <div className="sm:hidden">
          <button  onClick={toggleMenu}>
            {
                isMenuOpen ? <FaTimes className="w-5 h-5 text-black"/>:<FaBars className="w-5 h-5 text-black" />
            }
          </button>
        </div>
      </nav>
      <hr />

      {/* category items */}

      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-black hidden  ">
          {navItems.map(({ title, path }) => (
            <li className="hover:text-orange-600" key={title}>
              <Link to="/">{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* only mbl menu item */}
      <div>
      <ul className={` bg-black text-white px-4 py-2 rounded ${isMenuOpen?"":"hidden"}`}>
          {navItems.map(({ title, path }) => (
            <li className="hover:text-orange-600 my-2 cursor-pointer" key={title}>
              <Link to="/">{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
