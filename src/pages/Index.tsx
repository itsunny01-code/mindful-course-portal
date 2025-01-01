import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Courses } from "@/components/Courses";
import { Certifications } from "@/components/Certifications";
import { Training } from "@/components/Training";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Courses />
      <Certifications />
      <Training />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Index;