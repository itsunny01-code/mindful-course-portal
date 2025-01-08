import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-light/10 via-cream-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
          alt="Peaceful counseling environment"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-light/90 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-cream-100 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary-light rounded-full filter blur-3xl opacity-20 animate-pulse" />

      <div className="container relative z-10 px-4 py-32 mx-auto text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase bg-primary-light/10 backdrop-blur-sm rounded-full animate-fade-up [--animation-delay:200ms] opacity-0">
          <Sparkles className="w-4 h-4" />
          Transform Your Life
        </span>

        {/* Heading */}
        <h1 className="max-w-4xl mx-auto mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-up [--animation-delay:400ms] opacity-0">
          Begin Your Journey to
          <span className="relative block mt-2">
            <span className="bg-gradient-to-r from-primary via-primary-light to-cream-600 bg-clip-text text-transparent">
              Emotional Wellness
            </span>
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-600 animate-fade-up [--animation-delay:600ms] opacity-0">
          Expert-led counseling courses designed to help you understand yourself better,
          build resilience, and create lasting positive change in your life.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up [--animation-delay:800ms] opacity-0">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-dark group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Explore Courses
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark transform transition-transform group-hover:scale-105" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary-light/10 backdrop-blur-sm"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};