const Footer = () => {
  return (
    <footer className='mt-36 relative z-50 min-h-[319px] bg-[#051422] flex flex-col md:flex-row items-center justify-around'>
      <div className='mb-6 md:mb-0'>
        <img src='/footer-moonex-icon.png' alt='footer-moonex-logo' />
      </div>

      <div className='flex flex-wrap justify-center gap-x-10 gap-y-4 md:gap-y-0 md:gap-x-20 mb-6 md:mb-0'>
        <a
          href='#'
          className='font-extrabold text-lg hover:text-primary transition-colors'
        >
          About Us
        </a>
        <a
          href='#'
          className='font-extrabold text-lg hover:text-primary transition-colors'
        >
          Roadmap
        </a>
        <a
          href='#faqs'
          className='font-extrabold text-lg hover:text-primary transition-colors'
        >
          FAQs
        </a>
        <a
          href='#'
          className='font-extrabold text-lg hover:text-primary transition-colors'
        >
          Contact Us
        </a>
      </div>

      <div className='min-w-[190px] text-center'>
        <h5 className='font-extrabold text-[1.875rem] leading-5 mb-8'>
          Contact <span className='text-primary'>Us</span>
        </h5>
        <div className='flex items-center justify-center md:justify-between gap-x-4 mb-10'>
          <img
            src='/social1.png'
            alt='social1'
            className='h-[31px] w-[31px] object-contain'
          />
          <img
            src='/social2.png'
            alt='social2'
            className='h-[26px] w-[30px] object-contain'
          />
          <img
            src='/social3.png'
            alt='social3'
            className='h-[26px] w-[26px] object-contain'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
