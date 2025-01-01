import { Button } from "./ui/button";

export const CTA = () => {
  return (
    <section className="py-24 bg-sage-600">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white">
            Ready to Transform Your Life?
          </h2>
          <p className="mb-10 text-lg text-sage-100">
            Join thousands of others who have already started their journey to
            emotional wellness and personal growth.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-sage-600 hover:bg-sage-50">
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sage-600"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};