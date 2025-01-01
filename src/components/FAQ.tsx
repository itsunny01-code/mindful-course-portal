import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What qualifications do your counselors have?",
    answer:
      "Our counselors are licensed professionals with advanced degrees in counseling or related fields, backed by various certifications and years of practical experience.",
  },
  {
    question: "How long are the counseling courses?",
    answer:
      "Course durations vary from 6 to 12 weeks, depending on the program. Each is designed to provide comprehensive coverage while fitting into your schedule.",
  },
  {
    question: "Are the courses available online?",
    answer:
      "Yes, all our courses are available online with flexible scheduling options. You can access the content anytime, anywhere.",
  },
  {
    question: "What support is available during the course?",
    answer:
      "We provide dedicated mentor support, group discussions, and regular check-ins throughout your course journey.",
  },
  {
    question: "Are there any prerequisites for the courses?",
    answer:
      "Most of our courses are designed to be accessible to beginners, though some advanced courses may require prior experience or basic certifications.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-cream-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-sage-700 uppercase bg-sage-100 rounded-full">
            FAQ
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Common Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to frequently asked questions about our courses and programs.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-sage-100 rounded-lg mb-4 px-6 py-2 hover:bg-sage-50/50"
              >
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};