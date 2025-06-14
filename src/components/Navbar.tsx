import Link from "next/link";
import logo from "../assets/logo.svg";
import logo_dark from "../assets/logo_dark.svg";
import { useEffect, useState } from "react";

export default function Navbar(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Detect dark mode
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <nav
      className={
        props?.sticky ? "bg-dark p-4 sticky top-0 z-50" : "p-4 custom-sticky"
      }
    >
      <div className="flex md:flex-col md:mb-10 justify-between">
        {/* Logo */}
        {!isDarkMode && props?.sticky ? (
          <img src={logo_dark.src} alt="Logo" className="h-10 my-4" />
        ) : (
          <img src={logo.src} alt="Logo" className="h-10 my-4" />
        )}

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center gap-6">
          <li>
            <Link href="/" className="hover:text-red-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-red-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/festivals" className="hover:text-red-500">
              Festivals
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-red-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden flex flex-col items-center gap-4 mt-4 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <li>
          <Link href="/" className="hover:text-red-500" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-red-500"
            onClick={toggleMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/festivals"
            className="hover:text-red-500"
            onClick={toggleMenu}
          >
            Festivals
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-red-500"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
