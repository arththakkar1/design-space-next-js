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
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

/* ─── Footer ────────────────────────────────────────────── */

/* ─── Page ──────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Process />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
}
