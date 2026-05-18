import React from 'react'
const gallery1 = '/assets/gallery-1.webp'
const gallery2 = '/assets/gallery-2.webp'
const gallery3 = '/assets/gallery-3.webp'
const gallery4 = '/assets/gallery-4.webp'
const gallery5 = '/assets/gallery-5.webp'
const gallery6 = '/assets/gallery-6.webp'
const gallery7 = '/assets/gallery-7.webp'
const gallery8 = '/assets/gallery-8.webp'
const gallery9 = '/assets/gallery-9.webp'
const gallery10 = '/assets/gallery-10.webp'

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
