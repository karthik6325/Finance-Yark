import React, { useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const host = process.env.REACT_APP_HOST;

const Review = () => {
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [isImageSaved, setIsImageSaved] = useState(false); // Track if image is saved
  const editorRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast.error('Please select a rating.');
      return;
    }

    if (!image || !isImageSaved) {
      toast.error('Please save the image before submitting.');
      return;
    }

    const formData = new FormData();
    formData.append('name', e.target.name.value);
    formData.append('rating', rating);
    formData.append('description', e.target.description.value);
    formData.append('image', image); // Assuming `image` is a File object or Data URL

    try {
      await axios.post(`${host}/api/v1/review`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success('Review submitted successfully!');
      e.target.reset();
      setRating(0);
      setImage(null);
      setEditorOpen(false);
      setIsImageSaved(false);
    } catch (err) {
      console.error(err);
      toast.error('Failed to submit review');
    }
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setEditorOpen(true);
      setIsImageSaved(false); // Reset the save status when a new image is uploaded
    }
  };

  const handleCrop = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImage();
      setImage(canvas.toDataURL()); // Save the cropped image as Data URL
      setEditorOpen(false);
      setIsImageSaved(true); // Mark the image as saved
    }
  };

  return (
    <div className="p-20 relative flex-col justify-center overflow-hidden bg-gray-50 min-h-screen">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Add a Review</h2>
      </div>

      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col p-16 rounded-lg max-w-lg w-full shadow-xl">
          <label className="mb-2">Name</label>
          <input type="text" name="name" className="mb-4 p-3 text-lg border border-gray-600 rounded" required />

          <label className="mb-2">Rating</label>
          <div className="flex mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                onClick={() => handleRating(star)}
                xmlns="http://www.w3.org/2000/svg"
                fill={star <= rating ? 'currentColor' : 'none'}
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-8 h-8 cursor-pointer ${
                  star <= rating ? 'text-yellow-500' : 'text-gray-400'
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            ))}
          </div>

          <label className="mb-2">Description</label>
          <textarea
            name="description"
            className="mb-4 p-3 text-lg border border-gray-600 rounded h-32"
            required
          ></textarea>

          <label className="mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-4 p-3 text-lg border border-gray-600 rounded"
          />
          
          {image && !editorOpen && (
            <div className="mb-4 flex justify-center">
              <img
                src={typeof image === 'string' ? image : URL.createObjectURL(image)}
                alt="Uploaded Preview"
                className="w-32 h-32 rounded-full object-cover cursor-pointer"
                onClick={() => setEditorOpen(true)}
              />
            </div>
          )}

          {editorOpen && (
            <div className="mb-4 flex flex-col items-center">
              <AvatarEditor
                ref={editorRef}
                image={image}
                width={200}
                height={200}
                border={50}
                borderRadius={100}
                color={[255, 255, 255, 0.6]} // RGBA
                scale={1.2}
                rotate={0}
              />
              <button
                type="button"
                onClick={handleCrop}
                className="mt-4 bg-[#E9D06C] w-[200px] border-[#E9D06C] rounded-md font-medium py-2 text-black"
              >
                Edit & Save
              </button>
            </div>
          )}

          <button className="bg-[#E9D06C] w-[200px] border-[#E9D06C] rounded-md font-medium my-6 mx-auto py-3 text-black relative h-12 w-40 overflow-hidden border bg-[#E9D06C]-500 text-black shadow-4xl transition-all hover:shadow-[#E9D06C]-500">
            <span className="relative z-10 text-black">Submit</span>
          </button>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default Review;
