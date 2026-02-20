"use client";

import { cn } from "@/lib/utils";
import { useLenis } from "./context/LenisContext";

export default function ScrollToLink({
  to,
  href,
  children,
  className,
  onClick,
}: {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const lenis = useLenis();

  const target = to ?? href;

  const handleClick = () => {
    onClick?.();

    if (!lenis || !target) return;

    const el = document.querySelector<HTMLElement>(target);
    if (!el) return;

    lenis.scrollTo(el, {
      offset: -70,
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(2, -10 * t),
    });
  };

  return (
    <div onClick={handleClick} className={cn("cursor-pointer", className)}>
      {children}
    </div>
  );
}
