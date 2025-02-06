// pages/index.js or your main landing page file
import { useState, useEffect } from 'react';
import InfluencerDetails from '../components/InfluencerDetails'
import InfluencerList from '../components/AllInfluencersList'

export default function InfluencerlistPage({ language }) {
  const [selectedInfluencer, setSelectedInfluencer] = useState(null); 

  console.log("languageee", language);

  return (
    <div >
      {selectedInfluencer != null ? (<InfluencerDetails influencer={selectedInfluencer} language={language} setSelectedInfluencerw={setSelectedInfluencer}  />) :
      <>
        <InfluencerList language={language} setSelectedInfluencerw={setSelectedInfluencer} />
   
      </>
}
    </div>
  );
}
