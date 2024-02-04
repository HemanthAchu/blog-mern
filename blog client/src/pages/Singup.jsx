import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Singup() {
  return (
    <div className='min-h-screen mt-20'>
      
      <div className='flex mx-auto max-w-3xl p-3 border flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1' > <Link to={"/"} className='text-4xl font-bold dark:text-white'> <span className='px-2 py-1 bg-gradient-to-r from-green-500 via-purple-500 to-pink-500 rounded-lg text-white'>hemanth m.s</span> blog</Link>
      <p className='text-sm mt-5'>This is a demo project .you caN SIGN UP with your email and password</p></div>

<div className='flex-1'>
<form className='flex flex-col  border gap-4'>
  
    <Label value='your username'/>
    <TextInput type='text' placeholder='username' id='username' />
    <Label value='your email'/>
    <TextInput type='text' placeholder='Email' id='email' />
    <Label value='your password'/>
    <TextInput type='text' placeholder='password' id='password' />
  <Button gradientDuoTone='purpleToPink' type='submit' >Sign Up</Button>
</form>
<div className='flex gap-2 text-sm mt-3'><span>Have an account?</span>
<Link to={'/sign-in'} className='text-blue-500' >SingIn</Link>
</div>

      </div>

      </div>



      
    </div>
  )
}
