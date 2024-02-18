"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
 
const words = "Hi there! I'm Mubashir Tanwar, a Full Stack Developer with a focus on AIML and Deep Learning, based in Mumbai, passionate about crafting transformative digital experiences."
 
export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}