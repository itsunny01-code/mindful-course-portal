import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LandingOne = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-accent/10 via-white to-white">
          <div className="absolute inset-0 z-0">
            <picture>
              <source
                srcSet="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&fm=webp&q=80"
                type="image/webp"
                media="(min-width: 1200px)"
              />
              <source
                srcSet="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&fm=webp&q=80"
                type="image/webp"
                media="(min-width: 800px)"
              />
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&q=80"
                alt="Woman using laptop"
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
              Transform Your Career
              <span className="block mt-2 bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
                With Expert Guidance
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-primary-dark/80 mb-8">
              Join our comprehensive counseling programs and take the first step towards a brighter future.
            </p>
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary-dark text-white group"
              onClick={() => window.location.href = "https://www.endorphin.in"}
            >
              Start Learning
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingOne;