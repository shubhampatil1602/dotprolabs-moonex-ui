import { features } from '../constants';

const OurFeatures = () => {
  return (
    <div className='mt-12 w-11/12 mx-auto'>
      <h2 className='font-firaCode font-extrabold text-4xl md:text-[2.8125rem] my-6 text-center'>
        Our <span className='text-primary'>Features</span>
      </h2>
      <div className='md:px-10 flex flex-wrap gap-6 justify-between items-center'>
        {features.map(({ title, des, img }) => (
          <div className='lg:w-[296px] w-full h-[281px] border border-[#ffffff]/5 bg-[#ffffff]/[2%] hover:bg-[#ffffff]/[4%] rounded-[18px] p-[1.875rem] pl-[1.75rem] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,230,143,0.1)]'>
            <img src={img} alt={title} />
            <h4 className='text-xl leading-[1.875rem] text-[#e6f1f0] mb-3 mt-8'>
              {title}
            </h4>
            <p className='text-base text-[#b6b6b6]'>{des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFeatures;
