'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Can I change my plan anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle. If you upgrade mid-cycle, we\'ll pro-rate the difference.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards (Visa, Mastercard, American Express), as well as PayPal for additional flexibility.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No, there are no setup fees, hidden charges, or surprise costs. What you see is what you pay. You can start with our free plan and upgrade whenever you\'re ready.'
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer: 'Yes! When you switch to annual billing, you get 20% off the total yearly price compared to paying monthly. This applies to all paid plans.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. You can cancel your subscription at any time with no penalties or long-term commitments. Your access continues until the end of your billing period.'
  },
  {
    question: 'What happens to my data when I cancel?',
    answer: 'Your data remains yours. Upon cancellation, you have 30 days to download or export all your data. After that, we securely delete it from our systems.'
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      <div className="accordion-header">
        <h3>Frequently Asked Questions</h3>
        <p>Have questions about pricing? We\'ve got answers.</p>
      </div>

      <div className="accordion-items">
        {faqItems.map((item, index) => (
          <div key={index} className={`accordion-item ${openIndex === index ? 'active' : ''}`}>
            <button
              className="accordion-trigger"
              onClick={() => toggleItem(index)}
              aria-expanded={openIndex === index}
            >
              <span className="accordion-question">{item.question}</span>
              <span className="accordion-icon">+</span>
            </button>
            {openIndex === index && (
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
