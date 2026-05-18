import React from 'react'
import { motion } from 'framer-motion'
const logo = '/assets/logo.webp'

export default function About(){
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
        <motion.div initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.6}} className="glass p-6 rounded-xl">
          <img src={logo} alt="Sharmi Aari Designer" className="w-32 h-32 rounded-full object-cover shadow-lg" />
          <h3 className="mt-4 font-serif text-2xl">About Sharmi Aari Designer</h3>
          <p className="mt-2 text-white/80">A premium embroidery and tailoring training institute specialized in Aari work and bridal blouse designing, empowering women to start boutique businesses.</p>
        </motion.div>
        <motion.div initial={{x:30,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.6}} className="space-y-4">
          <Card title="Mission" body="Teach craft with boutique-standard techniques and entrepreneurship guidance." />
          <Card title="Vision" body="A community of creative women-led boutique brands and artisans." />
          <Card title="Experience" body="Years of bridal and tailoring expertise with practical hands-on classes." />
        </motion.div>
      </div>
    </section>
  )
}

function Card({title,body}){
  return (
    <div className="glass p-6 rounded-xl">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-white/80 mt-2">{body}</p>
    </div>
  )
}
