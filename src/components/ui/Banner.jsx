import React, { useEffect, useRef, useState } from 'react'
import "./style.css";
const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);
  console.log(window.scrollY);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div ref={divRef} className={`sticky z-50 py-3 bg-white banner_wrap ${!isVisible && "end"}`}>
      <div className='flex items-center justify-between px-6 lg:px-28'>
        <p>+998 (91) 474-78-18</p>
        <p>Toshkent shahar, Yunusobod tumani, Amir Temur ko'chasi, 114-uy</p>
      </div>
    </div>
  )
}

export default Banner;