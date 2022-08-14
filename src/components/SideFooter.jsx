import React from 'react'
import Text from './Text'
import '../styles/footer.css'
export default function Footer () {
  return (
    <div id='side-footer'>
      <h2>FIND US </h2>
      <div id='footer-address'>
        <h3> Address</h3>
        <Text
          txt={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ratione, facere beatae voluptatum iure mollitia.'
          }
        />
      </div>
      <div id='Working-hr'>
        <h3>Working Hours </h3>
        <nav>
          <ul>
            <li id='wH'>
              <b>Monday - Friday:</b><i> 9:00am - 5:00pm</i>
            </li>
            <li id='wH'>
             <b>Saturday - Sunday:</b><i> 12:00pm - 4:00pm </i>
            </li>
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
    </div>
  )
}
