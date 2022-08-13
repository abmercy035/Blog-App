import React from 'react'

export default function Text({ txt }, props) {
 if (props.elem === "para")
  return (
   <p className={props.cls} onClick={props.func}>{txt}</p>
  )
 if (props.elem === "div")
  return (
   <div className={props.cls} onClick={props.func}>{txt}</div>
  )
 if (props.elem === "span")
  return (
   <span className={props.cls} onClick={props.func}>{txt}</span>
  )
 if(!props.elem) return (
  <div className={props.cls} onClick={props.func}>
      {txt}
  </div>
)

}
