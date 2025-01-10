import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const MentalHealthcare = () => {
  return (
    <section className="py-24 bg-secondary-light/5">
      <div className="container px-4 mx-auto max-w-[1200px]">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase bg-primary-light/10 rounded-full">
            Our Mental Health Offering
          </span>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Comprehensive Mental Healthcare Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Discover our range of mental health services designed to support your well-being journey
          </p>
        </div>

        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="Mental Healthcare"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-primary mb-6">
              Therapy & Psychiatry
            </h3>
            <p className="text-gray-600 mb-8">
              Our in-house team of mental health therapists and psychiatrists is highly qualified 
              and trained to deliver quality and compassionate clinical treatment.
            </p>
            <Button className="bg-secondary hover:bg-secondary-dark group">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Self Care"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-primary mb-6">
              Self-Care Resources
            </h3>
            <p className="text-gray-600 mb-8">
              Access a digital powerhouse of mental health resources. Get a personalized plan 
              with tools, activities, articles & daily reminders to make mental healthcare 
              a part of your routine.
            </p>
            <Button className="bg-secondary hover:bg-secondary-dark group">
              Download App
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};