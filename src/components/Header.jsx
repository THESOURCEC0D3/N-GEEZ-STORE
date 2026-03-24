import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { config } from "../config";
import { useState, useEffect } from "react";

const Header = ({ setIsOpen }) => {
  const { theme } = config;
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const location = useLocation();
    const isHome = location.pathname === "/";
    const showBg = scrolled || !isHome;

  return (
    <div
      className={`flex justify-between items-center fixed inset-x-0 p-5 z-30 transition-all duration-300 m-2 rounded-4xl ${
        showBg ? "bg-white/80 backdrop-blur-md shadow-sm border-b" : ""
      }`}
      style={{ borderColor: scrolled ? theme.border : "transparent" }}
    >
      <Link
        to="/"
        className="text-3xl md:text-4xl font-bold tracking-tight"
        style={{ color: showBg ? theme.dark : theme.light }}
      >
        {config.businessName}
      </Link>

      <div className="hidden md:flex items-center gap-2">
        <Link
          to="/products"
          className="px-4 py-2 rounded-xl text-lg font-medium transition-colors duration-200 hover:bg-white/70"
          style={{ color: showBg ? theme.dark : theme.light }}
        >
          Products
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 rounded-xl text-lg font-medium text-white transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: theme.accent }}
        >
          Contact Us
        </Link>
      </div>

      <button onClick={() => setIsOpen(true)} className="md:hidden">
        <Menu size={30} style={{ color: showBg ? theme.dark : theme.light }} />
      </button>
    </div>
  );
};

export default Header;
