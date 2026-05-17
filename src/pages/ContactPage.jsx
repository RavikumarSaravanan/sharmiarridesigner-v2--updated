import React from 'react'
import ContactForm from '../components/ContactForm'

export default function ContactPage(){
  const mapSrc = 'https://maps.google.com/maps?q=12.9716,77.5946&z=15&output=embed'

  return (
    <div className="pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-serif text-3xl">Contact</h2>
          <p className="text-white/80 mt-2">Reach out for class enquiries, custom orders, or boutique partnerships.</p>
          <div className="mt-6 space-y-2 text-white/70">
            <div>Phone: +91-XXXXXXXXXX</div>
            <div>Email: info@sharmiaari.com</div>
            <div>Address: 123 Boutique Lane, Your City</div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      <div className="mt-10 rounded-3xl overflow-hidden border border-white/10 shadow-glow">
        <iframe
          title="Sharmi Aari location"
          src={mapSrc}
          className="w-full h-80 md:h-[420px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
