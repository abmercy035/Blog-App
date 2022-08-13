import React from 'react'
import Text from './Text'

export default function Footer() {
  return (
    <footer>
  <div>
    <h2>FIND US </h2>
    <h3> Address</h3>
<Text txt={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ratione, facere beatae voluptatum iure mollitia."} />
  </div>
  <div>
    <h3>Working Hours </h3>
    <nav>
      <ul>
        <li id='wH'> Monday - Friday : 9:00am - 5:00pm</li>
        <li id='wH'> Saturday - Sunday : 12:00pm - 4:00pm</li>
      </ul>
    </nav>
  </div>
  <div>
    <img src='' alt='facebook' />
    <img src='' alt='Whatsapp' />
    <img src='' alt='Twitter' />
    <img src='' alt='Instagram' />
    <img src='' alt='Email' />
  </div>
  <div> Javascript Enthusiast </div>
</footer>

  )
}
