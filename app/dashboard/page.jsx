"use client"

import { useSession } from "next-auth/react"
import Image from "next/image"

const UserProfile = () => {
  const {data:session}=useSession()
  return (
    <>
    {session?.user?(
          <div className="flex w-3/6 justify-between items-center m-auto">
      
          <p>hello {session?.user?.name} </p>
          <p>email: {session?.user?.email} </p>
          <Image src={session?.user?.image} width={100} height={100} className="rounded-full"/>
        </div>
      
    ):(
      <div className="flex">please login</div>


    ) }

    </>
  )
}

export default UserProfile