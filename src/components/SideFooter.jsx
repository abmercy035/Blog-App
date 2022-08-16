import React from 'react'
import { Link } from 'react-router-dom'
import Text from './Text'
import Input from './Input.jsx'
import Img from './Img'
import NavBar from './NavBar.jsx'
import facebook from '../img/facebook.png'
import whatsapp from '../img/whatsapp.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'
import gmail from '../img/gmail.png'
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
              <b>Monday - Friday:</b>
              <i> 9:00am - 5:00pm</i>
            </li>
            <li id='wH'>
              <b>Saturday - Sunday:</b>
              <i> 12:00pm - 4:00pm </i>
            </li>
          </ul>
        </nav>
      </div>
      <div className='contact-foot'>
        <Img src={facebook} />
        <Img src={whatsapp} />
        <Img src={instagram} />
        <Img src={twitter} />
        <Img src={gmail} />
      </div>
      <div className='links'>
        <Text
          cls={"foot-links"}
          txt={
            <Link to={'#'}>
              Login
            </Link>
          }
        />
        <Text
          cls={"foot-links"}
          txt={
            <Link to={'#'}>
              Sign Up
            </Link>
          }
        />
        <Text
          cls={"foot-links"}
          txt={
            <Link to={'#'}>
            Subscribe for New Articles Alert
            </Link>
          }
        />
      </div>
      <div className='sponsors-foot'>
        <h3>Sponsors</h3>
        <p>
          <nav>
            <ul>
              <li className='sponsors'>
                <Img src={facebook} cls='sponsors-img' />
                <Text txt={'loremviure mollitia.'} elem='span' />
              </li>
              <li className='sponsors'>
                <Img src={facebook} cls='sponsors-img' />
                <Text txt={'loremviure mollitia.'} elem='span' />
              </li>
              <li className='sponsors'>
                <Img src={facebook} cls='sponsors-img' />
                <Text txt={'loremviure mollitia.'} elem='span' />
              </li>
              <li className='sponsors'>
                <Img src={facebook} cls='sponsors-img' />
                <Text txt={'loremviure mollitia.'} elem='span' />
              </li>
              <li className='sponsors'>
                <Img src={facebook} cls='sponsors-img' />
                <Text txt={'loremviure mollitia.'} elem='span' />
              </li>
            </ul>
          </nav>
        </p>
      </div>
      <div id='about-footer'>
        <h3> About </h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quas
        asperiores ipsam eaque amet architecto accusamus, dignissimos modi
        consequuntur, aperiam soluta expedita dolores inventore animi hic,
        quaerat atque? Voluptatem, nemo Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ad, repellendus!
      </div>
      <NavBar />
      <div> Javascript Enthusiast </div>
    </div>
  )
}
