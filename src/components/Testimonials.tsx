import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const testimonials = [
  {
    text: "Endorphin.in has truly transformed my understanding of counseling. The courses are incredibly informative, easy to follow, and have practical applications.",
    author: "Anonymous, Pune",
    image: "/lovable-uploads/433cc108-c2a7-4a3d-849d-e07178694824.png"
  },
  {
    text: "The expert guidance and comprehensive approach to mental health training have been invaluable for my professional development.",
    author: "Dr. Sarah M., Mumbai",
    image: "/lovable-uploads/433cc108-c2a7-4a3d-849d-e07178694824.png"
  },
  {
    text: "The certification program exceeded my expectations. The support team is amazing and the course content is top-notch.",
    author: "John D., Delhi",
    image: "/lovable-uploads/433cc108-c2a7-4a3d-849d-e07178694824.png"
  },
  {
    text: "I've gained invaluable insights and practical skills through their comprehensive training programs. Highly recommended!",
    author: "Dr. Priya R., Bangalore",
    image: "/lovable-uploads/433cc108-c2a7-4a3d-849d-e07178694824.png"
  },
  {
    text: "The online learning platform is user-friendly and the course material is well-structured. A great investment in my career.",
    author: "Michael S., Chennai",
    image: "/lovable-uploads/433cc108-c2a7-4a3d-849d-e07178694824.png"
  }
];

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
            We've helped <span className="text-secondary">Thousands</span> change their lives.
          </h2>
          <p className="text-white/70 text-lg">
            Now it's your turn to benefit from the 'Endorphin experience'...
          </p>
        </div>

        <Carousel 
          className="w-full max-w-2xl mx-auto mb-20"
          opts={{
            align: "start",
            loop: true
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="bg-primary-dark rounded-2xl md:rounded-full p-8 md:p-16 relative">
                  <div className="absolute top-4 right-4 md:top-8 md:right-8">
                    <img
                      src={testimonial.image}
                      alt="Testimonial"
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white/10"
                    />
                  </div>
                  <p className="text-base md:text-xl leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="text-white/70">- {testimonial.author}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 mt-4 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className="w-2 h-2 rounded-full bg-white/50 focus:bg-white transition-colors"
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <CarouselPrevious className="hidden md:flex absolute -left-12 bg-white/10 text-white hover:text-white hover:bg-white/20" />
          <CarouselNext className="hidden md:flex absolute -right-12 bg-white/10 text-white hover:text-white hover:bg-white/20" />
        </Carousel>

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