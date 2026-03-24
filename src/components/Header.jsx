import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { config } from "../config";

const Header = ({ setIsOpen }) => {
  const { theme } = config;

  return (
    <div
      className="flex justify-between items-center fixed inset-x-0 p-5 bg-white/80 backdrop-blur-md shadow-sm z-30 border-b"
      style={{ borderColor: theme.border }}
    >
      <Link
        to="/"
        className="text-2xl md:text-4xl font-bold tracking-tight"
        style={{ color: theme.dark }}
      >
        {config.businessName}
      </Link>

      <div className="hidden md:flex items-center gap-2">
        <Link
          to="/products"
          className="px-4 py-2 rounded-xl text-lg font-medium transition-colors duration-200 hover:bg-gray-100"
          style={{ color: theme.dark }}
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
        <Menu size={28} style={{ color: theme.dark }} />
      </button>
    </div>
  );
};

export default Header;
