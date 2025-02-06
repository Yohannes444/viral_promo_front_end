import { useState, useEffect } from "react";
import { Button, Dialog, DialogContent, IconButton } from "@mui/material";
import { Globe, Users, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const images = [
  "/DALL·E 2025-02-04 17.52.13.webp",
  "/DALL·E 2025-02-04 19.25.04.webp",
  "/image (14).png"
];

export default function HeroSection({ language, setLanguage }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div
      className="relative flex flex-col items-center justify-center h-[500px] bg-cover bg-center text-white text-center p-4"
      style={{ backgroundImage: `url('${images[currentImage]}')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Navigation Bar - Visible on large screens, hidden on small screens */}
      <nav className="absolute top-0 left-45 right-45 w-auto bg-gray-200 bg-opacity-50 rounded-b-xl shadow-md py-9 px-8 flex justify-center space-x-6 hidden md:flex">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-black rounded-full"></div>
          <ul className="flex space-x-6 text-white font-medium">
            <li>{headers[language].About_Us}</li>
            <li>{headers[language].Influencers}</li>
            <li>{headers[language].Services}</li>
            <li>{headers[language].Contact}</li>
          </ul>
        </div>
        <Button
          variant="contained"
          startIcon={<Globe />}
          onClick={() => setLanguage(language === "en" ? "am" : "en")}
        >
          {language === "en" ? "አማርኛ" : "English"}
        </Button>
      </nav>

      {/* Mobile Navigation Button - Visible only on small screens */}
      <div className="absolute top-4 right-4 md:hidden">
        <IconButton onClick={() => setIsMenuOpen(true)}>
          <Menu size={24} className="text-white" />
        </IconButton>
      </div>

      {/* Mobile Menu Modal */}
      <Dialog open={isMenuOpen} onClose={() => setIsMenuOpen(false)} fullScreen>
        <DialogContent className="bg-gray-900 text-white flex flex-col items-center justify-center h-full space-y-6">
          <IconButton className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
            <X size={30} className="text-white" />
          </IconButton>
          <ul className="text-2xl space-y-4">
            <li onClick={() => setIsMenuOpen(false)}>{headers[language].About_Us}</li>
            <li onClick={() => setIsMenuOpen(false)}>{headers[language].Influencers}</li>
            <li onClick={() => setIsMenuOpen(false)}>{headers[language].Services}</li>
            <li onClick={() => setIsMenuOpen(false)}>{headers[language].Contact}</li>
          </ul>
        </DialogContent>
      </Dialog>

      {/* Hero Content */}
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
