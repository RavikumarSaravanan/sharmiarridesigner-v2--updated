import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton(){
  return (
    <a href="https://wa.me/" aria-label="WhatsApp" className="fixed right-6 bottom-6 z-50 bg-gradient-to-br from-green-500 to-green-400 p-4 rounded-full shadow-lg">
      <FaWhatsapp className="text-white" />
    </a>
  )
}
