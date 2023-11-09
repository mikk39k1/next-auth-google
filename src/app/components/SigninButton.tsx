"use client";

import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'
import Image from 'next/image'

const SigninButton = () => {

    const { data: session } = useSession(); 

    if (session && session.user) {
        return (
            <div className='flex gap-4 ml-auto items-center'>
                <Image
                    src={`${session.user.image}`}
                    alt="Vercel Logo"
                    className="rounded-full"
                    width={32}
                    height={32}
            />
                <p className='text-sky-600'>{session.user.name}</p>
                <button onClick={() => signOut()} className='text-red-600'> Sign Out</button>
            </div>
        )
    }

  return (
    <div>
        <button onClick={() => signIn()} className='text-green-600 ml-auto'>Sign In</button>
    </div>
  )
}

export default SigninButton