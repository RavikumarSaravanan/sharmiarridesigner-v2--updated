import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Courses from '../components/Courses'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import WhatsAppButton from '../components/WhatsAppButton'

const highlights = [
  { title: 'Boutique Styling', description: 'Curated classes for fashion entrepreneurs.' },
  { title: 'Bridal Mastery', description: 'Premium bridal blouse and embroidery training.' },
  { title: 'Creative Toolkit', description: 'Hands-on craft, fabric painting, and design support.' },
  { title: 'Business Ready', description: 'Launch your boutique with confidence.' }
]

const contactDetails = [
  { label: 'Phone', value: '+91 99999 99999' },
  { label: 'Email', value: 'info@sharmiaari.com' },
  { label: 'Address', value: '123 Boutique Lane, Your City' }
]

const mapSrc = 'https://maps.google.com/maps?q=12.9716,77.5946&z=15&output=embed'

export default function Home(){
  const scrollToContact = () => {
    const section = document.getElementById('contact')
    if(section) section.scrollIntoView({behavior:'smooth', block:'start'})
  }

  return (
    <div>
      <Hero />
      <About />
      <Courses />
      <Services />
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between gap-6 mb-6">
            <div>
              <p className="text-gold uppercase tracking-[0.3em] text-xs">Premium Studio</p>
              <h2 className="font-serif text-3xl">Curated Boutique Experiences</h2>
            </div>
          </div>
          <div className="overflow-x-auto lg:overflow-hidden overflow-y-hidden hide-scrollbar snap-x snap-mandatory pb-4">
            <div className="flex flex-nowrap gap-5 min-w-max lg:grid lg:grid-cols-4 lg:min-w-0 lg:gap-6">
              {highlights.map((item,i)=>(
                <button
                  type="button"
                  key={i}
                  onClick={scrollToContact}
                  className="snap-start min-w-[280px] sm:min-w-[320px] lg:min-w-0 glass p-6 rounded-3xl border border-white/10 shadow-glow transition hover:-translate-y-1 hover:border-gold/50 cursor-pointer text-left"
                >
                  <div className="text-gold text-sm uppercase tracking-[0.24em] mb-3">{item.title}</div>
                  <p className="text-white/80">{item.description}</p>
                  <p className="mt-4 text-xs text-white/60 uppercase tracking-[0.24em]">Tap to enquire</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Gallery />
      <Testimonials />
      <section id="contact" className="py-16 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-gold uppercase tracking-[0.3em] text-xs">Contact</p>
            <h2 className="font-serif text-3xl">Visit Our Studio or Send an Enquiry</h2>
            <p className="text-white/70 mt-3 max-w-2xl">Use the form below to ask about classes, custom bridal orders, or boutique styling services. Find studio details and location on the same page.</p>
          </div>
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8">
            <div className="space-y-6">
              <div className="glass p-8 rounded-3xl border border-white/10 shadow-glow">
                <div className="text-white/80 space-y-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-gold">Studio Details</p>
                    <h3 className="font-semibold text-xl mt-3">Sharmi Aari Designer</h3>
                  </div>
                  {contactDetails.map((item, index)=>(
                    <div key={index} className="flex items-start gap-3">
                      <span className="mt-1 text-gold">•</span>
                      <div>
                        <div className="text-sm text-white/70">{item.label}</div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-glow">
                <iframe
                  title="Sharmi Aari location"
                  src={mapSrc}
                  className="w-full h-80 md:h-[420px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="space-y-6">
              <ContactForm />
              <div className="glass p-6 rounded-3xl border border-white/10 shadow-glow">
                <p className="text-sm uppercase tracking-[0.3em] text-gold">Google Business Profile</p>
                <h3 className="font-semibold text-xl mt-3">Verified Local Studio</h3>
                <p className="text-white/70 mt-3">See our Google Business listing for reviews, opening hours, and direct direction links. Trusted by our boutique community.</p>
                <a href="https://www.google.com/maps" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 mt-5 text-gold hover:text-white">
                  View profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </div>
  )
}
