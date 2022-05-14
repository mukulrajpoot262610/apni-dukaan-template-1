import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const FallBack = () => {
    return (
        <div className='fixed top-0 left-0 w-full bg-white z-50 h-screen flex justify-center items-center flex-col p-6'>
            <Head>
                <title>
                    Apni Dukaan
                </title>
            </Head>
            <Image src="/404.svg" height={200} width={400} alt="" />
            <h1 className='text-3xl font-bold my-2 mt-8'>Store URL does not exist!</h1>
            <p className='text-center'>Looks like the store that you are looking for does not exist. Please enter a valid URL and try again.</p>
            <button className='bg-gray-800 text-white p-3 px-6 mt-4 rounded-lg'>Explore Other Store</button>
        </div>
    )
}

export default FallBack