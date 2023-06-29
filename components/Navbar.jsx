

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import Link from 'next/link'
import React from 'react'
 const Navbar = async() => {
  const session=await getServerSession(authOptions)
  console.log(session)
  return (
    <div className='flex h-12 shadow-lg bg-slate-300 justify-between px-5 items-center'>
       <pre> {session} </pre>
        <Link href={"/admin"}>Admin</Link>
        <Link href={"/dashboard"}>UsePRofile</Link>
        <Link href={"/"}>Home</Link>
        <Link href={"/signin"}>Login</Link>
        <Link href={"/register"}>Register</Link>


    </div>
  )
}

export default Navbar