import { Button } from "./ui/button";

export const CTA = () => {
  return (
    <section className="py-24 bg-sage-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1524230572899-a752b3835840"
          alt="Modern building"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-500 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-700 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white">
            Ready to Transform Your Life?
          </h2>
          <p className="mb-10 text-lg text-sage-100">
            Join thousands of others who have already started their journey to
            emotional wellness and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-sage-600 hover:bg-sage-50 w-full sm:w-auto">
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sage-600 w-full sm:w-auto"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};