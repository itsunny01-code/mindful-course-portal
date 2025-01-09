import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Courses } from "@/components/Courses";
import { Certifications } from "@/components/Certifications";
import { Training } from "@/components/Training";
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
      <Courses />
      <UpcomingWebinars />
      <Certifications />
      <Training />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;