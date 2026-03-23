import React from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-blends", label: "Our Blends" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="container mx-auto px-6 py-3 bg-black/30 backdrop-blur-lg rounded-full border border-stone-700/60 shadow-lg">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold text-white tracking-wider">
            BLACK<span className="text-brown-400">UI</span>
          </NavLink>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `relative text-stone-200 hover:text-white transition-colors duration-300
                   after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-brown-400 after:transition-all after:duration-300
                   ${isActive ? "text-white after:w-full" : "after:w-0 hover:after:w-full"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-stone-200 hover:text-white transition-colors duration-300">
              <ShoppingCart size={22} />
            </button>
            <button
              className="md:hidden text-stone-200 hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-black/50 backdrop-blur-lg rounded-2xl border border-stone-700/60 p-6">
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg ${isActive ? "text-brown-300" : "text-stone-200"} hover:text-white transition-colors duration-300`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
