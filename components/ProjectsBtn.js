// next image

import Image from 'next/image';

// next link

import Link from 'next/link';

// icons

import { HiArrowRight } from 'react-icons/hi2';


const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0 z-40'>
      <Link href={'https://www.youtube.com/channel/UCP1mG0o9L_6pSfAWDrT2FMQ'}
      className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group xs:w-[90px] xs:h-[90px]'
      >
      <Image 
      src={'/rounded-text.png'}
      width={141}
      height={148}
      alt=''
      className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'
      />
      <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300'/>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
