import React from 'react'
import Input from './Input'
import Opt from './Opt'
import '../styles/form.css'
export default function Form () {
  return (
    <div className='form'>
      <div className='sub-form'>
        <h2> Subscribe for notification of New Blog Post</h2>
        <form action='./post' method='post'>
          <Input type='email' pH={'Email'} id='email' />
          <Input type='submit' id='submit' />
        </form>
      </div>
      <div className='login-form'>
        <h3> Create an Account or Sign In</h3>
        <form action='./post' method='post'>
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
          <textarea placeholder={'About Me'} id='about' />
         
          <Input type='submit' id='submit' value={"Login"}/>
           <hr />
          <Input type='submit' id='submit' value={"Sign Up"}/>
        </form>
      </div>
      <div className='contact-form'>
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