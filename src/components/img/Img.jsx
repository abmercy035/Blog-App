import React from 'react'

export default function Img({src, cls, id, alt, style}) {
  return (
   <img src={src} id={id? id : cls} className={cls} alt={alt? alt : "image"} style={style} 
   onError={(e) => {e.target.style.display='none'}}
/>

  )
}


//    onError={(e) => {
//      e.target.onError = null;
//      e.target.src = 'https://via.placeholder.com/350.png/005/fff/?text=FallBackImg'; 
//      e.target.style = ' display: none;'
// }} 