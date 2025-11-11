import CTA from "@/components/CTA";
import DualApproaches from "@/components/DualAproach";
import ExamTypes from "@/components/ExampType";
import FAQ from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ExamTypes />
      <DualApproaches />
      <Features />
      <Partners />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
