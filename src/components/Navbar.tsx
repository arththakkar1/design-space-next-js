"use client";
import { useEffect, useState } from "react";
import ScrollToLink from "./ScrollToLink";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = ["Work", "Services", "Process", "Journal"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <span className="font-bold text-lg tracking-tight">DesignSpace</span>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l}>
                <ScrollToLink to={`#${l.toLowerCase()}`}>{l}</ScrollToLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <ScrollToLink
            to="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
          >
            Book Consult
          </ScrollToLink>

          {/* Hamburger button (mobile only) */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {links.map((l) => (
            <li key={l}>
              <ScrollToLink
                to={`#${l.toLowerCase()}`}
                className="text-3xl font-semibold tracking-tight hover:opacity-50 transition-opacity"
                onClick={() => setMenuOpen(false)}
              >
                {l}
              </ScrollToLink>
            </li>
          ))}
        </ul>

        <ScrollToLink
          to="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-6 py-3 rounded-full bg-black text-white text-base font-medium hover:bg-neutral-800 transition-colors"
        >
          Book Consult
        </ScrollToLink>
      </div>
    </>
  );
}
