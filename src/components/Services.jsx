import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'

const items = [
  'All Type Blouse Stitching',
  'Bridal Blouse Stitching',
  'Simple Aari Blouse',
  'Wedding Bridal Blouse',
  'Maxi Dress Stitching',
  'Customized Embroidery Work',
  'Hoop Art Wall Hangings',
  'Fabric Painting Wall Hangings',
  'Tailoring Orders',
  'Boutique Designing',
  'Custom Bridal Styling',
  'Premium Stitch Finishing'
]

export default function Services() {
  const [showAll, setShowAll] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    checkScreen()
    window.addEventListener('resize', checkScreen)

    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  // Desktop → show all
  // Mobile → show limited with button
  const visibleItems =
    isDesktop || showAll ? items : items.slice(0, 6)

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <h2 className="font-serif text-3xl md:text-4xl">
            Services
          </h2>

          <p className="text-white/70 max-w-2xl leading-relaxed">
            Explore premium boutique-quality work across embroidery,
            bridal blouse design, tailoring, and custom fashion services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {visibleItems.map((s, i) => (
            <div
              key={i}
              className="
                glass
                p-5
                rounded-2xl
                flex
                items-start
                gap-4
                min-h-[120px]
                hover:scale-[1.02]
                transition-all
                duration-300
              "
            >
              <div className="p-3 rounded-xl bg-white/10 shrink-0">
                <FaStar className="text-gold text-lg" />
              </div>

              <div className="flex-1">
                <h3 className="font-medium text-base leading-snug">
                  {s}
                </h3>

                <p className="text-sm text-white/70 mt-2 leading-relaxed">
                  Premium boutique-quality work with elegant finishing.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        {!isDesktop && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll(prev => !prev)}
              className="button-gold px-6 py-3 rounded-full"
            >
              {showAll
                ? 'Show Less'
                : `See ${items.length - visibleItems.length} More Services`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}