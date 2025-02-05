// pages/index.js or your main landing page file
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialSection from '../components/Testimonial';
import AboutSection from '../components/AboutSection';
import Footer from '../components/footer';
import { Parallax } from 'react-scroll-parallax';
import InfluencerSection from '../components/InfluencerSection'
export default function HomePage() {
  const [language, setLanguage] = useState('en');

  return (
    <div>
      <HeroSection language={language} setLanguage={setLanguage} />
      <AboutSection language={language} />
      <InfluencerSection language={language} />
      {/* <Parallax speed={-10}>
        <div
          style={{
            backgroundImage: `url('/map-of-the-world-2401458_1280.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        > */}
          <FeaturesSection language={language} />

        {/* </div>
      </Parallax> */}
      <TestimonialSection language={language} />
      <Footer language={language} />
    </div>
  );
}
