import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">
              Jepin Krishnan Photography
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Capturing the beauty of moments through a lens. Specializing in
              vibrant festivals and timeless portraits.
            </p>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="text-xl font-bold tracking-tight mb-4">Explore</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/festivals", label: "Festivals" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white hover:underline transition duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">Stay Connected</h3>
            <ul className="space-y-3">
              {[
                {
                  href: "https://instagram.com/jepinkrishnan",
                  label: "Instagram",
                },
                { href: "mailto:contact@jepinkrishnan.com", label: "Email" },
                {
                  href: "https://www.behance.net/jepinkrishnan",
                  label: "Behance",
                },
              ].map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white hover:underline transition duration-300"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} Jepin Krishnan Photography. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
