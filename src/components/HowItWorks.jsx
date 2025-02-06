import React from 'react';

const HowItWorks = ({ language }) => {
  const steps = {
    en: [
      "Search For Influencers",
      "Select Your Preferred Influencer",
      "Customize Your Campaign",
      "Launch And Track Results"
    ],
    am: [
      "እንቅስቃሴ ይድረስ",
      "የተመረጡትን እንቅስቃሴ ይምረጡ",
      "የድርጅትዎን ዕቅፍ ይቀይሩ",
      "ውጤቶችን ይከታተሉ"
    ]
  };

  console.log(language);
  console.log(steps[language]);

  return (
    <div className="max-w-4xl text-white mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps[language].map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center mb-2">
              <span className="text-lg font-bold">{index + 1}</span>
            </div>
            <p className="text-center font-medium">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks; 