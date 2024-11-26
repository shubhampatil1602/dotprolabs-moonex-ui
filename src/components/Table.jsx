import { comparisions } from '../constants';

const Table = () => {
  return (
    <div className='mt-0 md:mt-72 w-11/12 max-w-screen-xl mx-auto'>
      <h2 className='font-firaCode font-extrabold text-4xl lg:text-[2.8125rem] text-center lg:text-left ml-0 lg:ml-16 my-6 tracking-wide'>
        Why <span className='text-primary'>MoonEX</span> ?
      </h2>

      <div className='w-full mx-auto px-4 sm:px-6 lg:px-10 pt-3 pb-11 bg-[#ffffff]/[2%] rounded-lg lg:rounded-[1.7rem]'>
        <div className='relative'>
          {/* Gradient */}
          <div className='absolute hidden lg:block left-32 top-64 bg-gradient-to-br from-[#fadb6a] to-primary h-[150px] w-[120px] lg:h-[250px] lg:w-[160px] blur-[120px] lg:blur-[230px]'></div>

          <table className='w-full border-collapse text-sm sm:text-base lg:text-lg'>
            <thead>
              <tr className='border-b border-[#d9d9d9]/10'>
                <th className='py-4 h-[4.9375rem]'>
                  <div className='relative flex items-center justify-center'>
                    <img
                      src='/Comparison.png'
                      alt='Comparison'
                      className='object-contain h-[3rem] sm:h-[2.125rem] w-[80px] sm:w-[13.875rem] mx-auto'
                    />
                  </div>
                </th>
                <th className='text-center py-4'>
                  <div className='flex items-center justify-center'>
                    <div className='h-[2rem] sm:h-[4.9375rem] w-[78px] sm:w-[18.5625rem]'>
                      <img
                        src='/moonex-table.png'
                        alt='Moonex table'
                        className='object-contain h-full w-full'
                      />
                    </div>
                  </div>
                </th>
                <th className='text-center py-4 flex items-center justify-center mt-3 md:mt-4'>
                  <div className='h-[2rem] sm:h-[2.8125rem] w-[68px] sm:w-[11.125rem] '>
                    <img
                      src='/uniswap-logo.png'
                      alt='Uniswap logo'
                      className='object-contain'
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisions.map((comparision, index) => (
                <tr key={index} className='border-b border-gray-800'>
                  <td className='text-[#f0f0f0]/70 text-xs sm:text-base lg:text-lg font-firaCode py-4 sm:px-6 lg:py-[1.375rem]'>
                    {comparision.id}. {comparision.text}
                  </td>
                  <td className='text-center py-4'>
                    <div className='flex justify-center'>
                      <img
                        src='/check-bold.png'
                        alt='✅'
                        className='w-6 h-6 sm:w-[33px] sm:h-[33px]'
                      />
                    </div>
                  </td>
                  <td className='text-center py-4'>
                    <div className='flex justify-center'>
                      <img
                        src='/close-small.png'
                        alt='X'
                        className='w-8 h-8 sm:w-[55px] sm:h-[55px]'
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Extended vertical lines */}
          <div className='hidden lg:block absolute top-4 -bottom-4 left-[38.5%] w-px bg-[#d9d9d9]/10'></div>
          <div className='hidden lg:block absolute top-4 -bottom-4 left-[70.5%] w-px bg-[#d9d9d9]/10'></div>

          {/* Bottom horizontal line */}
          <div className='absolute left-0 right-0 bottom-0 h-px bg-[#d9d9d9]/10'></div>
        </div>
      </div>
    </div>
  );
};

export default Table;
