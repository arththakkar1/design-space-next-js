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

function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rx = 0,
      ry = 0,
      dx = 0,
      dy = 0;
    const move = (e: MouseEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      if (dot.current) {
        dot.current.style.left = `${dx}px`;
        dot.current.style.top = `${dy}px`;
      }
    };
    const raf = () => {
      rx += (dx - rx) * 0.12;
      ry += (dy - ry) * 0.12;
      if (ring.current) {
        ring.current.style.left = `${rx}px`;
        ring.current.style.top = `${ry}px`;
      }
      requestAnimationFrame(raf);
    };
    window.addEventListener("mousemove", move);
    requestAnimationFrame(raf);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="fixed z-9999 w-2.5 h-2.5 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
        style={{ background: "var(--gold)" }}
      />
      <div
        ref={ring}
        className="fixed z-9998 w-10 h-10 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ border: "1px solid var(--gold)", opacity: 0.45 }}
      />
    </>
  );
}

/* ─── Animated section wrapper ─────────────────────────── */
function FadeSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 transition-all duration-500"
      style={{
        paddingTop: scrolled ? 16 : 28,
        paddingBottom: scrolled ? 16 : 28,
        background: scrolled ? "rgba(250,248,244,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,169,110,0.2)" : "none",
      }}
    >
      <a
        href="#"
        className="font-display text-2xl font-light tracking-widest"
        style={{ color: "var(--ink)" }}
      >
        Design<span style={{ color: "var(--gold)" }}>Space</span>
      </a>

      <ul className="flex gap-10 list-none">
        {["Work", "Services", "Process", "Journal"].map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className="font-body text-xs tracking-[0.22em] uppercase transition-all duration-300"
              style={{ color: "var(--stone)", opacity: 0.8 }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.opacity = "1";
                (e.target as HTMLElement).style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.opacity = "0.8";
                (e.target as HTMLElement).style.color = "var(--stone)";
              }}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="font-body text-xs tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300"
        style={{
          border: "1px solid var(--gold)",
          color: "var(--ink)",
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.background = "var(--gold)";
          (e.target as HTMLElement).style.color = "var(--warm-white)";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.background = "transparent";
          (e.target as HTMLElement).style.color = "var(--ink)";
        }}
      >
        Book Consult
      </a>
    </nav>
  );
}

/* ─── Hero ──────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-2 overflow-hidden">
      {/* Left */}
      <div
        className="flex flex-col justify-end px-20 pb-24 pt-36 relative z-10"
        style={{ background: "var(--warm-white)" }}
      >
        {/* Decorative line */}
        <div
          className="absolute top-0 left-20 w-px h-32"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--gold))",
            opacity: 0.4,
          }}
        />

        <p
          className="font-body text-xs tracking-[0.35em] uppercase mb-8 opacity-0-start animate-fade-up"
          style={{
            color: "var(--gold)",
            animationDelay: "0.3s",
            animationFillMode: "forwards",
          }}
        >
          Award-winning interior studio
        </p>

        <h1
          className="font-display font-light leading-[1.06] mb-8 opacity-0-start animate-fade-up"
          style={{
            fontSize: "clamp(3.4rem, 5vw, 5.8rem)",
            color: "var(--ink)",
            animationDelay: "0.5s",
            animationFillMode: "forwards",
          }}
        >
          Designing Spaces <br />
          That{" "}
          <em className="italic" style={{ color: "var(--gold)" }}>
            Feel Like
          </em>
          <br /> Home
        </h1>

        <p
          className="font-body font-light leading-relaxed mb-14 max-w-sm opacity-0-start animate-fade-up"
          style={{
            color: "var(--stone)",
            fontSize: "0.9rem",
            animationDelay: "0.7s",
            animationFillMode: "forwards",
          }}
        >
          Personalized interiors crafted with style and comfort. Experience
          luxury living tailored to your lifestyle.
        </p>

        <div
          className="flex items-center gap-6 opacity-0-start animate-fade-up"
          style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
        >
          <a
            href="#contact"
            className="font-body text-xs tracking-[0.2em] uppercase px-9 py-4 transition-all duration-300 inline-block"
            style={{ background: "var(--ink)", color: "var(--warm-white)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "var(--deep)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--ink)")
            }
          >
            Book Free Consultation
          </a>
          <a
            href="#work"
            className="font-body text-xs tracking-[0.2em] uppercase flex items-center gap-3 transition-all duration-300 group"
            style={{ color: "var(--stone)" }}
          >
            Explore Designs
            <span
              className="inline-block h-px transition-all duration-300 group-hover:w-14"
              style={{ width: 28, background: "var(--stone)" }}
            />
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex gap-10 mt-16 pt-10 opacity-0-start animate-fade-up"
          style={{
            borderTop: "1px solid rgba(138,127,114,0.2)",
            animationDelay: "1.1s",
            animationFillMode: "forwards",
          }}
        >
          {[
            ["320+", "Projects Done"],
            ["14", "Years of Excellence"],
            ["98%", "Client Satisfaction"],
          ].map(([n, l]) => (
            <div key={l}>
              <p
                className="font-display font-light"
                style={{ fontSize: "2.2rem", color: "var(--gold)" }}
              >
                {n}
              </p>
              <p
                className="font-body text-xs tracking-widest uppercase mt-1"
                style={{ color: "var(--stone)" }}
              >
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — image */}
      <div
        className="relative overflow-hidden opacity-0-start animate-fade-in"
        style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85"
          alt="Luxury interior living room"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(250,248,244,0.15) 0%, transparent 40%)",
          }}
        />

        {/* Scroll hint */}
        <div className="absolute bottom-10 right-10 flex flex-col items-center gap-3">
          <div
            className="w-px h-14 animate-scroll-line"
            style={{
              background:
                "linear-gradient(to bottom, var(--gold), transparent)",
            }}
          />
          <p
            className="font-body text-xs tracking-[0.28em] uppercase"
            style={{ color: "rgba(250,248,244,0.7)" }}
          >
            Scroll
          </p>
        </div>
      </div>
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
    <section
      id="work"
      className="px-20 py-36"
      style={{ background: "var(--warm-white)" }}
    >
      <div className="grid grid-cols-2 gap-24 items-start">
        {/* Left text */}
        <div>
          <FadeSection>
            <p
              className="font-body text-xs tracking-[0.32em] uppercase mb-5"
              style={{ color: "var(--gold)" }}
            >
              Why Choose Us
            </p>
          </FadeSection>
          <FadeSection delay={100}>
            <h2
              className="font-display font-light leading-tight mb-8"
              style={{
                fontSize: "clamp(2.4rem,3.5vw,4rem)",
                color: "var(--ink)",
              }}
            >
              Craftsmanship <br />
              <em className="italic" style={{ color: "var(--gold)" }}>
                beyond
              </em>{" "}
              the ordinary
            </h2>
          </FadeSection>
          <FadeSection delay={200}>
            <p
              className="font-body font-light leading-loose"
              style={{
                color: "var(--stone)",
                fontSize: "0.9rem",
                maxWidth: 380,
              }}
            >
              We don't just design rooms — we sculpt experiences. Each project
              is a dialogue between your vision and our expertise, resulting in
              spaces that resonate deeply and endure beautifully.
            </p>
          </FadeSection>

          {/* Decorative image */}
          <FadeSection delay={300} className="mt-14 relative">
            <div className="relative h-72 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=85"
                alt="Interior detail"
                fill
                className="object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 font-display font-light flex flex-col items-center justify-center text-center"
              style={{ background: "var(--gold)", color: "var(--warm-white)" }}
            >
              <span style={{ fontSize: "2.2rem", lineHeight: 1 }}>10+</span>
              <span
                className="font-body text-xs tracking-widest uppercase mt-1"
                style={{ fontSize: "0.6rem" }}
              >
                Countries Served
              </span>
            </div>
          </FadeSection>
        </div>

        {/* Right grid */}
        <div className="grid grid-cols-1 gap-0 mt-8">
          {whyItems.map(({ icon: Icon, title, desc }, i) => (
            <FadeSection key={title} delay={i * 80}>
              <div
                className="group flex items-start gap-6 py-8 transition-all duration-300"
                style={{ borderBottom: "1px solid rgba(138,127,114,0.18)" }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-(--gold)"
                  style={{ border: "1px solid rgba(201,169,110,0.4)" }}
                >
                  <Icon
                    size={22}
                    style={{ color: "var(--gold)" }}
                    className="group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <h3
                    className="font-body font-normal tracking-wide mb-2"
                    style={{ color: "var(--ink)", fontSize: "0.95rem" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="font-body font-light leading-relaxed"
                    style={{ color: "var(--stone)", fontSize: "0.85rem" }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
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
    <section
      id="services"
      className="py-36 px-20"
      style={{ background: "var(--cream)" }}
    >
      {/* Header */}
      <div className="flex items-end justify-between mb-20">
        <div>
          <FadeSection>
            <p
              className="font-body text-xs tracking-[0.32em] uppercase mb-5"
              style={{ color: "var(--gold)" }}
            >
              Our Services
            </p>
          </FadeSection>
          <FadeSection delay={100}>
            <h2
              className="font-display font-light leading-tight"
              style={{
                fontSize: "clamp(2.4rem,3.5vw,4rem)",
                color: "var(--ink)",
              }}
            >
              Transforming{" "}
              <em className="italic" style={{ color: "var(--gold)" }}>
                every
              </em>
              <br /> corner of your life
            </h2>
          </FadeSection>
        </div>
        <FadeSection delay={150}>
          <a
            href="#"
            className="font-body text-xs tracking-[0.2em] uppercase flex items-center gap-3 transition-colors duration-300 group"
            style={{ color: "var(--stone)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--gold)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--stone)")
            }
          >
            View All Services
            <MdArrowForward
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </FadeSection>
      </div>

      {/* Service rows */}
      <div>
        {services.map(({ title, desc, img, num }, i) => (
          <FadeSection key={title} delay={i * 60}>
            <div
              className="group grid grid-cols-[80px_1fr_1fr_auto] items-center py-8 transition-all duration-400"
              style={{
                borderTop: "1px solid rgba(138,127,114,0.18)",
                borderBottom:
                  i === services.length - 1
                    ? "1px solid rgba(138,127,114,0.18)"
                    : "none",
                background:
                  hovered === i ? "rgba(201,169,110,0.05)" : "transparent",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Number */}
              <span
                className="font-display font-light transition-colors duration-300"
                style={{
                  fontSize: "1.1rem",
                  color: hovered === i ? "var(--gold)" : "var(--stone)",
                }}
              >
                {num}
              </span>

              {/* Title */}
              <h3
                className="font-display font-light transition-all duration-300"
                style={{
                  fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                  color: hovered === i ? "var(--ink)" : "var(--ink)",
                  transform:
                    hovered === i ? "translateX(8px)" : "translateX(0)",
                }}
              >
                {title}
              </h3>

              {/* Desc */}
              <p
                className="font-body font-light leading-relaxed"
                style={{
                  color: "var(--stone)",
                  fontSize: "0.85rem",
                  maxWidth: 320,
                }}
              >
                {desc}
              </p>

              {/* Hover image */}
              <div
                className="relative overflow-hidden shrink-0 transition-all duration-500"
                style={{
                  width: hovered === i ? 160 : 0,
                  height: hovered === i ? 100 : 0,
                  opacity: hovered === i ? 1 : 0,
                }}
              >
                <Image src={img} alt={title} fill className="object-cover" />
              </div>
            </div>
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
    <section
      id="process"
      className="py-36"
      style={{ background: "var(--ink)" }}
    >
      <div className="px-20">
        <FadeSection>
          <p
            className="font-body text-xs tracking-[0.32em] uppercase mb-5"
            style={{ color: "var(--gold)" }}
          >
            The Design Journey
          </p>
        </FadeSection>
        <FadeSection delay={100}>
          <h2
            className="font-display font-light leading-tight mb-20"
            style={{
              fontSize: "clamp(2.4rem,3.5vw,4rem)",
              color: "var(--warm-white)",
            }}
          >
            A seamless process <br />
            from{" "}
            <em className="italic" style={{ color: "var(--gold)" }}>
              concept to completion
            </em>
          </h2>
        </FadeSection>

        <div className="grid grid-cols-4 gap-0">
          {steps.map(({ n, title, desc }, i) => (
            <FadeSection key={title} delay={i * 80}>
              <div
                className="relative pt-12 pr-10"
                style={{ borderTop: "1px solid rgba(201,169,110,0.35)" }}
              >
                {/* Step dot */}
                <div
                  className="absolute -top-1.75 left-0 w-3.5 h-3.5 rounded-full"
                  style={{ background: "var(--gold)" }}
                />

                <span
                  className="font-display font-light block mb-6"
                  style={{
                    fontSize: "3.5rem",
                    color: "rgba(201,169,110,0.25)",
                    lineHeight: 1,
                  }}
                >
                  {n}
                </span>
                <h3
                  className="font-body tracking-wide mb-4"
                  style={{ color: "var(--warm-white)", fontSize: "1rem" }}
                >
                  {title}
                </h3>
                <p
                  className="font-body font-light leading-loose"
                  style={{
                    color: "rgba(250,248,244,0.45)",
                    fontSize: "0.83rem",
                  }}
                >
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
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The transition from old to new was so smooth. Their project management is top-tier. I couldn't be happier with my new minimalist kitchen.",
    name: "James Harrington",
    role: "Architect",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Every corner of our home now tells a story. The expert designers really listened to what we wanted and exceeded expectations.",
    name: "Elena Rodriguez",
    role: "Art Curator",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section
      className="py-36 px-20"
      style={{ background: "var(--warm-white)" }}
    >
      <div className="grid grid-cols-2 gap-24 items-center">
        {/* Left */}
        <div>
          <FadeSection>
            <p
              className="font-body text-xs tracking-[0.32em] uppercase mb-5"
              style={{ color: "var(--gold)" }}
            >
              Client Stories
            </p>
          </FadeSection>
          <FadeSection delay={100}>
            <h2
              className="font-display font-light leading-tight mb-16"
              style={{
                fontSize: "clamp(2.4rem,3.5vw,4rem)",
                color: "var(--ink)",
              }}
            >
              What Our <br />
              <em className="italic" style={{ color: "var(--gold)" }}>
                Clients Say
              </em>
            </h2>
          </FadeSection>

          {/* Stars */}
          <div className="flex gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <MdStar key={i} size={18} style={{ color: "var(--gold)" }} />
            ))}
          </div>

          {/* Quote */}
          <blockquote
            key={active}
            className="font-display font-light leading-relaxed mb-10"
            style={{
              fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)",
              color: "var(--ink)",
              fontStyle: "italic",
              opacity: 0,
              animation: "fadeUp 0.6s ease forwards",
            }}
          >
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <div
            key={`author-${active}`}
            style={{ opacity: 0, animation: "fadeUp 0.6s ease 0.15s forwards" }}
          >
            <p
              className="font-body font-medium"
              style={{ color: "var(--ink)", fontSize: "0.9rem" }}
            >
              {t.name}
            </p>
            <p
              className="font-body font-light text-sm mt-0.5"
              style={{ color: "var(--stone)" }}
            >
              {t.role}
            </p>
          </div>

          {/* Pagination */}
          <div className="flex gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-300"
                style={{
                  width: active === i ? 36 : 10,
                  height: 3,
                  background:
                    active === i ? "var(--gold)" : "rgba(138,127,114,0.3)",
                  border: "none",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right — portrait collage */}
        <FadeSection delay={200} className="relative h-135">
          {testimonials.map(({ img, name }, i) => {
            const positions = [
              { top: "0%", left: "10%", w: 260, h: 340 },
              { top: "20%", left: "50%", w: 220, h: 280 },
              { top: "55%", left: "20%", w: 200, h: 240 },
            ];
            const p = positions[i];
            return (
              <div
                key={name}
                className="absolute overflow-hidden transition-all duration-500"
                style={{
                  top: p.top,
                  left: p.left,
                  width: p.w,
                  height: p.h,
                  opacity: active === i ? 1 : 0.35,
                  transform: active === i ? "scale(1.04)" : "scale(1)",
                  zIndex: active === i ? 3 : 1,
                  outline: active === i ? "2px solid var(--gold)" : "none",
                  outlineOffset: 6,
                }}
                onClick={() => setActive(i)}
              >
                <Image src={img} alt={name} fill className="object-cover" />
              </div>
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
      className="py-36 px-20 relative overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Big background text */}
      <p
        className="absolute -bottom-6 left-0 right-0 text-center font-display font-light select-none pointer-events-none leading-none"
        style={{
          fontSize: "clamp(6rem, 14vw, 16rem)",
          color: "rgba(201,169,110,0.07)",
          whiteSpace: "nowrap",
        }}
      >
        DesignSpace
      </p>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <FadeSection>
          <p
            className="font-body text-xs tracking-[0.32em] uppercase mb-6"
            style={{ color: "var(--gold)" }}
          >
            Let&apos;s Build Together
          </p>
        </FadeSection>
        <FadeSection delay={100}>
          <h2
            className="font-display font-light leading-tight mb-8"
            style={{
              fontSize: "clamp(2.8rem, 4.5vw, 5rem)",
              color: "var(--ink)",
            }}
          >
            Let&apos;s Build Your <br />
            <em className="italic" style={{ color: "var(--gold)" }}>
              Dream Space
            </em>
          </h2>
        </FadeSection>
        <FadeSection delay={200}>
          <p
            className="font-body font-light leading-loose mb-12"
            style={{ color: "var(--stone)", fontSize: "0.9rem" }}
          >
            Join hundreds of satisfied homeowners who have elevated their living
            experience with DesignSpace&apos;s bespoke design services.
          </p>
        </FadeSection>
        <FadeSection delay={300}>
          <a
            href="#"
            className="inline-block font-body text-xs tracking-[0.22em] uppercase px-12 py-5 transition-all duration-300"
            style={{ background: "var(--ink)", color: "var(--warm-white)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--gold)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--ink)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            Get Started Today
          </a>
        </FadeSection>
      </div>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="px-20 py-20" style={{ background: "var(--deep)" }}>
      <div
        className="grid grid-cols-4 gap-16 mb-16 pb-16"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Brand */}
        <div className="col-span-1">
          <p
            className="font-display text-3xl font-light tracking-widest mb-4"
            style={{ color: "var(--warm-white)" }}
          >
            Design<span style={{ color: "var(--gold)" }}>Space</span>
          </p>
          <p
            className="font-body font-light leading-loose text-xs"
            style={{ color: "rgba(250,248,244,0.4)", maxWidth: 220 }}
          >
            Crafting premium interiors that redefine modern luxury and comfort.
          </p>
        </div>

        {/* Explore */}
        <div>
          <p
            className="font-body text-xs tracking-[0.25em] uppercase mb-6"
            style={{ color: "var(--gold)" }}
          >
            Explore
          </p>
          <ul className="space-y-3">
            {["Gallery", "Designers", "Journal", "Reviews"].map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="font-body font-light text-xs tracking-wide transition-colors duration-300"
                  style={{ color: "rgba(250,248,244,0.45)" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "rgba(250,248,244,0.45)")
                  }
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p
            className="font-body text-xs tracking-[0.25em] uppercase mb-6"
            style={{ color: "var(--gold)" }}
          >
            Contact
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <MdMail size={14} style={{ color: "var(--gold)" }} />
              <span
                className="font-body font-light text-xs"
                style={{ color: "rgba(250,248,244,0.45)" }}
              >
                hello@designspace.com
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MdPhone size={14} style={{ color: "var(--gold)" }} />
              <span
                className="font-body font-light text-xs"
                style={{ color: "rgba(250,248,244,0.45)" }}
              >
                +1 (555) 000-1234
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MdLocationOn size={14} style={{ color: "var(--gold)" }} />
              <span
                className="font-body font-light text-xs"
                style={{ color: "rgba(250,248,244,0.45)" }}
              >
                123 Interior Ave, NY
              </span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <p
            className="font-body text-xs tracking-[0.25em] uppercase mb-6"
            style={{ color: "var(--gold)" }}
          >
            Social
          </p>
          <ul className="space-y-3">
            {["Instagram", "Pinterest", "Behance", "LinkedIn"].map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="font-body font-light text-xs tracking-wide transition-colors duration-300 flex items-center gap-2"
                  style={{ color: "rgba(250,248,244,0.45)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(250,248,244,0.45)")
                  }
                >
                  <MdPublic size={13} />
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between">
        <p
          className="font-body font-light text-xs tracking-wide"
          style={{ color: "rgba(250,248,244,0.25)" }}
        >
          © 2024 DesignSpace Interior Collective. All rights reserved.
        </p>
        <div className="flex gap-8">
          {["Privacy Policy", "Terms of Service"].map((l) => (
            <a
              key={l}
              href="#"
              className="font-body font-light text-xs tracking-wide transition-colors duration-300"
              style={{ color: "rgba(250,248,244,0.25)" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(250,248,244,0.25)")
              }
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
      <CustomCursor />
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
