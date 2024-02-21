import React from "react";
import TextGenerateEffectDemo from "@/components/Text";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
export default function GridBackgroundDemo() {
  return (
    // {/* Radial gradient for the container to give a faded look */}

    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center pointer-events-none ">
      <TextGenerateEffectDemo />
      </div>
      
    </BackgroundGradientAnimation>
  );
}
