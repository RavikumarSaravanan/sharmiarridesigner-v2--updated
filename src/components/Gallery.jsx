import React from 'react'
import gallery1 from '../assets/gallery-1.png'
import gallery2 from '../assets/gallery-2.png'
import gallery3 from '../assets/gallery-3.png'
import gallery4 from '../assets/gallery-4.jpeg'
import gallery5 from '../assets/gallery-5.jpeg'
import gallery6 from '../assets/gallery-6.jpeg'
import gallery7 from '../assets/gallery-7.jpeg'
import gallery8 from '../assets/gallery-8.jpeg'
import gallery9 from '../assets/gallery-9.jpeg'
import gallery10 from '../assets/gallery-10.jpeg'

const demo = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10
]

export default function Gallery(){
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-3xl">Gallery</h2>
        <div className="mt-6 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {demo.map((src,i)=> (
            <div key={i} className="break-inside-avoid">
              <img src={src} alt={`gallery-${i}`} className="w-full rounded-xl shadow-lg object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
