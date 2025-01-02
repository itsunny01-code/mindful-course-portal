import { Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const upcomingEvents = [
  {
    title: "Introduction to Cognitive Behavioral Therapy",
    date: "May 15, 2024",
    time: "2:00 PM - 4:00 PM EST",
    instructor: "Dr. Amanda White",
  },
  {
    title: "Mindfulness Meditation Workshop",
    date: "May 20, 2024",
    time: "1:00 PM - 3:00 PM EST",
    instructor: "Dr. James Miller",
  },
  {
    title: "Advanced Counseling Techniques",
    date: "May 25, 2024",
    time: "10:00 AM - 12:00 PM EST",
    instructor: "Dr. Sophie Chen",
  },
];

export const UpcomingWebinars = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-cream-50 to-sage-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cream-800 to-sage-800">
          Upcoming Webinars & Training
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="backdrop-blur-sm bg-white/30 border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ "--animation-delay": `${index * 200}ms` } as React.CSSProperties}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl text-sage-900 mb-4">{event.title}</h3>
                <div className="flex items-center mb-2 text-sage-700">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center mb-4 text-sage-700">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{event.time}</span>
                </div>
                <p className="text-sage-600">Instructor: {event.instructor}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};