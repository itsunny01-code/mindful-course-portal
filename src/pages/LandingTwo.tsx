import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { MentalHealthcare } from "@/components/MentalHealthcare";
import { Courses } from "@/components/Courses";
import { Certifications } from "@/components/Certifications";
import { Testimonials } from "@/components/Testimonials";
import { UpcomingWebinars } from "@/components/UpcomingWebinars";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { BackToTop } from "@/components/BackToTop";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const LandingTwo = () => {
  return (
    <div className="min-h-screen bg-white landing-two">
      <Header />
      <main className="pt-24">
        <Hero />
        <Features />
        <MentalHealthcare />
        <div id="explore-path">
          <Courses />
        </div>
        <UpcomingWebinars />
        <Certifications />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
};

export default LandingTwo;