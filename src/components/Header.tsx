import Link from "next/link";

const NAV_LINKS = [
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/journal", label: "Journal" },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-[#65c506]">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.1288 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-xl font-extrabold text-black tracking-tight">
            DesignSpace
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-600 hover:text-[#65c506] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-deep-olive text-white bg-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-black/80 transition-all"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
