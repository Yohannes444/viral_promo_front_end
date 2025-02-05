import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FeaturesSection({ language }) {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const features = [
    {
      image: "/DALL·E 2025-02-04 17.52.13 - A professional female Ethiopian influencer promoting a designer bag in Addis Ababa, captured in a TikTok-style video frame on a phone screen. The infl.webp",  // Add actual image path
      title: {
        en: "High-Quality Content",
        am: "ከፍተኛ ጥራት ማስተዋወቅ",
      },
      description: {
        en: "We ensure that all content is of the highest quality, tailored to your audience.",
        am: "ሁሉም እትም ከፍተኛ ጥራት እንደሆነ እና ለተመረጡት ተመን ተመስርቶ እንዲሰጥ እንሠራ።",
      },
    },
    {
      image: "/DALL·E 2025-02-04 19.23.16 - An Ethiopian TikToker filming a video in front of a shop that is closing. The scene shows an influencer looking directly at the camera while holding a.webp",  // Add actual image path
      title: {
        en: "Real-Time Analytics",
        am: "በምእመናን ተመላላሽ ትንታኔ",
      },
      description: {
        en: "Access real-time insights to make informed decisions and drive your strategy.",
        am: "በምእመናን ተመላላሽ ትንታኔ ለመወሰን የምእመናን መረጃዎችን በቀጥታ ያገኙ።",
      },
    },
    {
      image: "/DALL·E 2025-02-04 19.23.16 - An Ethiopian TikToker filming a video in front of a shop that is closing. The scene shows an influencer looking directly at the camera while holding a.webp",  // Add actual image path
      title: {
        en: "Real-Time Analytics",
        am: "በምእመናን ተመላላሽ ትንታኔ",
      },
      description: {
        en: "Access real-time insights to make informed decisions and drive your strategy.",
        am: "በምእመናን ተመላላሽ ትንታኔ ለመወሰን የምእመናን መረጃዎችን በቀጥታ ያገኙ።",
      },
    },
    // Add more features as needed
  ];

  // Auto transition between features every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="py-20  mt-8"   > {/* Set dark background for entire section */}
      <div className="container mx-auto px-4">
        {/* Grid Layout for the cards */}
        <div className="flex justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Loop through the features and display them in a grid */}
          {features.map((feature, index) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              whileDrag={{ scale: 0.9, rotate: 10 }}
              drag
              className="bg-gray-700 bg-opacity-50 rounded-lg shadow-lg shadow-white p-6 flex flex-col items-center max-w-xs mx-auto" // Set max-width for the cards and apply opacity
            >
              {/* Image Section map-of-the-world-2401458_1280.jpg */}
              <div className="h-48 mb-6 p-4">
                <img
                  src={feature.image}
                  alt={`Feature ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Title and Description */}
              <div className="text-center p-4">
                <h1 className="text-xl font-extrabold text-white mb-4">
                  {feature.title[language]}
                </h1>
                <p className="text-base text-white font-light break-words">
                  {feature.description[language]}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
