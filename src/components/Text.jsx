import React from 'react'

export default function Text({ txt, cls, style, func, elem }) {
 if (elem === "para")
  return (
   <p className={cls} onClick={func}>{txt}</p>
  )
 if (elem === "span")
  return (
   <span className={cls} onClick={func}>{txt}</span>
  )
 if(!elem) return (
  <div pan className={cls} onClick={func}>
    {txt}
  </div>
)

}
