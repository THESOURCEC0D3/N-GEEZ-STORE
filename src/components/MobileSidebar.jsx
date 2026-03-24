import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { config } from "../config";

export default function MobileSidebar({ isOpen, setIsOpen }) {
  const { theme } = config;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-64 bg-white z-50 p-6 shadow-xl"
          >
            <button onClick={() => setIsOpen(false)} className="mb-8">
              <X size={28} style={{ color: theme.dark }} />
            </button>

            <nav className="flex flex-col gap-4 text-base font-medium">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-xl transition-colors duration-200"
                style={{ color: theme.dark, backgroundColor: theme.pageBg }}
              >
                Home
              </Link>
              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-xl transition-colors duration-200"
                style={{ color: theme.dark, backgroundColor: theme.pageBg }}
              >
                Products
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-xl text-white transition-colors duration-200"
                style={{ backgroundColor: theme.accent }}
              >
                Contact Us
              </Link>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
