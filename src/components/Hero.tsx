import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-sage-50">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
          alt="Peaceful counseling environment"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container relative z-10 px-4 py-32 mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-sage-700 uppercase bg-sage-100 rounded-full animate-fade-up [--animation-delay:200ms] opacity-0">
          Transform Your Life
        </span>
        <h1 className="max-w-4xl mx-auto mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-up [--animation-delay:400ms] opacity-0">
          Begin Your Journey to
          <span className="block mt-2">Emotional Wellness</span>
        </h1>
        <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-600 animate-fade-up [--animation-delay:600ms] opacity-0">
          Expert-led counseling courses designed to help you understand yourself better,
          build resilience, and create lasting positive change in your life.
        </p>
        <div className="flex justify-center gap-4 animate-fade-up [--animation-delay:800ms] opacity-0">
          <Button size="lg" className="bg-sage-600 hover:bg-sage-700">
            Explore Courses
          </Button>
          <Button size="lg" variant="outline" className="border-sage-600 text-sage-600">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};