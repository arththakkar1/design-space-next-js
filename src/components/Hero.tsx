"use client";
import Image from "next/image";
import { motion } from "motion/react";
import ScrollToLink from "./ScrollToLink";

export function Hero() {
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      delay,
    },
  });

  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-2 overflow-hidden"
    >
      {/* Left */}
      <div className="flex flex-col justify-end px-20 pb-24 pt-36 relative z-10 bg-[#faf8f4]">
        <div className="absolute top-0 left-20 w-px h-32 bg-linear-to-b from-transparent to-[#c9a96e] opacity-40" />

        <motion.p
          className="font-body text-xs tracking-[0.35em] uppercase mb-8 text-[#c9a96e]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
        >
          Award-winning interior studio
        </motion.p>

        <motion.h1
          className="font-display font-light leading-[1.06] mb-8 text-[#1a1612] text-[clamp(3.4rem,5vw,5.8rem)]"
          {...fadeUp(0.5)}
        >
          Designing Spaces <br />
          That <em className="italic text-[#c9a96e]">Feel Like</em>
          <br /> Home
        </motion.h1>

        <motion.p
          className="font-body font-light leading-relaxed mb-14 max-w-sm text-[#8a7f72] text-[0.9rem]"
          {...fadeUp(0.7)}
        >
          Personalized interiors crafted with style and comfort. Experience
          luxury living tailored to your lifestyle.
        </motion.p>

        <motion.div className="flex items-center gap-6" {...fadeUp(0.9)}>
          <ScrollToLink
            to="#contact"
            className="font-body text-xs tracking-[0.2em] uppercase px-9 py-4 bg-[#1a1612] text-[#faf8f4] hover:bg-[#2d2520] transition-all duration-300 inline-block"
          >
            Book Free Consultation
          </ScrollToLink>
          <ScrollToLink
            to="#work"
            className="font-body text-xs tracking-[0.2em] uppercase flex items-center gap-3 text-[#8a7f72] hover:text-[#c9a96e] transition-all duration-300 group"
          >
            Explore Designs
            <span className="inline-block h-px w-7 group-hover:w-14 bg-[#8a7f72] group-hover:bg-[#c9a96e] transition-all duration-300" />
          </ScrollToLink>
        </motion.div>

        <motion.div
          className="flex gap-10 mt-16 pt-10 border-t border-[#8a7f72]/20"
          {...fadeUp(1.1)}
        >
          {[
            ["320+", "Projects Done"],
            ["14", "Years of Excellence"],
            ["98%", "Client Satisfaction"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display font-light text-[2.2rem] text-[#c9a96e]">
                {n}
              </p>
              <p className="font-body text-xs tracking-widest uppercase mt-1 text-[#8a7f72]">
                {l}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right */}
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85"
          alt="Luxury interior living room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#faf8f4]/15 to-transparent" />

        {/* Scroll hint */}
        <div className="absolute bottom-10 right-10 flex flex-col items-center gap-3">
          <motion.div
            className="w-px h-14 bg-linear-to-b from-[#c9a96e] to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
          <p className="font-body text-xs tracking-[0.28em] uppercase text-[#faf8f4]/70">
            Scroll
          </p>
        </div>
      </motion.div>
    </section>
  );
}
