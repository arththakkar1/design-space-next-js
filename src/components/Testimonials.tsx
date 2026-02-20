"use client";

import Image from "next/image";
import { useState } from "react";
import { FadeSection } from "./FadeSection";
import { motion, AnimatePresence } from "motion/react";
import { MdStar } from "react-icons/md";

const testimonials = [
  {
    quote:
      "DesignSpace transformed our penthouse into a modern masterpiece. Their attention to detail and choice of materials were impeccable.",
    name: "Alexandra Sterling",
    role: "CEO, TechFlow",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=774&auto=format&fit=crop",
  },
  {
    quote:
      "The transition from old to new was so smooth. Their project management is top-tier. I couldn't be happier with my new minimalist kitchen.",
    name: "James Harrington",
    role: "Architect",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=774&auto=format&fit=crop",
  },
  {
    quote:
      "Every corner of our home now tells a story. The expert designers really listened to what we wanted and exceeded expectations.",
    name: "Elena Rodriguez",
    role: "Art Curator",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-24 md:py-36 px-6 md:px-20 bg-[#faf8f4]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div>
          <FadeSection>
            <p className="font-body text-xs tracking-[0.32em] uppercase mb-5 text-[#c9a96e]">
              Client Stories
            </p>
          </FadeSection>
          <FadeSection delay={100}>
            <h2 className="font-display font-light leading-tight mb-8 md:mb-16 text-[#1a1612] text-[clamp(1.4rem,2.5vw,4rem)] md:text-[clamp(2.4rem,3.5vw,4rem)]">
              What Our <br />
              <em className="italic text-[#c9a96e]">Clients Say</em>
            </h2>
          </FadeSection>

          <div className="flex gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <MdStar key={i} size={18} className="text-[#c9a96e]" />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={`quote-${active}`}
              className="font-display font-light italic leading-relaxed mb-6 md:mb-10 text-[#1a1612] text-[clamp(1rem,1.2vw,1.6rem)] md:text-[clamp(1.2rem,1.8vw,1.6rem)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              &ldquo;{t.quote}&rdquo;
            </motion.blockquote>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`author-${active}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <p className="font-body font-medium text-[#1a1612] text-[0.9rem]">
                {t.name}
              </p>
              <p className="font-body font-light text-sm mt-0.5 text-[#8a7f72]">
                {t.role}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2 md:gap-3 mt-6 md:mt-10">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className="h-0.75 border-none outline-none rounded-none"
                animate={{
                  width: active === i ? 36 : 10,
                  backgroundColor:
                    active === i ? "#c9a96e" : "rgba(138,127,114,0.3)",
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        <FadeSection delay={200} className="relative h-80 md:h-135">
          {testimonials.map(({ img, name }, i) => {
            const positions = [
              { top: "0%", left: "10%", w: 180, h: 220 },
              { top: "20%", left: "50%", w: 140, h: 180 },
              { top: "55%", left: "20%", w: 120, h: 140 },
            ];
            const p = positions[i];
            return (
              <motion.div
                key={name}
                className="absolute overflow-hidden cursor-pointer"
                style={{ top: p.top, left: p.left, width: p.w, height: p.h }}
                animate={{
                  opacity: active === i ? 1 : 0.35,
                  scale: active === i ? 1.04 : 1,
                  zIndex: active === i ? 3 : 1,
                  outline:
                    active === i
                      ? "2px solid #c9a96e"
                      : "2px solid transparent",
                  outlineOffset: active === i ? "6px" : "0px",
                }}
                transition={{ duration: 0.5 }}
                onClick={() => setActive(i)}
              >
                <Image src={img} alt={name} fill className="object-cover" />
              </motion.div>
            );
          })}
        </FadeSection>
      </div>
    </section>
  );
}
