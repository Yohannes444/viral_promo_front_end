import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TestimonialSection({ language }) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonials = [
    {
      image: "/DALL·E 2025-02-04 17.52.13 - A professional female Ethiopian influencer promoting a designer bag in Addis Ababa, captured in a TikTok-style video frame on a phone screen. The infl.webp", // Replace with actual image path
      name: {
        en: "John Doe",
        am: "ጆን ዶ",
      },
      description: {
        en: "“This service has transformed my business! Highly recommended.”",
        am: "“እነዚህ አገልግሎቶች ንግድን ለማሻሻል ታላቅ ስራ አሰር ሰጠኝ! በጣም ማስተናገድ እባኮት እየፈለጉ ነበር።”",
      },
    },
    {
      image: "/DALL·E 2025-02-04 17.52.13 - A professional female Ethiopian influencer promoting a designer bag in Addis Ababa, captured in a TikTok-style video frame on a phone screen. The infl.webp", // Replace with actual image path
      name: {
        en: "Jane Smith",
        am: "ጄን ስሚት",
      },
      description: {
        en: "“A game-changer in our industry! Excellent customer support.”",
        am: "“በኢንዱስትሪታችን ስለሚሸሸጉ ለእኛ ምንም ነገር አለበት! እንደ ተለመደ ደረጃ ያለ ደህንነት።”",
      },
    },
  ];

  // Auto transition between testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="py-20 bg-gray-100 mt-8 shadow-lg" style={{
        backgroundImage: `url('/Black and White Modern Business Profile XTwitter Header.png')`,
      }}>
      <div className="container mx-auto px-4">
        {/* Render only the current testimonial */}
        <div
          key={currentTestimonialIndex}
          className="flex items-center justify-center space-x-12 mb-16"
        >
          {/* Left Section - Testimonial Description */}
          <motion.div
            className="flex-1 max-w-[50%] text-center" // Left section with text
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Description */}
            <p className="text-lg text-gray-700 font-light mb-4">
              {testimonials[currentTestimonialIndex].description[language]}
            </p>
            {/* Testimonial Name */}
            <p className="text-xl font-semibold text-gray-800">
              - {testimonials[currentTestimonialIndex].name[language]}
            </p>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div
            className="flex-1 max-w-[50%] flex justify-center" // Right section with image
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div style={{
              width: '200px',  // Increase the circle size
              height: '200px', // Increase the circle size
              borderRadius: '50%',  // Ensure the circle shape
              overflow: 'hidden',  // Ensure the image fits inside the circle
              border: '4px solid #ccc'  // Optional border around the circle
            }}>
              <img
                src={testimonials[currentTestimonialIndex].image}
                alt={`Testimonial ${currentTestimonialIndex + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Ensures the image fits nicely inside the circle
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
