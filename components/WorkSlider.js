// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};


// import swiper react components

import { Swiper, SwiperSlide} from 'swiper/react';


// import swiper styles

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules

import { Pagination } from 'swiper';

//icons

import {} from 'react-icons/bs'

import Image from 'next/image';


const WorkSlider = () => {

  return (
    <Swiper 
    spaceBetween={10}
    pagination={{
      clickable:true,
    }}
    modules={[Pagination]}
    className='h-[500px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
        return <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return(
                   <div key={1} className='relative rounded-lg overflow-hidden flex items-center justify-center group' > 
                  <div key={2} className='flex items-center justify-center relative overflow-hidden' >
                    { /* Image */ }
                  <Image src={image.path} width={500} height={300} alt=''/>
                  {/* Overlay Gradient */ }
                  <div key={3} className='absolute inset-0 bg-gradient-to-l from-transparent via-[#807d7f] to-[#453f3d] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                  {/* Title */ }
                  <div key={4} className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 '>
                    <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                      {/* title part 1 */ }
                      <div key={5} className='delay-100'>LIVE</div>
                      {/* title part 2 */ }
                      <div key={6} className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150' >PROJECT</div>
                    </div>
                  </div>
                  </div>
                </div>
                );
              })}
            </div>
          </SwiperSlide>;
      })} 
    </Swiper>
  );
};

export default WorkSlider;


