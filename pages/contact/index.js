// components


//icons

import {BsArrowRight} from 'react-icons/bs'

// framer

import {motion} from 'framer-motion'


// variants

import {fadeIn} from '../../variants'

import {useState} from 'react'

const Contact = () => {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [subject, setSubject] = useState('')
const [message, setMessage] = useState('')

const handleSubmit =async (e) => {

  e.preventDefault();

  const form = {
    name,
    email,
    subject,
    message
  }

  //submit via api

  console.log(form)
  

}

  return <div className='h-full bg-brimary/30'>
    <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
    { /* text & form */}
      <div className='flex flex-col w-full max-w-[700px] '>
        { /* text */}
        <h2 className='h2 text-center mb-12 xs:hidden'>
          Contact <span className='text-accent'>.</span>
        </h2>
        { /* form */}
        <form className=' flex-1 flex flex-col gap-6 w-ful mx-auto xs:text-lg sm:text-lg' onSubmit={handleSubmit}>
        { /* group */}
        <div className='flex gap-x-6 w-full'>
          <input value={name} onChange={e => setName(e.target.value)} type='text' placeholder='name' className='input' />
          <input value={email} onChange={e => setEmail(e.target.value)} type='text' placeholder='email' className='input' />
        </div>
        <input value={subject} onChange={e => setSubject(e.target.value)} type='text' placeholder='subject' className='input xs:h-[60px]' />
        <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder='message' className='textarea xs:h-[100px]'></textarea>
        <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
          <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let's Talk</span>
          <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
        </button>
        </form>
      </div>
    </div>
  </div>;
};

export default Contact;
