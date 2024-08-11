import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';

const host = process.env.REACT_APP_HOST;

const byteArrayToBase64 = (byteArray) => {
  let binary = '';
  const bytes = new Uint8Array(byteArray);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${host}/api/v1/reviews/accepted`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 reviews at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 review at a time on smaller screens
        }
      }
    ]
  };

  // Function to generate star rating
  const renderStars = (rating) => {
    const stars = Array(5).fill(false).map((_, index) => index < rating);
    return stars.map((filled, index) => (
      <FaStar key={index} className={`text-yellow-400 ${filled ? 'fill-current' : 'text-gray-300'}`} />
    ));
  };

  return (
    <div className="w-full py-16 px-4 bg-gray-100">
      <div className="max-w-[1240px] mx-auto">
        <Slider {...settings}>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review._id} className="p-6 bg-white shadow-lg rounded-lg text-center transition-transform transform hover:scale-105 h-[400px]">
                {review.image && review.image.data ? (
                  <img
                    className="w-32 h-32 mx-auto rounded-full object-cover mb-6 border-4 border-gray-200"
                    src={`data:${review.image.contentType};base64,${byteArrayToBase64(review.image.data.data)}`}
                    alt={review.name}
                  />
                ) : (
                  <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 mb-6 flex items-center justify-center text-gray-700 text-xl font-bold">
                    No Image
                  </div>
                )}
                <p className="text-2xl font-semibold mb-2">{review.name}</p>
                <div className="flex justify-center mb-4">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700">{review.description}</p>
              </div>
            ))
          ) : (
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <p className="text-gray-700">No reviews available</p>
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
