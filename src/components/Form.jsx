import React from 'react'
import Input from './Input'
import Opt from './Opt'
import '../styles/form.css'
import { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react'

export default function Form () {

  useEffect(() => {
    AOS.init({ duration : 1000})
   }, [])

  const [opt, setOpt] = useState(false)

  const signUp = document.querySelector('#signUp')
  const signIn = document.querySelector('#signIn')

  const triggerSwitch = (e) => {
    if (e.target.textContent === "Create an Account")
    {
      signUp.style.backgroundColor = "royalblue"
      signUp.color = "white"
      signIn.style.backgroundColor = "white"
      signIn.color = "black"
      signUp.style.borderBottomRightRadius="15px"
      signUp.style.borderTopRightRadius="15px"
      setOpt(false)
    }
    else if (e.target.textContent === "Login to Account")
    {
      signIn.style.backgroundColor = "royalblue"
      signIn.color = "white"
      signUp.style.backgroundColor = "white"
      signUp.color = "black"
      signIn.style.borderTopLeftRadius="15px"
      signIn.style.borderBottomLeftRadius="15px"
      setOpt(true)
   }
  }

  const Switch = () => {
    if (opt) {
      return (
        <form data-aos="fade-left" action='./post' method='post' onSubmit={e => e.preventDefault()}>
          <Input pH={'Name'} id='name' />
          <Input type='password' id='password' />
          <hr />
          <Input type='submit' className='submit' value={'Login'} />
        </form>
      )
    } else {
      return (
       
        <form data-aos="fade-left" action='./post' method='post' onSubmit={e => e.preventDefault()}>
          <Input pH={'Name'} id='name' />
          <Input type='email' pH={'Email'} name='email' id='email' />
          <Input type='tel' pH={'Phone'} id='phone' />
          <select name='category' id='category'>
            <Opt value={'Select Category'} disabled />
            <Opt value={'Tech and Science'} />
            <Opt value={'Religion'} />
            <Opt value={'Economy'} />
            <Opt value={'Culture'} />
          </select>
          <Input type='password' pH={'password'} id='Password' />
          <textarea placeholder={'About Me'} id='about' />
          <hr />
          <Input type='submit' className='submit' value={'Sign Up'} />
        </form>

      )
    }
  }
  return (
    <div className='form'>
      <div data-aos="fade-right" className='sub-form'>
        <h2> Subscribe for notification of New Blog Post</h2>
        <form action='./post' method='post'>
          <Input type='email' pH={'Email'} id='sub-email' />
          <Input type='submit' className='submit' />
        </form>
      </div>

      <div data-aos="fade-right" className='login-form'>
        <div id="sign-opt">
        <h2 id='signUp' onClick={triggerSwitch}>
            Create an Account
          </h2>
          <h2 id='signIn' onClick={triggerSwitch}>
            Login to Account
          </h2>
        </div>
        {Switch()}
      </div>
      <div data-aos="fade-right" className='contact-form'>
        <h3> Contact Us</h3>
        <form action='./post' method='post'>
          <Input pH={'Full Name'} id='contact-name' />
          <Input type='email' pH={'Email'} name='email' id='contact-email' />
          <Input type='tel' pH={'Phone'} id='contact-phone' />
          <textarea placeholder={'About Me'} id='contact-about' />
          <Input type='submit' id='contact-submit' />
        </form>
      </div>
    </div>
  )
}
