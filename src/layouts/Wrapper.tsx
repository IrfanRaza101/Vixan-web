"use client";

import { gsap } from "gsap";
import { useEffect } from "react";
import DarkLight from "@/components/common/DarkLight";
import ScrollToTop from "@/components/common/ScrollToTop";

import { usePathname } from "next/navigation";
import { animationCreate } from "@/utils/utils";

import animationTitle from "@/utils/animationTitle";
import { scrollSmother } from "@/utils/scrollSmother";
import buttonAnimation from "@/utils/buttonAnimation";

import {
  ScrollSmoother,
  ScrollToPlugin,
  ScrollTrigger,
  SplitText,
} from "@/plugins";
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, SplitText);

const Wrapper = ({ children }: any) => {
  const pathname = usePathname();

  useEffect(() => {
    import("bootstrap");
  }, []);

  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollSmoother.create({
        smooth: 1.35,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });
    }
  }, [pathname]);

  useEffect(() => {
    buttonAnimation();
    animationTitle();
    scrollSmother();

  }, [pathname]);

  return (
    <>
      {children}

      <DarkLight />
      <ScrollToTop />
    </>
  );
};

export default Wrapper; 
