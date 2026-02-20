"use client";

import { FadeSection } from "./FadeSection";

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

export function Process() {
  return (
    <section id="process" className="py-24 md:py-36 bg-[#1a1612]">
      <div className="px-6 md:px-20">
        <FadeSection>
          <p className="font-body text-xs tracking-[0.32em] uppercase mb-5 text-[#c9a96e]">
            The Design Journey
          </p>
        </FadeSection>
        <FadeSection delay={100}>
          <h2 className="font-display font-light leading-tight mb-12 md:mb-20 text-[#faf8f4] text-[clamp(1.4rem,2.5vw,4rem)] md:text-[clamp(2.4rem,3.5vw,4rem)]">
            A seamless process <br />
            from{" "}
            <em className="italic text-[#c9a96e]">concept to completion</em>
          </h2>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
          {steps.map(({ n, title, desc }, i) => (
            <FadeSection key={title} delay={i * 80}>
              <div className="relative pt-8 md:pt-12 pr-6 md:pr-10 border-t border-[#c9a96e]/35">
                <div className="absolute -top-1.75 left-0 w-3.5 h-3.5 rounded-full bg-[#c9a96e]" />
                <span className="font-display font-light block mb-4 md:mb-6 text-[2rem] md:text-[3.5rem] text-[#c9a96e]/25 leading-none">
                  {n}
                </span>
                <h3 className="font-body tracking-wide mb-2 md:mb-4 text-[#faf8f4] text-base">
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
