import { useState,  useEffect } from "react"
import { Mail, Phone, MessageCircle, PhoneCall, X } from "lucide-react";

function FloatingContact (){
    const [open, setOpen] = useState(false);
    const [scrolled,setScrolled] = useState(false);
    useEffect(()=>{
        const handleScroll = () =>{
          if(window.scrollY>200){
            setScrolled(true);
          }else{
            setScrolled(false);
          }
        }
        window.addEventListener("scroll",handleScroll);
        return ()=> window.removeEventListener("scroll",handleScroll);
      },[])
  const toggleOpen = () => setOpen(!open);
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-3 mb-2 transition-all duration-1000">
          <a
            href="mailto:anuragghosh110@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            
            className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-md ${scrolled?'bg-[#7551fb]':'bg-black'} hover:bg-red-500 transition`}
          >
            <Mail className="text-red-300" />
            <span className="text-sm font-medium text-white">Gmail</span>
          </a>
          <a
            href="tel:+918175808205"
            className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-md ${scrolled?'bg-[#7551fb]':'bg-black'} hover:bg-green-900 transition`}
          >
            <Phone className="text-green-400" />
            <span className="text-sm font-medium text-white">Call</span>
          </a>
          <a
            href="https://wa.me/8175808205"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-md ${scrolled?'bg-[#7551fb]':'bg-black'} hover:bg-green-600 transition`}
          >
            <MessageCircle className="text-green-400" />
            <span className="text-sm font-medium text-white">WhatsApp</span>
          </a>
        </div>
      )}

      <button
        onClick={toggleOpen}
        className={`w-14 h-14 rounded-full ${scrolled?'bg-blue-600':'bg-blue-800'} hover:bg-blue-700 text-white flex items-center justify-center shadow-lg transition`}
      >
        {open ? <X size={28} /> : <PhoneCall size={28} />}
      </button>
    </div>
    )
}
export default FloatingContact