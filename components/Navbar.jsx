

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import Link from 'next/link'
import React from 'react'
import SignOut from './SignOut'
 const Navbar = async() => {
  const session=await getServerSession(authOptions)
  console.log(session)
  return (
    <div className='flex h-12 shadow-lg bg-slate-300 justify-between px-5 items-center'>
      
      
        {session?.user? (
          <div className="flex gap-12 justify-around items-center">

            <Link href={"/admin"}>Admin</Link>
            <Link href={"/dashboard"}>UsePRofile</Link>
            <Link href={"/"}>Home</Link>
            <SignOut/>

          </div>

        ):(
          <div className="flex">
          <Link href={"/signin"}>Login</Link>
          <Link href={"/register"}>Register</Link>
          
          
          </div>


        )}
      


    </div>
  )
}

export default Navbar