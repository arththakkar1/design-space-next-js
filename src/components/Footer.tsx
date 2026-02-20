"use client";

import { MdLocationOn, MdMail, MdPhone, MdPublic } from "react-icons/md";
import ScrollToLink from "./ScrollToLink";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-4 md:px-20 py-10 md:py-20 bg-[#2d2520]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 mb-8 md:mb-16 pb-8 md:pb-16 border-b border-white/8">
        <div className="col-span-1">
          <p className="font-display text-xl md:text-3xl font-light tracking-widest mb-2 md:mb-4 text-[#faf8f4]">
            Design<span className="text-[#c9a96e]">Space</span>
          </p>
          <p className="font-body font-light leading-loose text-xs text-[#faf8f4]/40 max-w-full md:max-w-55">
            Crafting premium interiors that redefine modern luxury and comfort.
          </p>
        </div>

        <div>
          <p className="font-body text-xs tracking-[0.25em] uppercase mb-4 md:mb-6 text-[#c9a96e]">
            Explore
          </p>
          <ul className="space-y-2 md:space-y-3">
            {["Gallery", "Designers", "Journal", "Reviews"].map((l) => (
              <li key={l}>
                <ScrollToLink
                  to="#hero"
                  className="font-body font-light text-xs tracking-wide text-[#faf8f4]/45 hover:text-[#c9a96e] transition-colors duration-300"
                >
                  {l}
                </ScrollToLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-xs tracking-[0.25em] uppercase mb-4 md:mb-6 text-[#c9a96e]">
            Contact
          </p>
          <ul className="space-y-2 md:space-y-4">
            <li className="flex items-center gap-2 md:gap-3">
              <MdMail size={14} className="text-[#c9a96e]" />
              <span className="font-body font-light text-xs text-[#faf8f4]/45">
                hello@designspace.com
              </span>
            </li>
            <li className="flex items-center gap-2 md:gap-3">
              <MdPhone size={14} className="text-[#c9a96e]" />
              <span className="font-body font-light text-xs text-[#faf8f4]/45">
                +1 (555) 000-1234
              </span>
            </li>
            <li className="flex items-center gap-2 md:gap-3">
              <MdLocationOn size={14} className="text-[#c9a96e]" />
              <span className="font-body font-light text-xs text-[#faf8f4]/45">
                123 Interior Ave, NY
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-body text-xs tracking-[0.25em] uppercase mb-4 md:mb-6 text-[#c9a96e]">
            Social
          </p>
          <ul className="space-y-2 md:space-y-3">
            {["Instagram", "Pinterest", "Behance", "LinkedIn"].map((s) => (
              <li key={s}>
                <Link
                  href="https://github.com/arththakkar1"
                  className="font-body font-light text-xs tracking-wide text-[#faf8f4]/45 hover:text-[#c9a96e] transition-colors duration-300 flex items-center gap-1 md:gap-2"
                >
                  <MdPublic size={13} />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
        <p className="font-body font-light text-xs tracking-wide text-[#faf8f4]/25">
          © 2026 DesignSpace Interior Collective. All rights reserved.
        </p>
        <div className="flex gap-4 md:gap-8">
          {["Privacy Policy", "Terms of Service"].map((l) => (
            <a
              key={l}
              href="#"
              className="font-body font-light text-xs tracking-wide text-[#faf8f4]/25 hover:text-[#c9a96e] transition-colors duration-300"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
