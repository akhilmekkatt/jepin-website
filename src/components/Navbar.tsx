import Link from "next/link";
import logo from "../assets/logo.svg";
import logo_dark from "../assets/logo_dark.svg";
import { useEffect, useState } from "react";

export default function Navbar(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setIsDark(false);
      document.documentElement.setAttribute("data-theme", "light");
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: any) => {
      const newTheme = e.matches ? "dark" : "light";
      setIsDark(e.matches);
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav
      className={
        props?.sticky ? "bg-dark p-4 sticky top-0 z-50 " : "p-4 custom-sticky "
      }
    >
      <div className="flex md:flex-col md:mb-10 justify-between">
        {/* Logo */}
        {!isDark && props?.sticky ? (
          <img src={logo_dark.src} alt="Logo" className="h-10 md:my-4 _logo" />
        ) : (
          <img src={logo.src} alt="Logo" className="h-10 md:my-4 _logo" />
        )}

        {/* Theme Toggle and Hamburger Menu Button (Mobile) */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="w-6 h-6 floating-menu"
          >
            {isDark ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke={
                  props?.sticky ? "var(--foreground)" : "var(--background)"
                }
                strokeWidth="2"
                className="w-full h-full"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke={
                  props?.sticky ? "var(--foreground)" : "var(--background)"
                }
                strokeWidth="2"
                className="w-full h-full"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5  ${
                props?.sticky
                  ? "bg-[var(--foreground)]"
                  : "bg-[var(--background)]"
              } transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5  ${
                props?.sticky
                  ? "bg-[var(--foreground)]"
                  : "bg-[var(--background)]"
              } transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5  ${
                props?.sticky
                  ? "bg-[var(--foreground)]"
                  : "bg-[var(--background)]"
              } transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center gap-6">
          <li>
            <Link
              href="/"
              className="hover:text-red-500  transition delay-100 duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-red-500  transition delay-100 duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/festivals"
              className="hover:text-red-500  transition delay-100 duration-300"
            >
              Festivals
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-red-500  transition delay-100 duration-300"
            >
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
          <Link
            href="/"
            className="hover:text-red-500 font-bold"
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-red-500 font-bold"
            onClick={toggleMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/festivals"
            className="hover:text-red-500 font-bold"
            onClick={toggleMenu}
          >
            Festivals
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-red-500 font-bold"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
