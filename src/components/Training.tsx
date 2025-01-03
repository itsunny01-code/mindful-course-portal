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
    title: "Professional Development",
    description: "Continuous learning programs for counseling professionals",
    icon: GraduationCap,
    duration: "6 months",
  },
  {
    title: "Specialized Workshops",
    description: "Intensive training sessions on specific counseling techniques",
    icon: BookOpen,
    duration: "2 weeks",
  },
  {
    title: "Mentorship Program",
    description: "One-on-one guidance from experienced counselors",
    icon: Users,
    duration: "3 months",
  },
  {
    title: "Certification Preparation",
    description: "Comprehensive preparation for counseling certifications",
    icon: School,
    duration: "4 months",
  },
];

export const Training = () => {
  return (
    <section className="py-12 md:py-24 bg-cream-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="text-[40px] font-medium text-gray-900 mb-4">
            Mental Health Resources
          </h2>
          <p className="text-lg text-gray-600 mb-8">
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
                  <div className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg h-full">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cream-50 rounded-lg">
                        <training.icon className="w-6 h-6 text-cream-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col mb-3">
                          <span className="text-sm uppercase tracking-wider text-gray-500 mb-1">
                            ARTICLE | {training.duration}
                          </span>
                          <h3 className="text-xl font-medium text-gray-900">
                            {training.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-4">{training.description}</p>
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
        <div className="hidden md:space-y-4 md:block">
          {trainings.map((training) => (
            <div
              key={training.title}
              className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cream-50 rounded-lg">
                  <training.icon className="w-6 h-6 text-cream-700" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col mb-3">
                    <span className="text-sm uppercase tracking-wider text-gray-500 mb-1">
                      ARTICLE | {training.duration}
                    </span>
                    <h3 className="text-xl font-medium text-gray-900">
                      {training.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{training.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button 
            variant="ghost"
            className="text-cream-700 hover:text-cream-800 hover:bg-cream-100 text-lg font-medium group"
          >
            VIEW ALL RESOURCES
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};