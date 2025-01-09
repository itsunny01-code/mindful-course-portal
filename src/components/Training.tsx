import { BookOpen, GraduationCap, School, Users } from "lucide-react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const trainings = [
  {
    title: "Emotional Intelligence",
    description: "Learn more about the importance of emotional intelligence and how it can benefit you in all areas of your life.",
    icon: GraduationCap,
    duration: "1782 Certified",
  },
  {
    title: "Rational Emotive Behavior Therapy",
    description: "REBT is an action-oriented approach to managing cognitive, emotional, and behavioral disturbances.",
    icon: BookOpen,
    duration: "2 weeks",
  },
  {
    title: "Hypnotherapy Training",
    description: "Endorphin Hypnotherapy training has a unique way of content delivery.",
    icon: Users,
    duration: "3 months",
  },
  {
    title: "Neurobiology of Stress",
    description: "This is a professional certification for Healthcare professionals and therapists. ",
    icon: School,
    duration: "4 months",
  },
];

export const Training = () => {
  return (
    <section className="py-12 md:py-24 bg-primary-light/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="text-[40px] font-medium text-primary mb-4">
            Mental Health Resources
          </h2>
          <p className="text-lg text-primary-dark/70 mb-8">
            Awareness is the first step to change. Check out our digital library to learn more about mental health.
          </p>
        </div>
        <div className="block md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {trainings.map((training) => (
                <CarouselItem key={training.title} className="pl-2 md:pl-4 basis-[85%] md:basis-1/2">
                  <div className="bg-secondary-light/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg h-full">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary-light/20 rounded-lg">
                        <training.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col mb-3">
                          <span className="text-sm uppercase tracking-wider text-primary-dark/70 mb-1">
                            (3866 Rating) | {training.duration}
                          </span>
                          <h3 className="text-xl font-medium text-primary">
                            {training.title}
                          </h3>
                        </div>
                        <p className="text-primary-dark/70 mb-4">{training.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
        <div className="hidden md:grid md:grid-cols-2 gap-4">
          {trainings.map((training) => (
            <div
              key={training.title}
              className="bg-secondary-light/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary-light/20 rounded-lg">
                  <training.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col mb-3">
                    <span className="text-sm uppercase tracking-wider text-primary-dark/70 mb-1">
                      ARTICLE | {training.duration}
                    </span>
                    <h3 className="text-xl font-medium text-primary">
                      {training.title}
                    </h3>
                  </div>
                  <p className="text-primary-dark/70 mb-4">{training.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button 
            variant="ghost"
            className="text-primary hover:text-primary-dark hover:bg-primary-light/10 text-lg font-medium group"
          >
            VIEW ALL RESOURCES
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
