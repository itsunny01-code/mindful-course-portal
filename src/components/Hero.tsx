import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sage-50/80">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left leaf decorations */}
        <div className="absolute left-0 top-0 w-48 h-48 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full text-sage-200/40">
            <path
              d="M0,50 Q25,25 50,50 Q75,75 100,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="absolute left-0 bottom-0 w-48 h-48 transform rotate-180 animate-float-delayed">
          <svg viewBox="0 0 100 100" className="w-full h-full text-sage-200/40">
            <path
              d="M0,50 Q25,25 50,50 Q75,75 100,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Right leaf decorations */}
        <div className="absolute right-0 top-0 w-48 h-48 transform -scale-x-100 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full text-sage-200/40">
            <path
              d="M0,50 Q25,25 50,50 Q75,75 100,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="absolute right-0 bottom-0 w-48 h-48 transform -scale-x-100 rotate-180 animate-float-delayed">
          <svg viewBox="0 0 100 100" className="w-full h-full text-sage-200/40">
            <path
              d="M0,50 Q25,25 50,50 Q75,75 100,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          {/* Main Heading with animation */}
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 animate-fade-up">
            Integration Therapy
            <span className="block mt-2" style={{ ['--animation-delay' as string]: '200ms' }}>For Mind-Body-Spirit</span>
            <span className="block mt-2" style={{ ['--animation-delay' as string]: '400ms' }}>Transformation</span>
          </h1>

          {/* Description with animation */}
          <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-600 animate-fade-up" style={{ ['--animation-delay' as string]: '600ms' }}>
            Unlock profound transformation through expanded consciousness exploration. 
            Integrate mind, body, and spirit for heightened awareness and growth.
          </p>

          {/* CTA Button with animation */}
          <Button
            size="lg"
            className="bg-cream-500 hover:bg-cream-600 text-white border-0 rounded-full px-8 animate-fade-up"
            style={{ ['--animation-delay' as string]: '800ms' }}
          >
            <span className="relative z-10 flex items-center">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </Button>

          {/* Decorative Images Grid with animations */}
          <div className="mt-16 grid grid-cols-3 md:grid-cols-7 gap-4 items-center justify-items-center max-w-4xl mx-auto">
            {images.map((src, index) => (
              <div
                key={index}
                className="w-24 h-24 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fade-up"
                style={{ ['--animation-delay' as string]: `${(index + 5) * 200}ms` }}
              >
                <img
                  src={`${src}?auto=format&fit=crop&w=96&h=96`}
                  alt={`Therapy illustration ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};