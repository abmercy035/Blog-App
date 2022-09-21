import React from 'react'

export default function Opt({value, disabled}) {
 return (
  <option value={value} disabled = { disabled ? disabled : ''} >{value}</option>
  )
}
