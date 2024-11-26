import { useState } from 'react';
import { FAQs } from '../constants';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(1);
  const handleAccordian = (index) => {
    const isOpen = openIndex === index;
    setOpenIndex(isOpen ? null : index);
  };
  return (
    <div id='faqs' className='mt-40 mx-3 sm:mx-6 lg:mx-0 relative'>
      {/* Gradient */}
      <div className='absolute -left-[12rem] top-60 bg-gradient-to-br from-[#fadb6a] to-primary h-[250px] w-[160px] blur-[200px]'></div>
      <div className='absolute right-[4rem] top-0 bg-gradient-to-br from-[#fadb6a] to-primary h-[150px] w-[100px] blur-[200px]'></div>

      <div className='max-w-[62.3125rem] pb-9 mx-auto bg-[#f7f9ff]/[2%] rounded-[10px]'>
        <h2 className='font-firaCode font-extrabold text-primary text-[2.125rem] pt-4 pb-6 text-center'>
          FAQs
        </h2>

        {FAQs.map(({ id, question, answer }, index) => (
          <div
            key={id}
            className='border-y border-[#bbbbbb]/[10%] pt-7 pb-4 pl-6 sm:pl-12 md:pl-20 cursor-pointer'
            onClick={() => handleAccordian(index)}
          >
            <div className='flex justify-between'>
              <div className='w-[80%]'>
                <h4 className='text-[#ffffff] font-medium text-base sm:text-base md:text-lg'>
                  {question}
                </h4>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index
                      ? 'max-h-[300px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className='text-sm md:text-[0.9375rem] text-[#bab8b8] py-5'>
                    {answer}
                  </p>
                </div>
              </div>
              <div className='pr-4 sm:pr-10 md:pr-16 flex justify-center items-center'>
                <img
                  className='transition-transform duration-1000 object-contain h-[30px] w-[30px] md:h-[45px] md:w-[45px]'
                  src={openIndex === index ? '/acc-down.png' : '/acc-plus.png'}
                  style={{
                    transform:
                      openIndex === index ? 'rotate(360deg)' : 'rotate(0deg)',
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
