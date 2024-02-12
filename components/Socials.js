// links

import Link from "next/link";

//icons

import {
  RiYoutubeLine, 
  RiInstagramLine, 
  RiFacebookLine,  
  RiTiktokLine,
} 
  from 'react-icons/ri';


const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
    <Link href={'https://www.youtube.com/channel/UCP1mG0o9L_6pSfAWDrT2FMQ'} className=' hover:text-accent transition-all duration-300'>
      <RiYoutubeLine />
    </Link>
    <Link href={'https://www.instagram.com/marius.dinca.96/'} className=' hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
    <Link href={'https://www.facebook.com/marius.dinca.180'} className=' hover:text-accent transition-all duration-300'>
      <RiFacebookLine />
    </Link>
    <Link href={'https://www.tiktok.com/@dmc_prod'} className=' hover:text-accent transition-all duration-300'>
      <RiTiktokLine />
    </Link>
  </div>;
};

export default Socials;
