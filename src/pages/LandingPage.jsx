// pages/index.js or your main landing page file
import { useState, useEffect } from 'react';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialSection from '../components/Testimonial';
import AboutSection from '../components/AboutSection';
import HowItWorks from '../components/HowItWorks'
import InfluencerSection from '../components/InfluencerSection'
import InfluencerDetails from '../components/InfluencerDetails'

export default function HomePage({ language }) {
  const [selectedInfluencer, setSelectedInfluencer] = useState(null); 

  console.log("language", language);

  return (
    <div >
      {selectedInfluencer != null ? (<InfluencerDetails influencer={selectedInfluencer} language={language} setSelectedInfluencerw={setSelectedInfluencer}  />) :
      <>
        <InfluencerSection language={language} setSelectedInfluencerw={setSelectedInfluencer} />
        <AboutSection language={language} />
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
        <HowItWorks language={language} />
        <TestimonialSection language={language} />
      </>
}
    </div>
  );
}
