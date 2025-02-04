
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Globe, Users } from "lucide-react";
import { motion } from "framer-motion";

const images = [
  "/DALL·E 2025-02-04 17.52.13 - A professional female Ethiopian influencer promoting a designer bag in Addis Ababa, captured in a TikTok-style video frame on a phone screen. The infl.webp",
  "/DALL·E 2025-02-04 19.25.04 - A realistic wide-angle scene of an Ethiopian TikToker filming a video inside a clothing shop. The influencer, a stylish Ethiopian woman with slightly .webp",
  "/image (14).png"
];

export default function HeroSection({ language, setLanguage }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      headline: "Where Businesses & Influencers Connect!",
      description: "Find the perfect match. No hassle. No wasted time. Just seamless collaboration.",
      cta: "Join Now",
    },
    am: {
      headline: "ድርጅቶችና ኢንፍሉዌንሰሮች የሚገናኙበት ቦታ!",
      description: "ድርጅትወን ለማስተዋወቅ ቀላል አና ፈጣን መንግድ።",
      cta: "አሁኑኑ ይቀላቀሉ",
    },
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center text-white text-center p-4"
      style={{
        backgroundImage: `url('${images[currentImage]}')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute top-5 right-5 z-10">
        <Button
          variant="contained"
          startIcon={<Globe />}
          onClick={() => setLanguage(language === "en" ? "am" : "en")}
        >
          {language === "en" ? "አማርኛ" : "English"}
        </Button>
      </div>
      <motion.h1
        className="text-6xl font-extrabold mb-4 drop-shadow-lg z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {content[language].headline}
      </motion.h1>
      <motion.p
        className="text-2xl text-gray-200 max-w-2xl drop-shadow-md z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {content[language].description}
      </motion.p>
      <motion.div
        className="z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Button
          variant="contained"
          color="primary"
          className="mt-8 px-6 py-3 text-lg font-semibold rounded-lg shadow-lg"
          startIcon={<Users />}
        >
          {content[language].cta}
        </Button>
      </motion.div>
    </div>
  );
}
