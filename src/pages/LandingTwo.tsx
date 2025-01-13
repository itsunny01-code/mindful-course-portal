import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LandingTwo = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 via-white to-white">
          <div className="absolute inset-0 z-0">
            <picture>
              <source
                srcSet="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&fm=webp&q=80"
                type="image/webp"
                media="(min-width: 1200px)"
              />
              <source
                srcSet="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&fm=webp&q=80"
                type="image/webp"
                media="(min-width: 800px)"
              />
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=80"
                alt="Technology workspace"
                className="w-full h-full object-cover opacity-10"
                loading="eager"
                fetchPriority="high"
                width="1200"
                height="800"
              />
            </picture>
          </div>
          <div className="container relative z-10 px-4 mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Advance Your Skills
              <span className="block mt-2 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                With Professional Training
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-primary-dark/80 mb-8">
              Access premium counseling courses and certifications to enhance your professional journey.
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent-dark text-primary group"
              onClick={() => window.location.href = "https://www.endorphin.in"}
            >
              Explore Courses
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingTwo;