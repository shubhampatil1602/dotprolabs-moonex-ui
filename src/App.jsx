import { useEffect, useState } from 'react';
import Button from './components/Button';
import { IoCloseSharp } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import Footer from './components/Footer';
import Faqs from './components/FAQs';
import OurFeatures from './components/OurFeatures';
import Table from './components/Table';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  return (
    <main className='!scroll-smooth font-raleway min-h-screen bg-[#061724] text-white overflow-x-hidden'>
      <div className='pt-5 sm:pt-[2.9375rem] h-screen relative'>
        {/* Bg Solar Rings */}
        <div className='absolute inset-0 pointer-events-none z-[1]'>
          {/* Gradient */}
          <div className='absolute left-36 top-16 bg-gradient-to-br from-[#FFE68F] to-primary h-[250px] w-[160px] blur-[230px] sm:blur-[150px]'></div>
          <div className='absolute right-16 top-96 bg-gradient-to-br from-[#FFE68F] to-primary h-[250px] w-[160px] blur-[220px]'></div>

          {/* Rings */}
          <div className='hidden md:block absolute left-[2%] top-[22%] rounded-[100%] w-[80.7%] h-[25%] md:h-[70%] border border-[#9e9e9e]/30 rotate-[14deg]'></div>
          <div className='hidden md:block absolute -right-[1%] top-[7%] rounded-[100%] w-[120%] h-[55%] md:h-[99%] border border-[#9e9e9e]/30 rotate-[14deg]'></div>
          <div className='hidden md:block absolute -left-[24%] -top-[10%] rounded-[100%] w-[140%] h-[90%] md:h-[140%] border border-[#9e9e9e]/30 rotate-[13deg]'></div>

          {/* Gradient Circle */}
          <div className='hidden md:block absolute md:h-[10.1875rem] md:w-[10.1875rem] lg:h-[16.1875rem] lg:w-[16.1875rem] rounded-full bg-gradient-to-br from-[#faf8f4] via-[#f7c203] to-primary right-16 top-72'></div>

          {/* Stars */}
          <img
            src='/star-img-1.png'
            alt='star'
            className='absolute h-[3.75rem] w-[3.75rem] object-cover md:left-[11.9rem] md:top-[15rem] left-[14rem] top-[6rem]'
          />
          <img
            src='/star-img-2.png'
            alt='star'
            className='absolute h-[2.875rem] w-[3.375rem] md:h-[2.875rem] md:w-[3.375rem] object-cover right-[42%] top-[32rem] md:right-[9.2rem] md:top-[10.8rem]'
          />
          <img
            src='/star-img-1.png'
            alt='star'
            className='hidden md:block absolute h-[3.75rem] w-[3.8125rem] object-cover right-[10rem] -bottom-[2.1rem]'
          />
        </div>

        {/* Navbar */}
        <nav className='mx-4 sm:mx-8 lg:mx-[5.5rem] 2xl:mx-32 h-[4.5625rem] flex justify-between items-center relative'>
          {/* Logo */}
          <div className='h-[4rem] sm:h-[4.5625rem] sm:w-[12.125rem]'>
            <img
              src='/logo.png'
              alt='Moonex'
              className='h-full w-full object-contain'
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className='lg:hidden z-50 p-2'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <IoCloseSharp size={45} />
            ) : (
              <GiHamburgerMenu size={30} />
            )}
          </button>

          {/* Desktop Menu */}
          <div className='hidden lg:flex justify-center gap-x-8 xl:gap-x-20'>
            <a
              href='#'
              className='font-extrabold text-lg text-primary hover:opacity-80 transition-opacity'
            >
              Home
            </a>
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

          {/* Mobile Menu Overlay */}
          <div
            className={`lg:hidden fixed inset-0 bg-[#061724]/95 z-40 transition-transform duration-300 ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className='flex flex-col items-center justify-center h-full gap-y-8'>
              <a href='#' className='font-extrabold text-xl text-primary'>
                Home
              </a>
              <a
                href='#'
                className='font-extrabold text-xl hover:text-primary transition-colors'
              >
                About Us
              </a>
              <a
                href='#'
                className='font-extrabold text-xl hover:text-primary transition-colors'
              >
                Roadmap
              </a>
              <a
                href='#faqs'
                className='font-extrabold text-xl hover:text-primary transition-colors'
              >
                FAQs
              </a>
              <a
                href='#'
                className='font-extrabold text-xl hover:text-primary transition-colors'
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Connect Wallet Button */}
          <div className='hidden lg:block mb-6'>
            <Button
              className='relative overflow-hidden bg-gradient-to-r from-primary to-[#FFE68F]/[84] text-black
      after:absolute after:inset-0 after:bg-gradient-to-r after:from-[#FFE68F] after:via-primary after:to-[#FFE68F]
      after:translate-x-[-100%] after:hover:translate-x-[100%] after:transition-transform after:duration-[750ms] after:ease-in-out
      hover:shadow-[0_0_20px_rgba(255,230,143,0.4)] transition-shadow duration-500 '
            >
              <span className='relative z-10'>Connect Wallet</span>
            </Button>
          </div>
        </nav>

        {/* Hero */}
        <div className='md:w-fit w-11/12 mx-auto sm:ml-[4rem] md:ml-[8.3125rem] mt-[10rem] md:mt-[16.5625rem]'>
          <h1 className='font-firaCode text-3xl md:text-4xl lg:text-6xl xl:text-[4.6875rem] font-extrabold leading-[1] tracking-[-0.010em] text-center sm:text-left'>
            Trusted Multi-Chain <br /> <span className='text-primary'>DEX</span>{' '}
            Platform
          </h1>
          <p className='text-[#9e9e9e] text-base md:text-lg lg:text-[1.5625rem] mt-2 mb-9 sm:tracking-[0.063em] text-center sm:text-left leading-tight sm:leading-none'>
            Trade, earn, and own crypto on the all-in-one multi chain DEX
          </p>
          <div className='flex justify-center sm:justify-start gap-x-3 md:gap-x-6'>
            <Button className='bg-gradient-to-r from-primary to-[#FFE68F]/[84] text-black relative h-12 w-40 overflow-hidden bg-primary transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-50 before:duration-700 hover:shadow-primary hover:before:-translate-x-40 z-30'>
              Connect Wallet
            </Button>
            <Button className='bg-transparent text-primary border border-primary relative h-12 w-40 overflow-hidden  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-primary before:opacity-50 before:duration-700 hover:before:-translate-x-40 hover:bg-[#ffe68f]/[10%] z-30'>
              Trade Crypto
            </Button>
          </div>
        </div>
      </div>

      {/* Why MoonEX Table */}
      <Table />

      {/* Our Featureas */}
      <OurFeatures />

      {/* FAQs */}
      <Faqs />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default App;
