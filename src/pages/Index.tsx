import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { MentalHealthcare } from "@/components/MentalHealthcare";
import { Courses } from "@/components/Courses";
import { Certifications } from "@/components/Certifications";
import { Testimonials } from "@/components/Testimonials";
import { UpcomingWebinars } from "@/components/UpcomingWebinars";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <MentalHealthcare />
      <Courses />
      <UpcomingWebinars />
      <Certifications />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;