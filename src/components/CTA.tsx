"use client";

import { FadeSection } from "./FadeSection";
import { motion } from "motion/react";

export function CTA() {
  return (
    <section
      id="contact"
      className="py-36 px-20 relative overflow-hidden bg-[#f7f2ea]"
    >
      <p className="absolute -bottom-6 left-0 right-0 text-center font-display font-light select-none pointer-events-none leading-none text-[clamp(6rem,14vw,16rem)] text-[#c9a96e]/[0.07] whitespace-nowrap">
        DesignSpace
      </p>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <FadeSection>
          <p className="font-body text-xs tracking-[0.32em] uppercase mb-6 text-[#c9a96e]">
            Let&apos;s Build Together
          </p>
        </FadeSection>
        <FadeSection delay={100}>
          <h2 className="font-display font-light leading-tight mb-8 text-[#1a1612] text-[clamp(2.8rem,4.5vw,5rem)]">
            Let&apos;s Build Your <br />
            <em className="italic text-[#c9a96e]">Dream Space</em>
          </h2>
        </FadeSection>
        <FadeSection delay={200}>
          <p className="font-body font-light leading-loose mb-12 text-[#8a7f72] text-[0.9rem]">
            Join hundreds of satisfied homeowners who have elevated their living
            experience with DesignSpace&apos;s bespoke design services.
          </p>
        </FadeSection>
        <FadeSection delay={300}>
          <motion.a
            href="#"
            className="inline-block font-body text-xs tracking-[0.22em] uppercase px-12 py-5 bg-[#1a1612] text-[#faf8f4] cursor-pointer"
            whileHover={{ backgroundColor: "#c9a96e", y: -3 }}
            transition={{ duration: 0.3 }}
          >
            Get Started Today
          </motion.a>
        </FadeSection>
      </div>
    </section>
  );
}
