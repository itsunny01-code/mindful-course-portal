import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const MentalHealthcare = () => {
  return (
    <section className="py-24 bg-secondary-light/5">
      <div className="container px-4 mx-auto max-w-[1200px]">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase bg-primary-light/10 rounded-full">
  Explore Your Path          </span>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-primary">
           Choose Your Learning Style
          </h2>
          <p className="text-lg text-gray-600">
           Whether you thrive with personalized one-on-one certification or the collaborative energy of group training, we’ve got you covered. Select what suits your needs best.
          </p>
        </div>

        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-1/2">
            <picture>
              <source
                srcSet="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&fm=webp&q=80"
                type="image/webp"
                media="(min-width: 800px)"
              />
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&q=80"
                alt="Mental Healthcare"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                loading="lazy"
                width="800"
                height="400"
                decoding="async"
              />
            </picture>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-primary mb-6">
              Individual Certification
            </h3>
            <p className="text-gray-600 mb-8">
              Learn from certified counselors with years of experience, providing personalized guidance tailored to your needs. Whether you're seeking clarity, coping strategies, or support, our experts are here to help you every step of the way.
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
            <picture>
              <source
                srcSet="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&fm=webp&q=80"
                type="image/webp"
                media="(min-width: 800px)"
              />
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
                alt="Self Care"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                loading="lazy"
                width="800"
                height="400"
                decoding="async"
              />
            </picture>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-primary mb-6">
             Group Trainings
            </h3>
            <p className="text-gray-600 mb-8">
              Experience the power of community and collective learning with our group training sessions. Share insights, exchange ideas, and grow together in a supportive environment. 
            </p>
            <Button className="bg-secondary hover:bg-secondary-dark group">
             Get Started
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
