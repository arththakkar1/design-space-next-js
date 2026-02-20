"use client";
import { motion } from "motion/react";
import {
  MdArchitecture,
  MdSchedule,
  MdWork,
  MdWorkspacePremium,
} from "react-icons/md";
import { FadeSection } from "./FadeSection";
import Image from "next/image";

const whyItems = [
  {
    icon: MdArchitecture,
    title: "Custom Designs",
    desc: "Tailored architectural solutions that reflect your personal aesthetic and lifestyle.",
  },
  {
    icon: MdWorkspacePremium,
    title: "Premium Materials",
    desc: "Sourcing only the finest sustainable materials from global artisan suppliers.",
  },
  {
    icon: MdWork,
    title: "Expert Designers",
    desc: "Award-winning professionals with decades of industry experience and vision.",
  },
  {
    icon: MdSchedule,
    title: "On-Time Delivery",
    desc: "Rigorous project management ensuring your dream space is ready when promised.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="work" className="px-6 md:px-20 py-24 md:py-36 bg-[#faf8f4]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div>
          <FadeSection>
            <p className="font-body text-xs tracking-[0.32em] uppercase mb-5 text-[#c9a96e]">
              Why Choose Us
            </p>
          </FadeSection>
          <FadeSection delay={100}>
            <h2 className="font-display font-light leading-tight mb-8 text-[#1a1612] text-[clamp(2.4rem,3.5vw,4rem)]">
              Craftsmanship <br />
              <em className="italic text-[#c9a96e]">beyond</em> the ordinary
            </h2>
          </FadeSection>
          <FadeSection delay={200}>
            <p className="font-body font-light leading-loose text-[#8a7f72] text-[0.9rem] max-w-full md:max-w-95">
              We don&apos;t just design rooms — we sculpt experiences. Each
              project is a dialogue between your vision and our expertise,
              resulting in spaces that resonate deeply and endure beautifully.
            </p>
          </FadeSection>

          <FadeSection delay={300} className="mt-8 md:mt-14 relative">
            <div className="relative h-48 md:h-72 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=85"
                alt="Interior detail"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-20 md:w-32 h-20 md:h-32 bg-[#c9a96e] text-[#faf8f4] font-display font-light flex flex-col items-center justify-center text-center">
              <span className="text-[1.2rem] md:text-[2.2rem] leading-none">
                10+
              </span>
              <span className="font-body text-[0.6rem] tracking-widest uppercase mt-1">
                Countries Served
              </span>
            </div>
          </FadeSection>
        </div>

        <div className="grid grid-cols-1 mt-6 md:mt-8">
          {whyItems.map(({ icon: Icon, title, desc }, i) => (
            <FadeSection key={title} delay={i * 80}>
              <motion.div
                className="group flex flex-col md:flex-row items-start gap-4 md:gap-6 py-6 md:py-8 border-b border-[#8a7f72]/18"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 md:w-12 h-10 md:h-12 flex items-center justify-center shrink-0 border border-[#c9a96e]/40 group-hover:bg-[#c9a96e] transition-all duration-300">
                  <Icon
                    size={22}
                    className="text-[#c9a96e] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-body font-normal tracking-wide mb-2 text-[#1a1612] text-[0.95rem]">
                    {title}
                  </h3>
                  <p className="font-body font-light leading-relaxed text-[#8a7f72] text-[0.85rem]">
                    {desc}
                  </p>
                </div>
              </motion.div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
