"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/f0b61763-fc06-4fa5-9db5-ab03f13fd77c.png" // Adjust path if needed
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Optional dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Mask center logo if needed */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <div className="w-[200px] h-[200px] bg-black/90 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 leading-tight drop-shadow-xl">
          CHAMPION <br /> LIFESTYLE
        </h1>

        <p className="text-white text-lg md:text-xl mt-6 max-w-2xl mx-auto">
          Want to be a part of TeamCLC? Watch this... <br />
          Your transformation begins with a single decision.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-yellow-400 text-black hover:bg-yellow-300 transition-colors font-semibold text-lg"
          >
            <Link href="#programs" scroll={false}>
              Begin Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/10 text-lg"
          >
            <Link href="#transformations" scroll={false}>
              <PlayCircle className="mr-2 w-5 h-5" />
              Watch Transformations
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
