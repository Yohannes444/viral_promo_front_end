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

  const headers = {
    en: {
      About_Us: "About Us",
      Services: "Influencers",
      Contact: "Services",
      Influencers: "Influencers",

    },
    am: {
      About_Us: "ስለኛ",
      Influencers: "ኢንፍሉዌንሰሮች",
      Services: "አገልግሎቶች",
      Contact: "መልክት ለመላክ",

    },
  };

  return (
    <div   className="relative flex flex-col items-center justify-center h-[500px] bg-cover bg-center text-white text-center p-4"
    style={{ backgroundImage: `url('${images[currentImage]}')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Navigation Bar left and wright */}
      <nav className="absolute top-0 left-45 right-45 w-100 bg-gray-200  bg-opacity-50  rounded-b-xl shadow-md py-9  px-8 flex justify-center space-x-6">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-black rounded-full"></div>
          <ul className="flex space-x-6 text-white font-medium">
            <li>{headers[language].About_Us}</li>
            <li>{headers[language].Influencers}</li>
            <li>{headers[language].Services}</li>
            <li>{headers[language].Contact}</li>
          </ul>
        </div>
        <Button variant="contained" startIcon={<Globe />} onClick={() => setLanguage(language === "en" ? "am" : "en")}>
          {language === "en" ? "አማርኛ" : "English"}
        </Button>
      </nav>
      
      

      <motion.h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg z-10" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        {content[language].headline}
      </motion.h1>
      <motion.p className="text-2xl text-gray-200 max-w-2xl drop-shadow-md z-10" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
        {content[language].description}
      </motion.p>
      <motion.div className="z-10" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
        <Button variant="contained" color="primary" className="mt-8 px-6 py-3 text-lg font-semibold rounded-lg shadow-lg" startIcon={<Users />}>
          {content[language].cta}
        </Button>
      </motion.div>
    </div>
  );
}
