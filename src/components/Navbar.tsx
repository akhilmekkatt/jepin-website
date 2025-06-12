import Link from "next/link";
import logo from "../assets/logo.svg";
import { useState } from "react";

export default function Navbar(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={
        props?.sticky
          ? "bg-dark shadow-md p-4 flex flex-col my-5 sticky top-0 z-50"
          : "p-4 flex flex-col lex flex-col my-5 custom-sticky"
      }
    >
      <img src={logo.src} alt="Logo" className="h-10" />

      {/* Desktop Menu */}
      <ul className="mt-6 flex justify-center gap-6 text-lg font-medium">
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
    </nav>
  );
}
