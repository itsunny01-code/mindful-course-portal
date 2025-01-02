import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-sage-50 to-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
          alt="Peaceful counseling environment"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-50/80 to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cream-100 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-100 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
      <div className="container relative z-10 px-4 py-32 mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-sage-700 uppercase bg-sage-100 rounded-full animate-fade-up [--animation-delay:200ms] opacity-0">
          Transform Your Life
        </span>
        <h1 className="max-w-4xl mx-auto mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-up [--animation-delay:400ms] opacity-0">
          Begin Your Journey to
          <span className="block mt-2 bg-gradient-to-r from-sage-600 to-cream-600 bg-clip-text text-transparent">
            Emotional Wellness
          </span>
        </h1>
        <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-600 animate-fade-up [--animation-delay:600ms] opacity-0">
          Expert-led counseling courses designed to help you understand yourself better,
          build resilience, and create lasting positive change in your life.
        </p>
        <div className="flex justify-center gap-4 animate-fade-up [--animation-delay:800ms] opacity-0">
          <Button
            size="lg"
            className="bg-sage-600 hover:bg-sage-700 group"
          >
            Explore Courses
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-sage-600 text-sage-600 hover:bg-sage-50"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
