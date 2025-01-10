import { BookOpen, Users, Brain, Heart } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    icon: BookOpen,
    title: "Individual Certification",
    description: "Learn from certified counselors with years of experience",
    buttonText: "Learn More",
    buttonLink: "#courses"
  },
  {
    icon: Users,
    title: "Group Training",
    description: "Connect with others on similar journeys of growth",
    buttonText: "Learn More",
    buttonLink: "#community"
  },
  {
    icon: Brain,
    title: "Expert Guidance",
    description: "Get personalized support from industry experts",
    buttonText: "Learn More",
    buttonLink: "#experts"
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    description: "Comprehensive programs for complete well-being",
    buttonText: "Learn More",
    buttonLink: "#programs"
  },
];

export const Features = () => {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto relative">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase bg-primary-light/10 backdrop-blur-sm rounded-full">
            Why Choose Us
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Transform Your Life with Expert Guidance
          </h2>
          <p className="text-lg text-primary-dark/70">
            Our comprehensive approach combines professional expertise with practical tools
            for real-world results.
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
              <p className="text-primary-dark/70 mb-6">{feature.description}</p>
              <Button 
                variant="outline" 
                className="bg-white hover:bg-secondary-light/10 text-secondary border-secondary/20"
                onClick={() => window.location.href = feature.buttonLink}
              >
                {feature.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};