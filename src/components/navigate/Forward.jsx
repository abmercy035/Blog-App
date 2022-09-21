import React from "react";
import ForwardArrow from '../../img/arrow-circle-right.svg'

export default function Forward ({ Func }) {
  return (
    <div onClick={Func}>
      <img className="pagination-arrow" src={ForwardArrow} alt='Back' />
    </div>
  )
}
