import React, {useState, useEffect, useRef} from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
const logo = '/assets/logo.webp'

export default function Navbar(){
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const mobileRef = useRef()

  useEffect(()=>{
    function onDoc(e){
      if(open && mobileRef.current && !mobileRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return ()=>document.removeEventListener('click', onDoc)
  },[open])

  const handleContactClick = () => {
    setOpen(false)
    if(location.pathname === '/') {
      const el = document.getElementById('contact')
      if(el) {
        el.scrollIntoView({behavior:'smooth', block:'start'})
        return
      }
    }
    navigate('/')
    setTimeout(() => {
      const el = document.getElementById('contact')
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
    }, 120)
  }

  return (
    <header className="sticky top-0 z-40 glass px-4 md:px-6 py-3 md:py-4 border-b border-white/6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Sharmi Aari Designer" className="w-10 h-10 rounded-full object-cover" />
          <div className="hidden sm:block">
            <div className="font-serif text-lg">Sharmi Aari Designer</div>
            <div className="text-xs text-white/70">Aari Embroidery & Tailoring Academy</div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <NavLink to="/" className={({isActive})=>isActive? 'text-gold':''}>Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
          <button type="button" onClick={handleContactClick} className="button-gold px-4 py-2 rounded-full text-sm">Contact</button>
        </nav>

        <div className="md:hidden relative" ref={mobileRef}>
          <button onClick={()=>setOpen(v=>!v)} className="p-2 bg-white/4 rounded-lg"><HiMenu size={20} /></button>
          {open && (
            <div className="absolute right-0 mt-3 w-64 bg-luxury/95 backdrop-blur-sm border border-white/6 rounded-lg shadow-glow p-4">
              <div className="flex justify-end mb-2"><button onClick={()=>setOpen(false)} className="p-1 rounded"><HiX/></button></div>
              <div className="flex flex-col gap-3">
                <NavLink onClick={()=>setOpen(false)} to="/" className="block">Home</NavLink>
                <NavLink onClick={()=>setOpen(false)} to="/courses" className="block">Courses</NavLink>
                <NavLink onClick={()=>setOpen(false)} to="/services" className="block">Services</NavLink>
                <NavLink onClick={()=>setOpen(false)} to="/gallery" className="block">Gallery</NavLink>
                <NavLink onClick={()=>setOpen(false)} to="/about" className="block">About</NavLink>
                <button onClick={handleContactClick} className="button-gold px-4 py-2 rounded-full text-sm mt-2">Contact</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
