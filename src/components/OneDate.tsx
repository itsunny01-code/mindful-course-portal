import { Calendar } from "lucide-react";

export const OneDate = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="py-12 bg-gradient-to-b from-sage-50/80 to-cream-50/80">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/30 rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Calendar className="w-8 h-8 text-sage-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Today's Date</h2>
          </div>
          <p className="text-center text-xl text-gray-700">{formattedDate}</p>
        </div>
      </div>
    </section>
  );
};