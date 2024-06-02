import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Invest from '../../../assets/undraw_Invest_re_8jl5.png'; 

const Aproach = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-y-8'>
        <img className='w-[500px] mx-auto my-4 mt-60' src={Invest} alt='Investment Illustration' />
        <div className='flex flex-col justify-center space-y-8' data-aos="fade-up">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading font-bold p-5 text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Our Approach</h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Personalized Solutions</h1>
            <p>
              We understand that everyone's financial situation is unique. 
              That's why we tailor our services to fit your specific needs. 
              Whether you're planning for retirement, saving for your child's education, or managing debt, 
              we've got you covered.
            </p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Holistic Planning</h1>
            <p>
              YARK takes a holistic approach to financial planning. We consider all aspects of your financial life, 
              from investments and insurance to estate planning and tax optimization. Our goal is to create a 
              comprehensive roadmap that aligns with your dreams and aspirations.
            </p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Education and Empowerment</h1>
            <p>
              We don't just manage your finances; we educate and empower you along the way. Our workshops, 
              webinars, and personalized consultations ensure that you understand the "why" behind every 
              financial decision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aproach;
