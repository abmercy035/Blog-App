import React from 'react'

export default function Img({src, cls, alt}) {
  return (
   <img src={src} className={cls} alt={alt? alt : "image"} />
  )
}
