import { iconsSvg } from "../icons"
import { motion } from "framer-motion"

export default function Main() {
  return (
    <section className="py-8 lg:pb-0 lg:pt-12 dt:pt-20 flex flex-col gap-y-4 w-[70%] mx-auto">
        <motion.p 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden : {opacity: 0, y : 50},
            visible : { opacity : 1, y : 0 }
            }}
          transition={{ delay : 0.2, duration : 0.5 }}  className="text-base text-gray-400 font-medium">Portfolio</motion.p>
        <motion.h1
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden : {opacity: 0, y : 50},
            visible : { opacity : 1, y : 0 }
            }}
          transition={{ delay : 0.3, duration : 0.5 }}  className="text-pink-400 font-bold text-2xl">Will Turner</motion.h1>
        <motion.p 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden : {opacity: 0, x : -50},
            visible : { opacity : 1, x : 0 }
            }}
          transition={{ delay : 0.3, duration : 0.5 }}  className="w-80 md:w-96 font-medium text-gray-500">Just a woman with a camera, I love helping creative
          entreprenuers achieve success in their business
          with high quality photos
        </motion.p>
        <motion.h4 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden : {opacity: 0, y : 50},
            visible : { opacity : 1, y : 0 }
            }}
          transition={{ delay : 0.4, duration : 0.5 }}
        className="text-sm font-medium text-gray-400">Find Me on</motion.h4>
        <div className="flex items-center gap-x-12 ">
          {
            iconsSvg.map(icon => (
              <motion.img 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden : {opacity: 0, y : 20},
                  visible : { opacity : 1, y : 0 }
                  }}
                transition={{ delay : 0.4, duration : 0.5 }}
               key={icon.id} 
               src={icon.img} 
               alt={icon.id} className="w-8 h-7 "/>
            ))
          }
        </div>
        <section className="flex flex-col gap-y-12 mt-4">
          <div className="flex items-center font-medium gap-x-12">
            <motion.button 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden : {opacity: 0, x : -50},
                  visible : { opacity : 1, x : 0 }
                  }}
                transition={{ delay : 0.4, duration : 0.5 }} className="py-4 w-40 rounded-full text-white bg-pink-400 shadow-lg shadow-pink-400/40 hover:bg-transparent hover:text-pink-400 hover:border-2 hover:border-pink-300 transition-all">HIRE ME</motion.button>
            <motion.button
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden : {opacity: 0, x : 50},
                  visible : { opacity : 1, x : 0 }
                  }}
                transition={{ delay : 0.4, duration : 0.5 }} className="py-4 w-40 rounded-full text-pink-400 border-2 border-pink-300 hover:bg-pink-400 hover:text-white transition-all">PORTFOLIO</motion.button>
          </div>
          <section className="flex items-center gap-x-6 ">
            <div className="relative group">
              <motion.img 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden : {opacity: 0, y : 50},
                visible : { opacity : 1, y : 0 }
                }}
              transition={{ delay : 0.5, duration : 0.5 }}
              src='https://images.pexels.com/photos/4551310/pexels-photo-4551310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='pic for me' className="grayscale rounded-lg lg:w-40 lg:h-24 dt:h-40 object-cover"/>
              <span className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-200 from-transparent to-pink-300/50 cursor-pointer`}></span>
            </div>
            <div className="relative group">
              <motion.img 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden : {opacity: 0, y : 50},
                visible : { opacity : 1, y : 0 }
                }}
              transition={{ delay : 0.5, duration : 0.5 }}
              src='https://images.pexels.com/photos/11213475/pexels-photo-11213475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='pic for me' className=" rounded-lg lg:w-40 lg:h-24 dt:h-40  object-cover "/>
              <span className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-200 from-transparent to-pink-300/50 cursor-pointer`}></span>
            </div>
          </section>
        </section>
 
      </section>
  )
}
