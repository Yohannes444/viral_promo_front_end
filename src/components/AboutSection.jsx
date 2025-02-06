import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutSection({ language }) {
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
        am: "ሁሉም እትም ከፍተኛ ጥራት እንደሆነ እንዲሆን እና ለተመረጡት ተመን ተመስርቶ እንዲሰጥ እንሠራ።",
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
    <div className="py-20  mt-8 ">
                  <h2 className="text-4xl text-white font-bold ml-9 pb-6 mb-6">{language === 'en'?"About Us":"ስለኛ"}</h2>

      <div className="container mx-auto ">
        {/* Render only the current feature features section */}
        <div
          key={currentFeatureIndex}
          className="flex items-center justify-between space-x-12 "
        >
          {/* Left Section - Image Container */}
          <motion.div
            className="flex-1 max-w-[50%] mx-auto" // Ensure container takes 30% width of the section and is centered
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            
          >
            <div className="relative w-full  h-0 pb-[25%]"> {/* Aspect ratio of 1:1 */}
              {/* <img
                src={features[currentFeatureIndex].image}
                alt={`Feature ${currentFeatureIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
              /> */}
                <img
              src={features[currentFeatureIndex].image}
              alt={`Feature ${currentFeatureIndex + 1}`}
              className="justfy-center  rounded-lg shadow-lg mx-auto"
              style={{ maxWidth: "50%", marginLeft:'10%' }}
            />
            </div>
          </motion.div>

          {/* Right Section - Title & Description */}
          <motion.div
            className="flex-1 max-w-[50%] text-center" // Right section takes the remaining 50%
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Title */}
            <h1 className="text-3xl font-extrabold mb-4 text-white font-serif">
              {features[currentFeatureIndex].title[language]}
            </h1>
            <p className="text-lg text-white font-light">
              {features[currentFeatureIndex].description[language]}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

