import { BookOpen, Users, Brain, Heart } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Expert-Led Courses",
    description: "Learn from certified counselors with years of experience",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description: "Connect with others on similar journeys of growth",
  },
  {
    icon: Brain,
    title: "Proven Methods",
    description: "Evidence-based approaches for lasting positive change",
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    description: "Comprehensive programs for complete well-being",
  },
];

export const Features = () => {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto max-w-[1200px] relative">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase bg-primary-light/10 backdrop-blur-sm rounded-full">
            Why Choose Us
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            A Better You Starts with Expert Guidance
          </h2>
          <p className="text-lg text-primary-dark/70">
            Unlock your full potential with a customized approach that helps you grow mentally, emotionally, and physically.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 transition-all duration-300 bg-white/80 backdrop-blur-sm border border-primary-light/20 rounded-2xl hover:shadow-lg hover:-translate-y-1"
            >
              <div className="inline-block p-4 mb-6 bg-accent-light/20 rounded-lg group-hover:bg-accent-light/30 transition-colors">
                <feature.icon className="w-6 h-6 text-accent-dark" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                {feature.title}
              </h3>
              <p className="text-primary-dark/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
