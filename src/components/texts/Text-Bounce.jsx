import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function TextBounce({
    text = "uizenn",
}) {
const [isReverse, setIsReverse] = useState(false);
    const variants = {
  slide: {
    x: [0, 10],
    transition: {
      duration: 1,

      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 0
    }
  },

  slideReverse: {
    x: [null, 100],
    transition: {
      duration: 1
    }
  }
};


    return (
        <div className='flex flex-col'>
            <motion.div
                initial={{ opacity: 0, y: 600 }}
                animate={{ opacity: 1, y: 200 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 3 }}
                className="flex flex-row animate-bounce dalay-500">
                <Link to="/"><h1 className='text-black' style={{ fontFamily: "Pixelify Sans" }}>{text}</h1></Link>
            </motion.div>
            <motion.p
                // initial={{ opacity: 0, x: -40 }}
                // animate={{ opacity: 1, x: 0 }}
                // exit={{ opacity: 0, x: 40 }}
                // transition={{ duration: 1 }}
                variants={variants}
                animate={isReverse ? "slideReverse" : "slide"}
                className='min-w-[132px] h-2 bg-[#ed6bff] absolute top-15'></motion.p>
        </div>
    );
}