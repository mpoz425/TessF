import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC<{ items: FAQItem[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, index) => (
        <div key={index} className="py-6">
          <button
            onClick={() => toggleItem(index)}
            className="flex w-full items-start justify-between text-left focus:outline-none focus:ring-2 focus:ring-softBlue-500 focus:ring-offset-2 rounded-lg"
            aria-expanded={openIndex === index}
          >
            <span className="text-lg font-medium text-gray-900">
              {item.question}
            </span>
            <span className="ml-6 flex h-7 items-center">
              <svg
                className={`h-6 w-6 transform text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          {openIndex === index && (
            <div className="mt-4 pr-12">
              <p className="text-base text-gray-600">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
