import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a specific qualification to join this program?",
    answer:
      "No. No degree in psychology, neurology, or other subjects is needed. We teach you from scratch.!",
  },
  {
    question: "Can I pick some of these certifications? I am not able to / willing to complete all of them?",
    answer:
      "Yes. You may choose any certification pay for that program and complete work associated with that particular certification. Each independent certification has a Fee of Rs 12000 + Taxes. There could be time-bound discounts available. Please check the page of that specific certification to know the schedule and discounts.",
  },
  {
    question: "Do we get the study material?",
    answer:
      "Absolutely! You not only get books but the learning happens through a workbook with meticulously planned activities and content. Ample web resources with websites, videos, and tests are also provided.",
  },
  {
    question: "What support is available during the course?",
    answer:
      "We provide dedicated mentor support, group discussions, and regular check-ins throughout your course journey.",
  },
  {
    question: "If I choose electives, will there be any change in the fees?",
    answer:
      "It will depend on which electives are opted for. Some courses like EFT & NLP are longer courses delivered by international trainers. Such programs may cost little more.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary-light/5 to-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase bg-primary-light/10 rounded-full">
            FAQ
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-primary">
            Common Questions
          </h2>
          <p className="text-lg text-gray-600">
            You can find answers to frequently asked questions about our courses and programs.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-primary-light/20 rounded-lg mb-4 px-6 py-2 hover:bg-primary-light/5"
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
