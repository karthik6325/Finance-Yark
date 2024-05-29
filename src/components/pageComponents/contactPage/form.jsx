import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.error('Error sending message!');
    e.target.reset();
  };

  return (
    <div class="p-20 relative flex-col justify-center overflow-hidden bg-gray-50">
    <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 class="font-heading font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Contact Us</h2>
            </div>
            <div className='flex justify-center items-center'>
          {/* <p className='md:text-xl sm:text-4xl py-4'>
          Meeting in person is great, but with our virtual financial planning services, 
          you can access our expertise from anywhere. Our secure platform makes it easy to share 
          your financial information with us. Get the financial security you want, when and how you want 
          it by dropping in details below,

          </p> */}
        </div>
    <div className='flex justify-center items-center min-h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col p-16 rounded-lg max-w-lg w-full shadow-xl flex flex-col rounded-lg '>
        <label className='mb-2'>Name</label>
        <input type='text' name='name' className='mb-4 p-3 text-lg border border-gray-600 rounded' />
        
        <label className='mb-2'>Mobile no.</label>
        <input type='text' name='mobile' className='mb-4 p-3 text-lg border border-gray-600 rounded' />
        
        <label className='mb-2'>Email ID</label>
        <input type='text' name='email' className='mb-4 p-3 text-lg border border-gray-600 rounded' />
        
        <label className='mb-2'>Support needed</label>
        <select name='support' className='mb-4 p-3 text-lg border border-gray-600 text-black-200 rounded'>
          <option value='Portfolio designing'>Portfolio designing</option>
          <option value='Portfolio restructuring'>Portfolio restructuring</option>
          <option value='Investment Guidance'>Investment Guidance</option>
          <option value='Tax Planning'>Tax Planning</option>
          <option value='Insurance'>Insurance</option>
        </select>
        
        {/* <button type='submit' className='mt-10 btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Submit
        </button> */}
        <button className="bg-[#E9D06C] w-[200px] border-[#E9D06C] rounded-md font-medium my-6 mx-auto py-3 text-black before:ease relative h-12 w-40 overflow-hidden border bg-[#E9D06C]-500 text-black shadow-4xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-60 before:duration-700 hover:shadow-[#E9D06C]-500 hover:before:-translate-x-40">
          <span relative="relative z-10 text-black">Submit</span>
        </button>
        <Toaster />
      </form>
    </div>
    </div>
  );
};

export default Form;
