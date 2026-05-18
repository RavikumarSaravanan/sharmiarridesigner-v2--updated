import React from 'react'
import ContactForm from '../components/ContactForm'

export default function ContactPage(){
  const mapSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4706.460757114358!2d79.8465749!3d11.0309967!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a551bc0e1a65e4b%3A0x9a37e9238c87d436!2sSHARMI%20AARI%20DESIGNER!5e1!3m2!1sen!2sin!4v1779121391062!5m2!1sen!2sin'

  return (
    <div className="pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-serif text-3xl">Contact</h2>
          <p className="text-white/80 mt-2">Reach out for class enquiries, custom orders, or boutique partnerships.</p>
          <div className="mt-6 space-y-2 text-white/70">
            <div>Phone: +91-63821-94871</div>
            <div>Email: sharmiaaridesigner@gmail.com</div>
            <div>Address: ASV Complex GH Opposite, Kamarajar Saalai, Tharangambadi, Tamil Nadu 609313</div>
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
          allowFullScreen
          frameBorder="0"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-3 text-sm text-white/70">
        <a
          href="https://www.google.com/maps/place/SHARMI+AARI+DESIGNER/@11.0309967,79.8465749,15z"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Open map in Google Maps
        </a>
      </div>
      </div>
    </div>
  )
}
