import { Star } from "lucide-react";

const stats = [
  {
    icon: "👥",
    value: "150+",
    label: "Certified Professionals & Trainers"
  },
  {
    icon: "💫",
    value: "10k+",
    label: "lives impacted"
  },
  {
    icon: "📅",
    value: "140k+",
    label: "Sessions delivered in counseling"
  },
  {
    icon: "🏆",
    value: "Best+",
    label: "Counselling courses in India"
  },
  {
    icon: "👥",
    value: "20,000+",
    label: "community members"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="container px-4 mx-auto max-w-[1200px]">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            We've helped <span className="text-secondary">Thousands</span> feel better.
          </h2>
          <p className="text-white/70 text-lg">
            Now it's your turn to benefit from the 'Endorphin experience'...
          </p>
        </div>

        <div className="relative mb-20">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full hidden md:block">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="max-w-2xl mx-auto bg-primary-dark rounded-2xl md:rounded-full p-8 md:p-16 relative">
            <div className="absolute top-4 right-4 md:top-8 md:right-8">
              <img
                src="/lovable-uploads/433cc108-c2a7-4a3d-849d-e07178694824.png"
                alt="Testimonial"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white/10"
              />
            </div>
            <p className="text-base md:text-xl leading-relaxed mb-4">
              "Endorphin.in has truly transformed my understanding of counseling. The courses are incredibly informative, easy to follow, and have practical applications. The team is supportive and always ready to help with any questions. Whether you're a beginner or looking to deepen your knowledge, these courses offer something for everyone. Highly recommend it to anyone serious about pursuing a career in counseling!"
            </p>
            <p className="text-white/70">- Anonymous, Pune</p>
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full hidden md:block">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 items-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <span className="text-3xl md:text-4xl mb-2 block">{stat.icon}</span>
              <div className="text-xl md:text-2xl font-bold mb-2">{stat.value}</div>
              <p className="text-white/70 text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
