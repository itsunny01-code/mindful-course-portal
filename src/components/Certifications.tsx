import { Award, BadgeCheck, Trophy, Brain, Heart, Book, ArrowRight } from "lucide-react";

const certifications = [
  {
    title: "Neuro-Linguistic Programming",
    description: "Learn neuroscience-based behavior technology to stimulate motivational points in the brain",
    icon: Award,
  },
  {
    title: "Cognitive Behavioral Therapy",
    description: "Specialized certification in CBT techniques",
    icon: BadgeCheck,
  },
  {
    title: "Sleep Consultant",
    description: "Learn Sleep Science & Circadian Rhythm to manage sleep!",
    icon: Trophy,
  },
  {
    title: "Mindfulness Practitioner",
    description: "Master mindfulness techniques and meditation practices",
    icon: Brain,
  },
  {
    title: "Emotional Intelligence Coach",
    description: "Develop skills to understand and manage emotions effectively",
    icon: Heart,
  },
  {
    title: "Positive Psychology",
    description: "Learn to foster well-being and personal growth",
    icon: Book,
  },
];

export const Certifications = () => {
  return (
    <section className="py-12 md:py-24 bg-secondary-light/10">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase bg-primary-light/10 rounded-full">
            Our Certifications
          </span>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Backed by Excellence
          </h2>
          <p className="text-lg text-gray-600">
            Our team holds prestigious certifications, ensuring you receive the highest quality guidance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col p-6 transition-all duration-300 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg hover:-translate-y-1 border border-primary-light/20"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 bg-primary-light/10 rounded-lg">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {cert.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4 flex-grow hidden md:block">{cert.description}</p>
              <button className="text-secondary hover:text-secondary-dark text-left transition-colors flex items-center group">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-secondary hover:bg-secondary-dark transition-colors rounded-lg group">
            View All Certifications
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};