import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

export default function App(){
  return (
    <div className="min-h-screen bg-luxury text-cream">
      <LoadingScreen />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/courses" element={<CoursesPage/>} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/gallery" element={<GalleryPage/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
