import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1524230572899-a752b3835840"
          alt="Modern building"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2 animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-dark rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2 animate-float-delayed" />
      <div className="container px-4 mx-auto max-w-[1200px] relative">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-white uppercase bg-white/10 rounded-full backdrop-blur-sm">
            Take the First Step
          </span>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight text-white">
            Ready to Transform Your Life?
          </h2>
          <p className="mb-10 text-lg text-white">
            Join thousands of others who have already started their journey to
            emotional wellness and personal growth.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-primary-50 group"
              onClick={() => window.location.href = "/get-started"}
            >
              Get Started Now
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};