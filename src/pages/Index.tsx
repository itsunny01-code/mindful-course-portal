import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Courses } from "@/components/Courses";
import { Certifications } from "@/components/Certifications";
import { Training } from "@/components/Training";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { OneDate } from "@/components/OneDate";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-cream-50">
      <Hero />
      <OneDate />
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