"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  MdWork,
  MdWorkspacePremium,
  MdArchitecture,
  MdSchedule,
  MdArrowForward,
  MdStar,
  MdMail,
  MdPhone,
  MdLocationOn,
  MdPublic,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToLink from "@/components/ScrollToLink";

/* ─── FadeSection ───────────────────────────────────────── */
function FadeSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Nav ───────────────────────────────────────────────── */
function Nav() {
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
      <a
        href="#"
        className="font-display text-2xl font-light tracking-widest text-[#1a1612]"
      >
        Design<span className="text-[#c9a96e]">Space</span>
      </a>

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

/* ─── Hero ──────────────────────────────────────────────── */
function Hero() {
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
    <section className="min-h-screen grid grid-cols-2 overflow-hidden">
      {/* Left */}
      <div className="flex flex-col justify-end px-20 pb-24 pt-36 relative z-10 bg-[#faf8f4]">
        <div className="absolute top-0 left-20 w-px h-32 bg-gradient-to-b from-transparent to-[#c9a96e] opacity-40" />

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
          <a
            href="#contact"
            className="font-body text-xs tracking-[0.2em] uppercase px-9 py-4 bg-[#1a1612] text-[#faf8f4] hover:bg-[#2d2520] transition-all duration-300 inline-block"
          >
            Book Free Consultation
          </a>
          <a
            href="#work"
            className="font-body text-xs tracking-[0.2em] uppercase flex items-center gap-3 text-[#8a7f72] hover:text-[#c9a96e] transition-all duration-300 group"
          >
            Explore Designs
            <span className="inline-block h-px w-7 group-hover:w-14 bg-[#8a7f72] group-hover:bg-[#c9a96e] transition-all duration-300" />
          </a>
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f4]/15 to-transparent" />

        {/* Scroll hint */}
        <div className="absolute bottom-10 right-10 flex flex-col items-center gap-3">
          <motion.div
            className="w-px h-14 bg-gradient-to-b from-[#c9a96e] to-transparent"
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

/* ─── Why Choose Us ─────────────────────────────────────── */
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

function WhyChooseUs() {
  return (
    <section id="work" className="px-20 py-36 bg-[#faf8f4]">
      <div className="grid grid-cols-2 gap-24 items-start">
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
            <p className="font-body font-light leading-loose text-[#8a7f72] text-[0.9rem] max-w-95">
              We don&apos;t just design rooms — we sculpt experiences. Each
              project is a dialogue between your vision and our expertise,
              resulting in spaces that resonate deeply and endure beautifully.
            </p>
          </FadeSection>

          <FadeSection delay={300} className="mt-14 relative">
            <div className="relative h-72 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=85"
                alt="Interior detail"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c9a96e] text-[#faf8f4] font-display font-light flex flex-col items-center justify-center text-center">
              <span className="text-[2.2rem] leading-none">10+</span>
              <span className="font-body text-[0.6rem] tracking-widest uppercase mt-1">
                Countries Served
              </span>
            </div>
          </FadeSection>
        </div>

        <div className="grid grid-cols-1 mt-8">
          {whyItems.map(({ icon: Icon, title, desc }, i) => (
            <FadeSection key={title} delay={i * 80}>
              <motion.div
                className="group flex items-start gap-6 py-8 border-b border-[#8a7f72]/18"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 flex items-center justify-center shrink-0 border border-[#c9a96e]/40 group-hover:bg-[#c9a96e] transition-all duration-300">
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

/* ─── Services ──────────────────────────────────────────── */
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

function Services() {
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
          <a
            href="#"
            className="font-body text-xs tracking-[0.2em] uppercase flex items-center gap-3 text-[#8a7f72] hover:text-[#c9a96e] transition-colors duration-300 group"
          >
            View All Services
            <MdArrowForward
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
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

/* ─── Process ───────────────────────────────────────────── */
const steps = [
  {
    n: "01",
    title: "Consultation",
    desc: "Understanding your vision, spatial needs and lifestyle goals through an in-depth discovery session.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Crafting moodboards, material palettes and photorealistic 3D architectural renders of your space.",
  },
  {
    n: "03",
    title: "Execution",
    desc: "Premium craftsmanship meets meticulous project management — on site every step of the way.",
  },
  {
    n: "04",
    title: "Delivery",
    desc: "The final reveal of your dream interior space, styled and ready for you to move in.",
  },
];

function Process() {
  return (
    <section id="process" className="py-36 bg-[#1a1612]">
      <div className="px-20">
        <FadeSection>
          <p className="font-body text-xs tracking-[0.32em] uppercase mb-5 text-[#c9a96e]">
            The Design Journey
          </p>
        </FadeSection>
        <FadeSection delay={100}>
          <h2 className="font-display font-light leading-tight mb-20 text-[#faf8f4] text-[clamp(2.4rem,3.5vw,4rem)]">
            A seamless process <br />
            from{" "}
            <em className="italic text-[#c9a96e]">concept to completion</em>
          </h2>
        </FadeSection>

        <div className="grid grid-cols-4 gap-0">
          {steps.map(({ n, title, desc }, i) => (
            <FadeSection key={title} delay={i * 80}>
              <div className="relative pt-12 pr-10 border-t border-[#c9a96e]/35">
                <div className="absolute -top-[7px] left-0 w-3.5 h-3.5 rounded-full bg-[#c9a96e]" />
                <span className="font-display font-light block mb-6 text-[3.5rem] text-[#c9a96e]/25 leading-none">
                  {n}
                </span>
                <h3 className="font-body tracking-wide mb-4 text-[#faf8f4] text-base">
                  {title}
                </h3>
                <p className="font-body font-light leading-loose text-[#faf8f4]/45 text-[0.83rem]">
                  {desc}
                </p>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ──────────────────────────────────────── */
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

function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-36 px-20 bg-[#faf8f4]">
      <div className="grid grid-cols-2 gap-24 items-center">
        <div>
          <FadeSection>
            <p className="font-body text-xs tracking-[0.32em] uppercase mb-5 text-[#c9a96e]">
              Client Stories
            </p>
          </FadeSection>
          <FadeSection delay={100}>
            <h2 className="font-display font-light leading-tight mb-16 text-[#1a1612] text-[clamp(2.4rem,3.5vw,4rem)]">
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
              className="font-display font-light italic leading-relaxed mb-10 text-[#1a1612] text-[clamp(1.2rem,1.8vw,1.6rem)]"
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

          <div className="flex gap-3 mt-10">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className="h-[3px] border-none outline-none rounded-none"
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

        <FadeSection delay={200} className="relative h-[540px]">
          {testimonials.map(({ img, name }, i) => {
            const positions = [
              { top: "0%", left: "10%", w: 260, h: 340 },
              { top: "20%", left: "50%", w: 220, h: 280 },
              { top: "55%", left: "20%", w: 200, h: 240 },
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

/* ─── CTA ───────────────────────────────────────────────── */
function CTA() {
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

/* ─── Footer ────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="px-20 py-20 bg-[#2d2520]">
      <div className="grid grid-cols-4 gap-16 mb-16 pb-16 border-b border-white/8">
        <div className="col-span-1">
          <p className="font-display text-3xl font-light tracking-widest mb-4 text-[#faf8f4]">
            Design<span className="text-[#c9a96e]">Space</span>
          </p>
          <p className="font-body font-light leading-loose text-xs text-[#faf8f4]/40 max-w-[220px]">
            Crafting premium interiors that redefine modern luxury and comfort.
          </p>
        </div>

        <div>
          <p className="font-body text-xs tracking-[0.25em] uppercase mb-6 text-[#c9a96e]">
            Explore
          </p>
          <ul className="space-y-3">
            {["Gallery", "Designers", "Journal", "Reviews"].map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="font-body font-light text-xs tracking-wide text-[#faf8f4]/45 hover:text-[#c9a96e] transition-colors duration-300"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-xs tracking-[0.25em] uppercase mb-6 text-[#c9a96e]">
            Contact
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <MdMail size={14} className="text-[#c9a96e]" />
              <span className="font-body font-light text-xs text-[#faf8f4]/45">
                hello@designspace.com
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MdPhone size={14} className="text-[#c9a96e]" />
              <span className="font-body font-light text-xs text-[#faf8f4]/45">
                +1 (555) 000-1234
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MdLocationOn size={14} className="text-[#c9a96e]" />
              <span className="font-body font-light text-xs text-[#faf8f4]/45">
                123 Interior Ave, NY
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-body text-xs tracking-[0.25em] uppercase mb-6 text-[#c9a96e]">
            Social
          </p>
          <ul className="space-y-3">
            {["Instagram", "Pinterest", "Behance", "LinkedIn"].map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="font-body font-light text-xs tracking-wide text-[#faf8f4]/45 hover:text-[#c9a96e] transition-colors duration-300 flex items-center gap-2"
                >
                  <MdPublic size={13} />
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="font-body font-light text-xs tracking-wide text-[#faf8f4]/25">
          © 2024 DesignSpace Interior Collective. All rights reserved.
        </p>
        <div className="flex gap-8">
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

/* ─── Page ──────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
