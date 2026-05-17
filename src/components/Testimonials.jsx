import React from 'react'

const feedback = [
  {name:'Anita',text:'Transformative course — started my boutique!',rating:5},
  {name:'Rekha',text:'Hands-on classes, beautiful results.',rating:5},
  {name:'Sana',text:'Friendly mentors and entrepreneurial guidance.',rating:5}
]

export default function Testimonials(){
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6 gap-4">
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs">Student Stories</p>
            <h2 className="font-serif text-3xl">What Our Students Say</h2>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory py-4">
          {feedback.map((f,i)=> (
            <div key={i} className="snap-start min-w-[260px] sm:min-w-[320px] glass p-6 rounded-3xl border border-white/10 shadow-glow transition hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-lg">{f.name.charAt(0)}</div>
                <div>
                  <div className="font-semibold">{f.name}</div>
                  <div className="text-sm text-gold">{Array.from({length:f.rating}).map((_,j)=>(
                    <span key={j}>★</span>
                  ))}</div>
                </div>
              </div>
              <p className="mt-5 text-white/80 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
