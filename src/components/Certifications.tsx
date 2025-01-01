import { Award, BadgeCheck, Trophy } from "lucide-react";

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
    <section className="py-24 bg-gradient-to-b from-white to-sage-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-sage-700 uppercase bg-sage-100 rounded-full">
            Our Certifications
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Backed by Excellence
          </h2>
          <p className="text-lg text-gray-600">
            Our team holds prestigious certifications, ensuring you receive the highest quality guidance.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="p-8 transition-all duration-300 bg-white/50 backdrop-blur-sm rounded-2xl hover:shadow-lg hover:-translate-y-1 border border-sage-100"
            >
              <div className="inline-block p-4 mb-6 bg-sage-100 rounded-lg">
                <cert.icon className="w-6 h-6 text-sage-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {cert.title}
              </h3>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};