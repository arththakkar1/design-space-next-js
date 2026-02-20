"use client";
import { motion } from "motion/react";
import { FadeSection } from "./FadeSection";
import { MdArrowForward } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import ScrollToLink from "./ScrollToLink";

const services = [
  {
    title: "Living Room",
    desc: "Harmonious spaces for gathering and relaxation.",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
    num: "01",
  },
  {
    title: "Bedroom",
    desc: "Private sanctuaries designed for restful sleep.",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80",
    num: "02",
  },
  {
    title: "Kitchen",
    desc: "Functional elegance where culinary dreams come alive.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
    num: "03",
  },
  {
    title: "Office",
    desc: "Inspiring workspaces that foster creativity.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
    num: "04",
  },
];

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="py-36 px-20 bg-[#f7f2ea]">
      <div className="flex items-end justify-between mb-20">
        <div>
          <FadeSection>
            <p className="font-body text-xs tracking-[0.32em] uppercase mb-5 text-[#c9a96e]">
              Our Services
            </p>
          </FadeSection>
          <FadeSection delay={100}>
            <h2 className="font-display font-light leading-tight text-[#1a1612] text-[clamp(2.4rem,3.5vw,4rem)]">
              Transforming <em className="italic text-[#c9a96e]">every</em>
              <br /> corner of your life
            </h2>
          </FadeSection>
        </div>
        <FadeSection delay={150}>
          <ScrollToLink
            to="#hero"
            className="font-body text-xs tracking-[0.2em] uppercase flex items-center gap-3 text-[#8a7f72] hover:text-[#c9a96e] transition-colors duration-300 group"
          >
            View All Services
            <MdArrowForward
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </ScrollToLink>
        </FadeSection>
      </div>

      <div>
        {services.map(({ title, desc, img, num }, i) => (
          <FadeSection key={title} delay={i * 60}>
            <motion.div
              className="grid grid-cols-[80px_1fr_1fr_auto] items-center py-8 border-t border-[#8a7f72]/18 last:border-b last:border-[#8a7f72]/18 cursor-pointer"
              animate={{
                backgroundColor:
                  hovered === i ? "rgba(201,169,110,0.05)" : "rgba(0,0,0,0)",
              }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.span
                className="font-display font-light text-[1.1rem]"
                animate={{ color: hovered === i ? "#c9a96e" : "#8a7f72" }}
                transition={{ duration: 0.3 }}
              >
                {num}
              </motion.span>

              <motion.h3
                className="font-display font-light text-[#1a1612] text-[clamp(1.6rem,2.5vw,2.2rem)]"
                animate={{ x: hovered === i ? 8 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {title}
              </motion.h3>

              <p className="font-body font-light leading-relaxed text-[#8a7f72] text-[0.85rem] max-w-[320px]">
                {desc}
              </p>

              <motion.div
                className="relative overflow-hidden shrink-0"
                animate={{
                  width: hovered === i ? 160 : 0,
                  height: hovered === i ? 100 : 0,
                  opacity: hovered === i ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Image src={img} alt={title} fill className="object-cover" />
              </motion.div>
            </motion.div>
          </FadeSection>
        ))}
      </div>
    </section>
  );
}
