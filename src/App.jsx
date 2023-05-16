import { useState } from "react"
import { Header, Main } from "./components"
import { motion } from "framer-motion"

function App() {

  const [hover, setHover] = useState('image-one')

  function toggleHover () {setHover(hover === 'image-one' ? 'image-two' : 'image-one')}

  const imgOne = 'https://images.pexels.com/photos/7626613/pexels-photo-7626613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  const imgTwo = 'https://images.pexels.com/photos/7626605/pexels-photo-7626605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  const currentImage = hover === 'image-one' 
  ? imgOne
  : imgTwo

  return (
   <main className='min-h-screen grid grid-cols-1 md:grid-cols-12 '>
    <section className="h-screen relative lg:col-span-4 ">
      <motion.img  
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.3 }}
      onMouseEnter={toggleHover} onMouseLeave={toggleHover} src={currentImage} alt='women image' className="h-full w-full object-cover grayscale"/>
      <motion.span
       initial={{ scale: 0 }} 
      animate={{ scale: 1 }} 
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay : 0.2, duration : 0.5 }} 
       className="absolute w-40 h-40 rounded-full -top-20 -left-20 bg-pink-400/80 border border-pink-500"></motion.span>
    </section>
    <section className="col-span-8  relative min-h-screen overflow-hidden">
      <motion.span
      initial={{ scale: 0 }} 
      animate={{ scale: 1 }} 
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay : 0.3, duration : 0.5 }}  
       className="absolute w-40 h-40 rounded-full -top-24 -right-36 bg-cyan-500 shadow-lg shadow-cyan-400/60 border border-cyan-600"></motion.span>
      <motion.span
      initial={{ scale: 0 }} 
      animate={{ scale: 1 }} 
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay : 0.4, duration : 0.5 }} 
       className="absolute w-40 h-40 rounded-full top-28 -right-32 bg-pink-500 shadow-xl shadow-pink-400/60 border border-pink-600"></motion.span>
      <Header />
      <Main />
      <motion.span
      initial={{ scale: 0 }} 
      animate={{ scale: 1 }} 
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay : 0.5, duration : 0.5 }} 
       className="absolute w-40 h-40 rounded-full -bottom-28 -right-10 bg-pink-400/60 border border-pink-500 -z-10"></motion.span>
    </section>
   </main>
  )
}

export default App
