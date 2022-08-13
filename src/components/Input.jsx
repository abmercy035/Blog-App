import React from 'react'

export default function Input({type, id, pH, name, style, value}) {
  return (
   <input type={type? type : "text"} id={id} value={value} name={name ? name : type} placeholder={ pH ? ("Enter " + pH) : name ? "Enter " + name : "Enter " + type} style={style}></input>
  )
}
