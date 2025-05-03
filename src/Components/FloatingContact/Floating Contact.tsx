import { useState } from "react"
import { Mail, Phone, MessageCircle, Plus, X } from "lucide-react";

function FloatingContact (){
    const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-3 mb-2 transition-all duration-1000">
          <a
            href="mailto:anuragghosh110@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            
            className="flex items-center gap-2 px-4 py-2 rounded-full shadow-md bg-[#7551fb] hover:bg-red-100 transition"
          >
            <Mail className="text-red-300" />
            <span className="text-sm font-medium text-white">Gmail</span>
          </a>
          <a
            href="tel:+918175808205"
            className="flex items-center gap-2 px-4 py-2 rounded-full shadow-md bg-[#7551fb] hover:bg-green-100 transition"
          >
            <Phone className="text-green-400" />
            <span className="text-sm font-medium text-white">Call</span>
          </a>
          <a
            href="https://wa.me/8175808205"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full shadow-md bg-[#7551fb] hover:bg-green-200 transition"
          >
            <MessageCircle className="text-green-400" />
            <span className="text-sm font-medium text-white">WhatsApp</span>
          </a>
        </div>
      )}

      <button
        onClick={toggleOpen}
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg transition"
      >
        {open ? <X size={28} /> : <Plus size={28} />}
      </button>
    </div>
    )
}
export default FloatingContact