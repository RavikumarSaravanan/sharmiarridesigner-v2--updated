import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="mt-16 border-t border-white/6 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6 lg:grid lg:grid-cols-[1.4fr_1fr_1fr] lg:items-start lg:text-left">
        <div className="space-y-4 w-full lg:w-auto">
          <div className="font-serif text-2xl">Sharmi Aari Designer</div>
          <p className="text-white/70">Luxury Aari embroidery, bridal blouse crafting, and boutique design training with a premium studio experience.</p>
          <div className="text-white/70 space-y-2 text-sm">
            <div>Phone: <a href="tel:+916382194871" className="text-gold">+91 63821 94871</a></div>
            <div>Email: <a href="mailto:sharmiaaridesigner@gmail.com" className="text-gold">sharmiaaridesigner@gmail.com</a></div>
          </div>
        </div>

        <div className="space-y-4 w-full lg:w-auto">
          <div className="font-semibold">Quick Links</div>
          <div className="flex flex-col gap-3 text-white/70 text-sm items-center lg:items-start">
            <Link to="/courses" className="hover:text-gold">Courses</Link>
            <Link to="/services" className="hover:text-gold">Services</Link>
            <Link to="/gallery" className="hover:text-gold">Gallery</Link>
            <Link to="/" className="hover:text-gold">Home</Link>
          </div>
        </div>

        <div className="space-y-4 w-full lg:w-auto">
          <div className="font-semibold">Connect</div>
          <div className="flex gap-3 justify-center lg:justify-start mt-3">
            <a href="https://wa.me/916382194871" target="_blank" rel="noreferrer noopener" aria-label="whatsapp" className="p-3 rounded-full bg-white/6 text-gold hover:bg-white/10"><FaWhatsapp/></a>
            <a href="https://www.instagram.com/sharmi_5201" target="_blank" rel="noreferrer noopener" aria-label="instagram" className="p-3 rounded-full bg-white/6 text-gold hover:bg-white/10"><FaInstagram/></a>
          </div>
          <p className="text-sm text-white/60 mt-2">Trusted by boutique designers and fashion students across the city.</p>
        </div>
        </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">
        <div>© {new Date().getFullYear()} Sharmi Aari Designer. All rights reserved.</div>
        <div>Designed by <a href="https://raventrixtechnologies.netlify.app/" target="_blank" rel="noreferrer" className="text-gold hover:text-white">Raventrix Technologies</a></div>
      </div>
      </div>
    </footer>
  )
}
