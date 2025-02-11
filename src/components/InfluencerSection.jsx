import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IPhoneMockup } from 'react-device-mockup';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = z.object({
    fullName: z.string().min(3, 'Full name is required').max(25, " name must be less than 25 characters"),
    phoneNumber: z.string().min(10, 'Phone number is required').max(10, " phone number must be less than 10 characters"),
    businessName: z.string().min(3, 'Business name is required').max(25, " busines name must be less than 25 characters"),
    address: z.string().min(5, 'Address is required').max(25, " addres must be less than 25 characters"),
});

const InfluencerList = ({ language, setSelectedInfluencerw }) => {
    const [influencers, setInfluencers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedInfluencer, setSelectedInfluencer] = useState(null);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: zodResolver(schema) });

    const aff= [0,1,2]
    useEffect(() => {
        const fetchInfluencers = async () => {
            try {
                const response = await axios.get('https://viral-promo-backend.onrender.com/influencers');
                setInfluencers(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching influencers:', error);
                setLoading(false);
            }
        };
        fetchInfluencers();
    }, []);

    const handleBookClick = (influencer) => {
        setSelectedInfluencer(influencer);
    };

    const handleDetailClick = (influencer) => {
        setSelectedInfluencerw(influencer);
    };

    const closeModal = () => {
        setSelectedInfluencer(null);
        reset();
    };

    const onSubmit = async (data) => {
        try {
            await axios.post('https://datingappbackend-tvm5.onrender.com/order', { ...data, influencerId: selectedInfluencer._id });
            toast.success('Booking successful!');
            closeModal();
        } catch (error) {
            toast.error('Failed to book influencer.');
        }
    };

    const handleMoreInfluencersClick = () => {
        navigate('/influencers');
    }

    return (
        <div className="px-4 sm:px-10 md:px-20 mx-auto mt-8">
            <ToastContainer />
            <h2 className="text-3xl sm:text-4xl text-white font-bold pb-6 mb-6 text-center">
                {language === 'en' ? "Meet Our Top Influencers" : "ከኛጋር የሚሰሩ ኢንፍሉዌንሰሮች"}
            </h2>
            {loading ? (
                <p className="text-center text-white">Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {aff.map((influencer) => (
                            <div key={influencers[influencer]._id}>
                                <IPhoneMockup width={300} orientation="portrait" color="black">
                                    <div
                                        className="rounded-lg border-4 border-black pb-4 m-4 text-white bg-gray-700 h-full flex flex-col items-center text-center  shadow-white shadow-md"
                                        style={{
                                            backgroundImage: `url(${influencers[influencer].photos[0]})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            height: '100%',
                                        }}
                                    >
                                <div className='mt-9'></div>
                                <div className='mt-9'></div>
                                <div className='mt-9'></div>
                                <div className='mt-9'></div>
                                <div className='mt-9'></div>
                                <div className='mt-9'></div>
                                <div className='mt-9'></div>
                                <div className='mt-9'></div>
                                <div className='mt-9'></div>
                                    <h3 className="text-xl font-semibold mt-9 bg-black bg-opacity-50 w-full py-2">
                                        {influencers[influencer].userId.firstName} {influencers[influencer].userId.lastName}
                                    </h3>
                                    <p className="bg-black bg-opacity-50 w-full py-1">
                                        Followers: {influencers[influencer].platforms.reduce((total, p) => total + p.followers, 0)}
                                    </p>
                                    <button onClick={() => handleDetailClick(influencers[influencer])} className="bg-black mb-3  font-bold text-white px-6 py-2 rounded-lg hover:bg-black">
                                        {language === 'en' ? "view Detail" : "በዝርዝር ይመልከቱ"}
                                    </button>
                                    <button onClick={() => handleBookClick(influencers[influencer])} className="bg-black  font-bold text-white px-6 py-2 rounded-lg hover:bg-black">
                                        {language === 'en' ? "Book Influencer" : "ኢንፍሉዌንሰር ለማስተዋወቅ"}
                                    </button>
                                </div>
                            </IPhoneMockup>
                        </div>
                    ))}
                </div>
            )}
            {selectedInfluencer && (
  <div className="fixed  inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80">
    <div className="bg-gray-700 p-6 rounded-lg w-96 shadow-white shadow-lg bg-opacity-80">
      <h3 className="text-xl font-bold mb-4 text-white">Book {selectedInfluencer.userId.firstName}</h3>
      <form onSubmit={handleSubmit(onSubmit)} className=" p-4 rounded-lg shadow">
        <input 
          {...register('fullName')} 
          className="w-full p-3 border rounded-lg bg-gray-200  placeholder-gray-700 mb-2" 
          placeholder="Full Name" 
        />
        {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}

        <input 
          {...register('phoneNumber')} 
          className="w-full p-3 border rounded-lg bg-gray-200  placeholder-gray-700 mb-2" 
          placeholder="Phone Number" 
        />
        {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}

        <input 
          {...register('businessName')} 
          className="w-full p-3 border rounded-lg bg-gray-200  placeholder-gray-700 mb-2" 
          placeholder="Business Name" 
        />
        {errors.businessName && <p className="text-red-500">{errors.businessName.message}</p>}

        <input 
          {...register('address')} 
          className="w-full p-3 border rounded-lg bg-gray-200  placeholder-gray-700 mb-4" 
          placeholder="Address" 
        />
        {errors.address && <p className="text-red-500">{errors.address.message}</p>}

        <div className="flex justify-between">
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md">
            Book
          </button>
          <button type="button" onClick={closeModal} className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg shadow-md">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}

            <div className="flex justify-center mt-6">
                <button
                    onClick={()=>handleMoreInfluencersClick()}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                    {language === 'en' ? "More Influencers" : "ተጨማሪ ኢንፍሉዌንሰሮች"}
                </button>
            </div>
        </div>
    );
};

export default InfluencerList;
