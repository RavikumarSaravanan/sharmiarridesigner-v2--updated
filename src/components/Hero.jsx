import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative min-h-[70vh] md:h-screen flex items-center py-12 md:py-0">
      <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{backgroundImage:'url(/assets/gallery-1.png)'}}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80"></div>
      <div className="max-w-6xl mx-auto z-10 px-6">
        <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8}} className="py-12 md:py-24">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-tight tracking-tight">Master the Art of Aari Embroidery & Tailoring</h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg max-w-2xl">Professional classes for beginners, hobbyists, and future boutique entrepreneurs.</p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <a href="/courses" className="button-gold px-6 py-3 rounded-full font-medium">Join Classes</a>
            <a href="/services" className="px-6 py-3 rounded-full border border-white/15 backdrop-blur-sm">View Services</a>
            <a href="https://wa.me/" className="px-5 py-3 rounded-full bg-white/10 border border-white/10">WhatsApp Inquiry</a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Stat label="Students Trained" value="500+" />
            <Stat label="Course Levels" value="Basic → Advanced" />
            <Stat label="Flexible Timings" value="Yes" />
            <Stat label="Certificate" value="Provided" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stat({label,value}){
  return (
    <div className="glass p-6 rounded-3xl text-center min-h-[120px] md:min-h-[150px] flex flex-col justify-center items-center text-sm gap-2 shadow-glow">
      <div className="text-2xl md:text-3xl font-semibold text-gold">{value}</div>
      <div className="uppercase tracking-[0.12em] text-white/70 text-xs md:text-sm">{label}</div>
    </div>
  )
}
