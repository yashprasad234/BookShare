"use client"
import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


export default function AuthForm() {
  const [showLogin, setShowLogin] = useState(true)
  return (
    <div className="border-1 w-2/3 px-8 py-8 my-auto flex flex-col gap-4" >
      {showLogin ? <div>
        <LoginForm />
        <p className='text-lg w-full text-center mt-4' >New here? <button className='hover:scale-110 cursor-pointer hover:underline' onClick={() => setShowLogin(false)} >Signup</button></p>
      </div> : <div>
        <SignupForm />
        <p className='text-lg w-full text-center mt-4' >Already have an account? <button className='hover:scale-110 cursor-pointer hover:underline' onClick={() => setShowLogin(true)} >Login</button></p>
        </div>}
    
    </div>
  )
}

