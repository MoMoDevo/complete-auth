'use client'

import { signIn } from "next-auth/react"

const Login = () => {
  return (
    <div className='flex flex-col w-4/5 shadow-xl bg-red-100 h-full m-auto items-center mt-7'>
        <form  className='flex flex-col w-3/5 shadow-xl bg-slate-500 m-auto items-center gap-4 border-collapse border mt-7'>
            <input type="email"  placeholder='email' />
            <input type="password"  placeholder='password'/>
            <button type='submit'>Login</button>
        </form>
        <p>login with google</p>
        <button onClick={()=>signIn("google",{callbackUrl:"/"})}>continue with google</button>
    </div>
  )
}

export default Login