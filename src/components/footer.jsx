export default function Footer({ language }) {
    const content = {
      en: {
        brand: "Viral production",
        description:
          "We provide high-quality content and real-time analytics to help you grow your brand.",
        quickLinks: "Quick Links",
        about: "About Us",
        services: "Services",
        contact: "Contact",
        privacy: "Privacy Policy",
        followUs: "Follow Us",
        copyright: "All rights reserved.",
      },
      am: {
        brand: "Viral production",
        description:
          "የእርስዎ ብልህነት እንዲያድግ እንዲረዳ ከፍተኛ ጥራት ያለውን ይዘት እና በምእመናን ተመላላሽ ትንታኔ እናቀርባለን።",
        quickLinks: "ፈጣን ማስታወሻዎች",
        about: "ስለ እኛ",
        services: "አገልግሎቶች",
        contact: "እኛን ያግኙ",
        privacy: "የግል የመረጃ ፖሊሲ",
        followUs: "እኛን ይከተሉ",
        copyright: "ሁሉም መብቶች የተጠበቁ ናቸው።",
      },
    };
  
    return (
      <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Left: Logo and Description */}
            <div>
              <h1 className="text-2xl font-bold text-white mb-4">
                {content[language].brand}
              </h1>
              <p className="text-sm leading-relaxed">{content[language].description}</p>
            </div>
  
            {/* Middle: Quick Links */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                {content[language].quickLinks}
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    {content[language].about}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    {content[language].services}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    {content[language].contact}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    {content[language].privacy}
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Right: Social Media Links */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                {content[language].followUs}
              </h2>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Bottom Copyright Section */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            &copy; {new Date().getFullYear()} {content[language].brand}.{" "}
            {content[language].copyright}
          </div>
        </div>
      </footer>
    );
  }
  