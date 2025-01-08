import { Star, MessageSquare, User } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Student",
    text: "The counseling courses have transformed my approach to mental health. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Professional",
    text: "Outstanding content and expert guidance. This program exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Healthcare Worker",
    text: "The practical insights and supportive community made learning engaging and effective.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-primary-light/10 via-cream-50 to-primary-light/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-cream-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-light rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />
      <img
        src="https://images.unsplash.com/photo-1473177104440-ffee2f376098"
        alt="Elegant interior"
        className="absolute inset-0 w-full h-full object-cover opacity-5"
      />
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-cream-800">
          What Our Students Say
        </h2>
        <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="backdrop-blur-sm bg-white/30 border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up min-w-[300px] snap-center group" 
              style={{ "--animation-delay": `${index * 200}ms` } as React.CSSProperties}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-light/10 rounded-full group-hover:bg-primary-light/20 transition-colors">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-primary-dark">{testimonial.name}</h3>
                    <p className="text-sm text-primary-light">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-primary-dark/80">{testimonial.text}</p>
                <MessageSquare className="w-8 h-8 text-primary-light mt-4 opacity-20" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};