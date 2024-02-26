import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react'

// components

import Layout from '../components/Layout';
//router

import { useRouter } from 'next/router';

// framer motion

import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ChakraProvider>
  <Layout>
    <AnimatePresence mode='wait'>
      <motion.div key={router.route} className='h-full'>
        
       <Component {...pageProps} />
      </motion.div>
  </AnimatePresence>
  </Layout>
  </ChakraProvider>
  );
}

export default MyApp;
