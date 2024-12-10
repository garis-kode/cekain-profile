import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <About />
      <CTA />
      <Testimonial />
      {/* <Pricing /> */}
      {/* <Blog /> */}
    </main>
  );
}
