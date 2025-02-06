import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaTiktok, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const platformIcons = {
  TikTok: <FaTiktok className="text-gray-700" />,
  Instagram: <FaInstagram className="text-pink-500" />,
  YouTube: <FaYoutube className="text-red-500" />,
  Facebook: <FaFacebook className="text-blue-600" />,
};

const schema = z.object({
  fullName: z.string().min(3, "Full name is required").max(25, "Name must be less than 25 characters"),
  phoneNumber: z.string().min(10, "Phone number is required").max(10, "Phone number must be 10 digits"),
  businessName: z.string().min(3, "Business name is required").max(25, "Business name must be less than 25 characters"),
  address: z.string().min(5, "Address is required").max(25, "Address must be less than 25 characters"),
});

const InfluencerDetails = ({ influencer, language, setSelectedInfluencerw }) => {
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: zodResolver(schema) });

  if (!influencer) return <p className="text-center text-red-500">No influencer data provided.</p>;

  const { userId, contactInfo, platforms, photos } = influencer;
  const totalFollowers = platforms.reduce((sum, platform) => sum + platform.followers, 0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleBookClick = () => {
    setSelectedInfluencer(influencer);
  };

  const closeModal = () => {
    setSelectedInfluencer(null);
  };

  const onSubmit = async (data) => {
    try {
      await axios.post("/api/influencer", { ...data, influencerId: selectedInfluencer._id });
      toast.success("Booking successful!");
      closeModal();
    } catch (error) {
      toast.error("Failed to book influencer.");
    }
  };

  return (
    <div className="max-w-4xl mt-6 mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row gap-6">
      {/* Image Slider */}
      <div className="w-full md:w-1/2">
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index}>
              <img src={photo} alt={`Influencer ${index + 1}`} className="w-full h-96 object-cover rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
  {/* Wrapper div to push the button to the right */}
 
        <h2 className="text-2xl font-bold text-gray-800">{userId.firstName} {userId.lastName}</h2>
        <p className="text-lg font-semibold text-blue-600">
          {language === "en" ? "Total Followers" : "አጠቃላይ ተከታዮች"}: {totalFollowers.toLocaleString()}
        </p>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-700">
            {language === "en" ? "Platforms" : "ፎገርዋትው"}:
          </h3>
          <ul className="mt-2 space-y-2">
            {platforms.map((platform) => (
              <li key={platform._id} className="flex justify-between bg-gray-100 p-3 rounded-lg">
                <span className="flex items-center gap-2 font-medium text-gray-800">
                  {platformIcons[platform.name]}
                  {platform.name}
                </span>
                <span className="text-blue-500 font-semibold">
                  {platform.followers.toLocaleString()} {language === "en" ? "followers" : "ግንባዊት"}
                </span>
              </li>
            ))}
          </ul>
          <button
            onClick={handleBookClick}
            className="bg-green-400 text-white font-bold px-6 py-2 rounded-lg hover:bg-green-800 mt-4"
          >
            {language === "en" ? "Book Influencer" : "ኢንፍሉዌንሰር ለማስተዋወቅ"}
          </button>
          <button
      className="rounded-lg ml-3 p-2 bg-red-400 shadow-lg font-bold text-white hover:bg-red-800"
      onClick={() => setSelectedInfluencerw(null)}
    >
      cancel
    </button>
        </div>
      </div>

      {/* Booking Modal */}
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
    </div>
  );
};

export default InfluencerDetails;
