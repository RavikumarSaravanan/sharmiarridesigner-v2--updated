import React, {useEffect, useState} from 'react'

export default function LoadingScreen(){
  const [show, setShow] = useState(true)
  useEffect(()=>{
    const t = setTimeout(()=>setShow(false),900)
    return ()=>clearTimeout(t)
  },[])
  if(!show) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-luxury">
      <div className="text-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-400 shadow-glow flex items-center justify-center text-luxury font-serif text-2xl">SA</div>
      </div>
    </div>
  )
}
