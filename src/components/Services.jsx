import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const items = [
  'All Type Blouse Stitching','Bridal Blouse Stitching','Simple Aari Blouse','Wedding Bridal Blouse','Maxi Dress Stitching','Customized Embroidery Work','Hoop Art Wall Hangings','Fabric Painting Wall Hangings','Tailoring Orders','Boutique Designing','Custom Bridal Styling','Premium Stitch Finishing'
]

export default function Services(){
  const [showAll, setShowAll] = useState(false)
  const visibleItems = showAll ? items : items.slice(0, 5)

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="font-serif text-3xl">Services</h2>
          <p className="text-white/70 max-w-2xl">Explore premium boutique-quality work across embroidery, bridal blouse design, tailoring, and custom fashion services.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {visibleItems.map((s,i)=> (
            <div key={i} className="glass p-5 rounded-xl flex items-start gap-4 hover:scale-[1.01] transition">
              <div className="p-3 rounded-md bg-white/6"><FaStar className="text-gold"/></div>
              <div>
                <div className="font-medium">{s}</div>
                <div className="text-xs text-white/70 mt-1">Premium boutique-quality work</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center lg:hidden">
          <button
            type="button"
            onClick={() => setShowAll(prev => !prev)}
            className="button-gold px-5 py-3 rounded-full"
          >
            {showAll ? 'Show Less' : `See ${items.length - visibleItems.length} more services`}
          </button>
        </div>
      </div>
    </section>
  )
}
