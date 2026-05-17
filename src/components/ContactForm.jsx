import React, {useState} from 'react'

export default function ContactForm(){
  const [form,setForm]=useState({name:'',phone:'',email:'',course:'',message:''})
  const [loading,setLoading]=useState(false)
  const [responseMessage,setResponseMessage]=useState('')

  async function handleSubmit(e){
    e.preventDefault();
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''
    if(!accessKey){
      setResponseMessage('Web3Forms key is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to your .env.')
      return
    }

    setLoading(true)
    setResponseMessage('')
    const url = 'https://api.web3forms.com/submit'
    const payload = new FormData()
    payload.append('access_key', accessKey)
    Object.entries(form).forEach(([k,v])=>payload.append(k,v))

    try{
      const res = await fetch(url,{method:'POST',body:payload})
      const data = await res.json()
      if(data.success){
        setResponseMessage('Message sent successfully — we will reply soon.')
        setForm({name:'',phone:'',email:'',course:'',message:''})
      } else {
        setResponseMessage(data.message || 'Error sending message. Please try again.')
      }
    }catch(err){
      setResponseMessage('Network error. Please check your connection and try again.')
    }finally{setLoading(false)}
  }

  return (
    <form onSubmit={handleSubmit} className="glass p-6 rounded-xl w-full">
      <div className="grid grid-cols-1 gap-3">
        <input required placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="p-3 rounded bg-transparent border border-white/6 w-full" />
        <input required placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="p-3 rounded bg-transparent border border-white/6 w-full" />
        <input required type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="p-3 rounded bg-transparent border border-white/6 w-full" />
        <input placeholder="Course Interested" value={form.course} onChange={e=>setForm({...form,course:e.target.value})} className="p-3 rounded bg-transparent border border-white/6 w-full" />
        <textarea placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="p-3 rounded bg-transparent border border-white/6 w-full" rows={4}></textarea>
        {responseMessage && <div className="text-sm text-white/80">{responseMessage}</div>}
        <button disabled={loading} className="button-gold px-4 py-2 rounded-full w-full md:w-auto">{loading? 'Sending...':'Send Message'}</button>
      </div>
    </form>
  )
}
