import { Button } from "./ui/button";

export const MentalHealthcare = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our mental healthcare offerings</h2>
          <p className="text-primary/70 max-w-3xl mx-auto">
            We are a mental health ecosystem that brings together multiple treatment options to create an experience that makes getting help easy and seamless. From assessment to treatment, we're with you every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Therapy & Psychiatry Column */}
          <div className="relative">
            <div className="rounded-full bg-secondary/10 p-8">
              <img
                src="/lovable-uploads/b3421704-3601-4485-8df0-8fecfb33cbb8.png"
                alt="Therapy Session"
                className="w-full rounded-3xl shadow-lg"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-3xl font-bold text-primary mb-4">Therapy & Psychiatry</h3>
              <p className="text-primary/70 mb-4">
                Our in-house team of mental health therapist and psychiatrist is highly qualified and trained to deliver quality and compassionate clinical treatment.
              </p>
              <p className="text-primary/70 mb-6">
                Our team follows proprietary clinical protocols & undergoes peer supervision to ensure each individual gets exceptional care, either online or in person.
              </p>
              <Button 
                variant="outline"
                className="bg-white hover:bg-secondary-light/10 text-secondary border-secondary/20"
              >
                GET STARTED
              </Button>
            </div>
          </div>

          {/* Self-Care Column */}
          <div className="relative mt-8 md:mt-16">
            <div className="rounded-full bg-accent/10 p-8">
              <img
                src="/placeholder.svg"
                alt="Amaha App"
                className="w-full rounded-3xl shadow-lg"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-3xl font-bold text-primary mb-4">Self-Care</h3>
              <p className="text-primary/70 mb-4">
                The Amaha app is a digital powerhouse of mental health resources.
              </p>
              <p className="text-primary/70 mb-6">
                Get access to a personalized plan with 600+ tools, activities, articles & daily reminders to make mental healthcare a part of your routine.
              </p>
              <Button 
                variant="outline"
                className="bg-white hover:bg-secondary-light/10 text-secondary border-secondary/20"
              >
                DOWNLOAD THE APP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};