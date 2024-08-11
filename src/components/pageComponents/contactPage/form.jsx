import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Form = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = {
      name: e.target.name.value,
      mobile: e.target.mobile.value,
      email: e.target.email.value,
      support: e.target.support.value,
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_HOST}/api/v1/contact`, formData);
      if (response.status === 200) {
        toast.success('Message sent successfully!');
      } else {
        toast.error('Error sending message!');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error sending message!');
    } finally {
      setLoading(false);
      e.target.reset();
    }
  };

  return (
    <div className="p-20 relative flex-col justify-center overflow-hidden bg-gray-50">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Contact Us</h2>
      </div>
      <div className='flex justify-center items-center'>
      </div>
      <div className='flex justify-center items-center min-h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col p-16 rounded-lg max-w-lg w-full shadow-xl flex flex-col rounded-lg '>
          <label className='mb-2'>Name</label>
          <input type='text' name='name' className='mb-4 p-3 text-lg border border-gray-600 rounded' required />
          
          <label className='mb-2'>Mobile no.</label>
          <input type='text' name='mobile' className='mb-4 p-3 text-lg border border-gray-600 rounded' required />
          
          <label className='mb-2'>Email ID</label>
          <input type='email' name='email' className='mb-4 p-3 text-lg border border-gray-600 rounded' required />
          
          <label className='mb-2'>Support needed</label>
          <select name='support' className='mb-4 p-3 text-lg border border-gray-600 text-black-200 rounded' required>
            <option value='Portfolio designing'>Portfolio designing</option>
            <option value='Portfolio restructuring'>Portfolio restructuring</option>
            <option value='Investment Guidance'>Investment Guidance</option>
            <option value='Tax Planning'>Tax Planning</option>
            <option value='Insurance'>Insurance</option>
          </select>
          
          <button 
            type='submit' 
            className="bg-[#E9D06C] w-[200px] border-[#E9D06C] rounded-md font-medium my-6 mx-auto py-3 text-black before:ease relative h-12 w-40 overflow-hidden border bg-[#E9D06C]-500 text-black shadow-4xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-60 before:duration-700 hover:shadow-[#E9D06C]-500 hover:before:-translate-x-40"
            disabled={loading}
          >
            <span relative="relative z-10 text-black">{loading ? 'Sending...' : 'Submit'}</span>
          </button>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default Form;
