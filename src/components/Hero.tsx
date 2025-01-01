import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sage-50 via-cream-50 to-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
          alt="Peaceful counseling environment"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-50/90 to-transparent" />
      </div>
      <div className="container relative z-10 px-4 py-32 mx-auto">
        <div className="max-w-4xl mx-auto backdrop-blur-sm bg-white/30 p-12 rounded-3xl border border-white/20 shadow-xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-sage-700 uppercase bg-sage-100/80 rounded-full animate-fade-up [--animation-delay:200ms] opacity-0 backdrop-blur-sm">
            Transform Your Life
          </span>
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl animate-fade-up [--animation-delay:400ms] opacity-0">
            Begin Your Journey to
            <span className="block mt-2 bg-gradient-to-r from-sage-600 to-cream-600 bg-clip-text text-transparent">
              Emotional Wellness
            </span>
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-700 animate-fade-up [--animation-delay:600ms] opacity-0">
            Expert-led counseling courses designed to help you understand yourself better,
            build resilience, and create lasting positive change in your life.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up [--animation-delay:800ms] opacity-0">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sage-600 to-sage-500 hover:from-sage-700 hover:to-sage-600 transition-all duration-300 transform hover:scale-105 group shadow-lg"
            >
              Explore Courses
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-sage-600/50 text-sage-700 hover:bg-sage-50/50 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};