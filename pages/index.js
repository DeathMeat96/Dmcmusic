
// next image

import Image from "next/image";


// components

import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

// framer motion

import {motion} from 'framer-motion'

//variants

import {fadeIn} from '../variants'

const Home = () => {
  return <div className='bg-primary-/60 h-full'>
    {/* text */}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/70 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full  container mx-auto ' >
    {/* title */}
      <h1 className="h1 bg-black/40 rounded-xl md:text-xl sm:text-base xs:text-base ">
      Explorați universul muzicii noastre pline de pasiune,<br/> perfectă pentru a creea {''}
        <span className='text-accent'>o atmosferă unică și memorabilă.</span>
      </h1>
    {/* Subtitle */}
      <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 bg-black/40 rounded-xl xs:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nostrum quam reprehenderit vero, tenetur voluptatem nulla aut aspernatur dolores ut.
      </p>
    {/* Btn */}
      <div className='flex justify-center xl:hidden relative z-40'>
        <ProjectsBtn/>
      </div>
      <motion.div 
      variants={fadeIn ('down', 0.4)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='hidden xl:flex'
      >
        <ProjectsBtn />
      </motion.div>
    </div>
  </div>
  {/*image */}
    <div className="w-full h-full absolute right-0 bottom-0 xl:mix-blend-soft-light lg:mix-blend-soft-light md:mix-blend-soft-light sm:mix-blend-soft-light xs:mix-blend-soft-light z-10">
      
  {/*BG */}
  <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute translate-z-0 lg:bg-explosion lg:bg-cover lg:bg-right lg:bg-no-repeat md:bg-explosion md:bg-cover md:bg-right sm:bg-no-repeat sm:bg-explosion sm:bg-cover sm:bg-right  sm:bg-no-repeat xs:bg-no-repeat xs:bg-explosion xs:bg-cover xs:bg-right  xs:bg-no-repeat'></div>
    </div>
</div>;
};

export default Home;
