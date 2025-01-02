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
    <section className="py-16 px-4 bg-gradient-to-b from-sage-50 to-cream-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-sage-800 to-cream-800">
          What Our Students Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="backdrop-blur-sm bg-white/30 border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ "--animation-delay": `${index * 200}ms` } as React.CSSProperties}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <User className="w-10 h-10 text-sage-600 bg-sage-100 rounded-full p-2" />
                  <div className="ml-3">
                    <h3 className="font-semibold text-sage-900">{testimonial.name}</h3>
                    <p className="text-sm text-sage-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sage-700">{testimonial.text}</p>
                <MessageSquare className="w-8 h-8 text-sage-400 mt-4 opacity-20" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};