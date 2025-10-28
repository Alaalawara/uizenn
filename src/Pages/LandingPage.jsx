
import * as React from 'react';
import { motion, useInView } from "framer-motion";
import useLenis from "../hooks/useLenis";
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import DelicateAsciiDots from '../components/asciibg';
export default function LandingPage() {
  const navigate = useNavigate();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  useLenis();
  return (
    <section className="flex justify-center min-h-screen items-center flex-col">

      {/* HERO */}
      <main className="relative text-primary flex flex-col w-full py-20">

        {/* main text */}
        <section className="px-20 py-10 md:px-20 md:py-10 gap-5 flex flex-col">

          <div className='flex p-2 bg-[var(--bg)] text-[var(--fg)]'>
            <motion.div
              ref={ref}
              initial={{ filter: 'blur(20px)', opacity: 0 }}
              animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
              transition={{ duration: 1.2 }}
              className="text-xl text-start sm:text-4xl font-medium  md:text-6xl md:leading-[4rem] dark:bg-[var(--bg)] dark:text-[var(--fg)]"
            >
              A minimalist UI kit that keeps developers in flow and products in harmony.
            </motion.div>
          </div>

          <div className='flex flex-col'>
            <motion.h3
              ref={ref}
              initial={{ filter: 'blur(20px)', opacity: 0 }}
              animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
              transition={{ duration: 1.2 }}
              className='text-gray-500 font-medium'>The path of least resistance to great UI.</motion.h3>
            <motion.h3
              ref={ref}
              initial={{ filter: 'blur(20px)', opacity: 0 }}
              animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
              transition={{ duration: 1.2 }}
              className='text-gray-500 font-medium'>Find your flow state for UI.</motion.h3>
          </div>

          <div className='flex flex-row'>
            <motion.button
              ref={ref}
              initial={{ filter: 'blur(20px)', opacity: 0 }}
              animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
              transition={{ duration: 1.2 }}
              onClick={() => navigate('/components')}
              className='rounded-lg px-4 py-2 font-medium cursor-pointer bg-[var(--btn-bg)] text-[var(--btn-fg)] hover:opacity-80'>
              Browse Components
            </motion.button>
          </div>
          
        </section>

        {/* line break */}
        <div className='h-[1px] bg-[#e8e8e8e2] visible'></div>

        <section className='px-20 py-10 md:px-20 md:py-10 gap-5 flex flex-col'>
          <div className='flex flex-col items-start'>
            <h2 className='text-gray-500 font-medium'>Harmony for your UI.</h2>
            <h2 className='text-gray-500 font-medium'>A minimalist design  <br />  system foundation with maximal clarity and flow.</h2>
          </div>

          <div className='flex'>
            <DelicateAsciiDots />
          </div>
        </section>

        {/* line break */}
        <div className='h-[1px] bg-[#e8e8e8e2] visible'></div>

        {/* next */}

      </main>

      <Footer />
    </section>
  );
}
