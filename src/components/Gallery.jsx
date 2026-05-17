import React from 'react'

const demo = [
  '/assets/gallery-1.png',
  '/assets/gallery-2.png',
  '/assets/gallery-3.png',
  '/assets/gallery-4.jpeg',
  '/assets/gallery-5.jpeg',
  '/assets/gallery-6.jpeg',
  '/assets/gallery-7.jpeg',
  '/assets/gallery-8.jpeg',
  '/assets/gallery-9.jpeg',
  '/assets/gallery-10.jpeg'
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
