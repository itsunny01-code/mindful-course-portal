import { BookOpen, Users, Trophy, Heart } from "lucide-react";

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
    icon: Trophy,
    title: "Proven Methods",
    description: "Evidence-based approaches for lasting positive change",
  },
  {
    icon: Heart,
    title: "Personal Growth",
    description: "Develop self-awareness and emotional intelligence",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-sage-50">
      <div className="container px-4 mx-auto relative">
        <div className="absolute right-0 w-64 h-64 bg-sage-50 rounded-full filter blur-2xl opacity-30 -translate-y-1/2" />
        <div className="absolute left-0 w-64 h-64 bg-cream-50 rounded-full filter blur-2xl opacity-30 translate-y-1/2" />
        
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-sage-700 uppercase bg-sage-100/80 backdrop-blur-sm rounded-full">
            Why Choose Us
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight bg-gradient-to-r from-sage-800 to-cream-800 bg-clip-text text-transparent">
            Transform Your Life with Expert Guidance
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive approach combines professional expertise with practical tools
            for real-world results.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 transition-all duration-300 bg-white/80 backdrop-blur-sm border border-sage-100 rounded-2xl hover:shadow-lg hover:-translate-y-1"
            >
              <div className="inline-block p-4 mb-6 bg-sage-100 rounded-lg group-hover:bg-sage-200 transition-colors">
                <feature.icon className="w-6 h-6 text-sage-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};