import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-sage-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
          alt="Peaceful counseling environment"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-50/90 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-cream-100 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-sage-100 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      
      {/* Glass morphism decorative shapes */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 animate-float-delayed" />

      <div className="container relative z-10 px-4 py-32 mx-auto text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-sage-700 uppercase bg-sage-100 rounded-full animate-fade-up [--animation-delay:200ms] opacity-0">
          <Sparkles className="w-4 h-4" />
          Transform Your Life
        </span>

        {/* Heading */}
        <h1 className="max-w-4xl mx-auto mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-up [--animation-delay:400ms] opacity-0">
          Begin Your Journey to
          <span className="relative block mt-2">
            <span className="bg-gradient-to-r from-sage-600 via-sage-500 to-cream-600 bg-clip-text text-transparent">
              Emotional Wellness
            </span>
            <svg
              className="absolute -bottom-2 left-0 w-full h-2 text-sage-200 opacity-30"
              viewBox="0 0 400 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0 15 Q 50 5 100 15 Q 150 25 200 15 Q 250 5 300 15 Q 350 25 400 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-600 animate-fade-up [--animation-delay:600ms] opacity-0">
          Expert-led counseling courses designed to help you understand yourself better,
          build resilience, and create lasting positive change in your life.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up [--animation-delay:800ms] opacity-0 w-full sm:w-auto">
          <Button
            size="lg"
            className="bg-sage-600 hover:bg-sage-700 group relative overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center">
              Explore Courses
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-sage-500 to-sage-600 transform transition-transform group-hover:scale-105" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-sage-600 text-sage-600 hover:bg-sage-50 backdrop-blur-sm w-full sm:w-auto"
          >
            Learn More
          </Button>
        </div>

        {/* Decorative dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
          <div className="w-2 h-2 rounded-full bg-sage-400 animate-bounce [animation-delay:200ms]" />
          <div className="w-2 h-2 rounded-full bg-sage-400 animate-bounce [animation-delay:400ms]" />
          <div className="w-2 h-2 rounded-full bg-sage-400 animate-bounce [animation-delay:600ms]" />
        </div>
      </div>
    </section>
  );
};