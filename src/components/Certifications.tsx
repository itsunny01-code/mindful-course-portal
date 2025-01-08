import { Award, BadgeCheck, Trophy, ChevronRight } from "lucide-react";

const certifications = [
  {
    title: "Licensed Professional Counselor",
    description: "Nationally recognized certification for mental health counseling",
    icon: Award,
  },
  {
    title: "Cognitive Behavioral Therapy",
    description: "Specialized certification in CBT techniques",
    icon: BadgeCheck,
  },
  {
    title: "Trauma-Informed Care",
    description: "Advanced certification in trauma counseling",
    icon: Trophy,
  },
];

export const Certifications = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-primary-light/10">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase bg-primary-light/10 rounded-full">
            Our Certifications
          </span>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Backed by Excellence
          </h2>
          <p className="text-lg text-gray-600">
            Our team holds prestigious certifications, ensuring you receive the highest quality guidance.
          </p>
        </div>
        <div className="space-y-4 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex items-center md:flex-col p-6 transition-all duration-300 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg hover:-translate-y-1 border border-primary-light/20"
            >
              <div className="flex items-center flex-1 md:flex-col md:text-center">
                <div className="p-3 md:p-4 mr-4 md:mr-0 md:mb-6 bg-primary-light/10 rounded-lg">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 md:text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-3">
                    {cert.title}
                  </h3>
                  <p className="hidden md:block text-gray-600">{cert.description}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-primary-light md:hidden" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};