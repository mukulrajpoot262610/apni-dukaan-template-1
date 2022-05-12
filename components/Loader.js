import Image from 'next/image'
import React from 'react'

const Loader = () => {
    return (
        <main className='h-screen w-full bg-white flex justify-center items-center'>
            <Image src="/logo.svg" height={400} width={400} alt="" className='animate-pulse' />
        </main>
    )
}

export default Loader