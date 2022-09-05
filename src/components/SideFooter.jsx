import React from 'react'
import { Link } from 'react-router-dom'
import Text from './Text'
import Img from './Img'
// import NavBar from './NavBar.jsx'
import facebook from '../img/facebook.png'
import whatsapp from '../img/whatsapp.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'
import gmail from '../img/gmail.png'
import '../styles/footer.css'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

export default function Footer () {
  useEffect(()=>{
    AOS.init(
      {duration : 1000}
    )
  }, [])
  return (
    <div id='side-footer'>
      <h2>FIND US </h2>
      <div data-aos="fade-right" id='footer-address'>
        <h3> Address</h3>
        <Text
          elem="address" txt={
            ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ratione, facere beatae voluptatum iure mollitia.'
          }
        />

      </div>

      <div data-aos="fade-left" id='Working-hr'>
        <h3>Working Hours </h3>
        <nav id="hr-list">
          <ul>
            <li id='hr'>
              <b>Monday - Friday:</b>
              <i> 9:00am - 5:00pm</i>
            </li>
            <li id='hr'>
              <b>Saturday - Sunday:</b>
              <i> 12:00pm - 4:00pm </i>
            </li>
          </ul>
        </nav>
      </div>
      <div data-aos="fade-right" className='contact-foot'>
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
        <>
          <nav>
            <ul>
              <li data-aos="flip-up" className='sponsors'>
                <Text txt={'loremviure mollitia.'} elem='span' />
              </li>
              <li data-aos="flip-up" className='sponsors'>
                <Text txt={'loremviure mollitia.'} elem='span' />
              </li>
              <li data-aos="flip-up" className='sponsors'>
                <Text txt={'loremviure mollitia.'} elem='span' />
              </li>
              <li data-aos="flip-up" className='sponsors'>
                <Text txt={'loremviure mollitia.'} elem='span' />
              </li>
              <li data-aos="flip-up" className='sponsors'>
                <Text txt={'loremviure mollitia.'} elem='span' />
              </li>
            </ul>
          </nav>
        </>
      </div>
      <div data-aos="fade-in" id='about-footer'>
        <h3> About </h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quas
        asperiores ipsam eaque amet architecto accusamus, dignissimos modi
        consequuntur, aperiam soluta expedita dolores inventore animi hic,
        quaerat atque? Voluptatem, nemo Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ad, repellendus!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, atque! Labore aliquid blanditiis non quod dolore provident dolorem nulla quaerat.
      </div>
    </div>
  )
}