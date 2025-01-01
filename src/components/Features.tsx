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
    <section className="py-24 bg-gradient-to-b from-white via-sage-50/30 to-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-sage-700 uppercase bg-sage-100 rounded-full">
            Why Choose Us
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight bg-gradient-to-r from-sage-700 to-cream-700 bg-clip-text text-transparent">
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
              className="group p-8 transition-all duration-300 backdrop-blur-sm bg-white/40 rounded-2xl hover:shadow-xl hover:-translate-y-1 border border-white/20"
            >
              <div className="inline-block p-4 mb-6 bg-gradient-to-br from-sage-100 to-sage-200 rounded-lg group-hover:scale-110 transition-transform duration-300">
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