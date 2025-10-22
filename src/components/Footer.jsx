import { motion, AnimatePresence } from "framer-motion";
import * as React from "react"

export default function Footer({
  text = "ui",
  words = ["zenn", "zenn"]
}) {

  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % words.length)
    }, 5000)
    // Clean up interval on unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="px-10 md:px-10 text-sm w-full bg-fuchsia-400 flex justify-center items-center py-20">
      <div className="text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] w-fit flex items-center jusitfy-center mx-auto gap-1.5"
        style={{ fontFamily: "Pixelify Sans", fontSize: "200px" }}>
        {text}{' '}
        <AnimatePresence mode="wait">
          <motion.p
            className=""
            key={words[index]}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            viewport={{ once: true, amount: 0.6 }} // show when 60% in view, only once
            transition={{ duration: 1 }}
          >
            {words[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </footer>
  );
}
