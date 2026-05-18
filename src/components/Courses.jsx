import React from 'react'
import { motion } from 'framer-motion'

const whatsappNumber = '916382194871'
const courses = [
  {title:'Aari Embroidery Classes', duration:'2 Months', highlight:true},
  {title:'Tailoring Classes', duration:'2 Months'},
  {title:'Hand Embroidery Classes', duration:'1.5 Months'},
  {title:'Bridal Blouse Designing', duration:'2 Months'},
  {title:'Fabric Painting Classes', duration:'1 Month'},
  {title:'Boutique Branding & Styling', duration:'2 Months'}
]

export default function Courses(){
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-3xl">Courses</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {courses.map((c,i)=> {
            const message = `Hi Sharmi Aari Designer, I'm interested in the ${c.title} course. Please send details and availability.`
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

            return (
              <motion.div key={i} whileHover={{scale:1.02}} className="glass p-6 rounded-2xl shadow-glow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{c.title}</h3>
                    <div className="text-xs text-white/70 mt-1">{c.duration} • Beginner to Advanced • Practical</div>
                  </div>
                  <div className="text-sm text-gold">{c.highlight? 'Popular':''}</div>
                </div>
                <ul className="mt-4 text-sm text-white/80 space-y-1">
                  <li>Flexible timings</li>
                  <li>Offline & Online support</li>
                  <li>Certificate provided</li>
                </ul>
                <div className="mt-4">
                  <a href={whatsappLink} target="_blank" rel="noreferrer noopener" className="button-gold px-4 py-2 rounded-full inline-flex items-center justify-center">
                    Join Now
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
