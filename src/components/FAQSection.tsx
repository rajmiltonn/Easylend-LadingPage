import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What factors determine my eligibility for a personal loan?",
      answer: "Your eligibility is determined by factors such as your age (21-55 years), monthly income (minimum ₹20,000), credit score, employment status, and existing financial obligations. We also consider your repayment capacity and credit history."
    },
    {
      question: "How to get a personal loan with a low credit score?",
      answer: "Even with a low credit score, you may still qualify for a personal loan. Consider applying with a co-applicant, providing additional income proof, or choosing a secured loan option. Our partner banks offer various products for different credit profiles."
    },
    {
      question: "How long does it take to get a personal loan approved?",
      answer: "Once you submit all required documents, loan approval typically takes 24-48 hours. After approval, the loan amount is usually disbursed within 1-3 business days to your bank account."
    },
    {
      question: "What kind of interest rates can I expect on a personal loan?",
      answer: "Interest rates start from 10.99% per annum and vary based on your credit profile, loan amount, and tenure. Higher credit scores typically qualify for lower interest rates. Our platform helps you compare rates from multiple lenders."
    },
    {
      question: "What documents should I prepare for the loan application?",
      answer: "You'll need identity proof (Aadhaar, PAN), address proof, income proof (salary slips, bank statements), employment proof, and recent photographs. Self-employed individuals may need additional business documents."
    }
  ];

  return (
    <section className="py-12 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
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

export default FAQSection;