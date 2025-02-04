// pages/index.js or your main landing page file

import { useState } from "react";
import HeroSection from "../components/HeroSection";  // Adjust the path based on your file structure
import FeaturesSection from "../components/FeaturesSection";  // Import FeaturesSection
import TestimonialSection from "../components/Testimonial";  // Import TestimonialSection
import AboutSection from "../components/AboutSection";  // Import AboutSection
export default function HomePage() {
  const [language, setLanguage] = useState("en");

  return (
    <div>
      <HeroSection language={language} setLanguage={setLanguage} />
      <AboutSection language={language} />  
      <FeaturesSection language={language} />  {/* Use FeaturesSection */}
      <TestimonialSection language={language} />        {/* You can add other sections here as you build them */}
    </div>
  );
}
