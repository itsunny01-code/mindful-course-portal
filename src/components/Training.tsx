import { BookOpen, GraduationCap, School, Users } from "lucide-react";
import { Button } from "./ui/button";

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
    <section className="py-24 bg-gradient-to-b from-sage-50 to-cream-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-cream-700 uppercase bg-cream-100 rounded-full">
            Training Programs
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Enhance Your Skills
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive training programs designed to elevate your counseling practice.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {trainings.map((training) => (
            <div
              key={training.title}
              className="p-8 transition-all duration-300 bg-white rounded-2xl hover:shadow-lg group"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 transition-colors bg-cream-100 rounded-lg group-hover:bg-cream-200">
                  <training.icon className="w-6 h-6 text-cream-700" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {training.title}
                    </h3>
                    <span className="px-2 py-1 text-xs font-medium text-cream-700 bg-cream-100 rounded-full">
                      {training.duration}
                    </span>
                  </div>
                  <p className="mb-4 text-gray-600">{training.description}</p>
                  <Button
                    variant="outline"
                    className="text-cream-700 border-cream-200 hover:bg-cream-50"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};