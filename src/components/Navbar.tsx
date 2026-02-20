"use client";
import { useEffect, useState } from "react";
import ScrollToLink from "./ScrollToLink";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-[#faf8f4]/95 backdrop-blur-xl border-b border-[#c9a96e]/20"
          : "py-7 bg-transparent"
      }`}
    >
      <ScrollToLink
        to="#hero"
        className="font-display text-2xl font-light tracking-widest text-[#1a1612]"
      >
        Design<span className="text-[#c9a96e]">Space</span>
      </ScrollToLink>

      <ul className="flex gap-10 list-none">
        {["Work", "Services", "Process", "Journal"].map((l) => (
          <li key={l}>
            <ScrollToLink
              to={`#${l.toLowerCase()}`}
              className="font-body text-xs tracking-[0.22em] uppercase text-[#8a7f72]/80 hover:text-[#c9a96e] hover:opacity-100 transition-all duration-300"
            >
              {l}
            </ScrollToLink>
          </li>
        ))}
      </ul>

      <ScrollToLink
        to="#contact"
        className="font-body text-xs tracking-[0.2em] uppercase px-6 py-3 border border-[#c9a96e] text-[#1a1612] hover:bg-[#c9a96e] hover:text-[#faf8f4] transition-all duration-300"
      >
        Book Consult
      </ScrollToLink>
    </nav>
  );
}
