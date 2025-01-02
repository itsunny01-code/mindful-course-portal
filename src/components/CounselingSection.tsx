import { UserRound, Heart, BookOpen } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export const CounselingSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-sage-50 to-cream-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-sage-800 to-cream-800">
          Professional Counseling Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="backdrop-blur-sm bg-white/30 border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up">
            <CardContent className="p-6 text-center">
              <UserRound className="w-12 h-12 mx-auto mb-4 text-sage-600" />
              <h3 className="text-xl font-semibold mb-4 text-sage-900">Individual Counseling</h3>
              <p className="text-sage-700 mb-6">
                One-on-one sessions tailored to your unique needs and goals.
              </p>
              <Button variant="outline" className="bg-sage-100 hover:bg-sage-200 text-sage-800">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/30 border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ "--animation-delay": "200ms" } as React.CSSProperties}>
            <CardContent className="p-6 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-sage-600" />
              <h3 className="text-xl font-semibold mb-4 text-sage-900">Couples Therapy</h3>
              <p className="text-sage-700 mb-6">
                Build stronger relationships through guided counseling sessions.
              </p>
              <Button variant="outline" className="bg-sage-100 hover:bg-sage-200 text-sage-800">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/30 border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ "--animation-delay": "400ms" } as React.CSSProperties}>
            <CardContent className="p-6 text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-sage-600" />
              <h3 className="text-xl font-semibold mb-4 text-sage-900">Group Sessions</h3>
              <p className="text-sage-700 mb-6">
                Join supportive group therapy sessions led by expert counselors.
              </p>
              <Button variant="outline" className="bg-sage-100 hover:bg-sage-200 text-sage-800">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};