import { ArrowBigUpDash } from "lucide-react"
import { useState, useEffect } from "react";

function ScrollBtn() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const toggleVisibility = () => {
        setIsVisible(window.pageYOffset > 300);
      };
  
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 flex justify-center items-center bg-blue-600 text-white rounded-full w-14 h-14 shadow-lg hover:bg-blue-700 z-1000 transition"
        >
          <ArrowBigUpDash size={28} />
        </button>
      )
    );
  }

export default ScrollBtn