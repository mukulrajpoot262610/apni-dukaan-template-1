import Image from 'next/image'
import React from 'react'
import ContentLoader from 'react-content-loader'
import Catalogue from './Catalogue'
import Feature from './Feature'

const Header = () => {

    const image = false

    return (
        <header className='min-h-screen w-full mt-24'>
            <div className='relative w-full h-1/2'>
                {
                    image ? <Image src="/banner.jpg" height={400} width="1280" alt='' className='rounded-xl' objectFit='cover' objectPosition="top" /> : <ContentLoader height={"400"} width={"100%"} className='rounded-xl'>
                        <rect rx="0" ry="0" width="100%" height="100%" />
                    </ContentLoader>
                }
            </div>

            <hr className='w-full my-4' />

            <Feature />

            <Catalogue />

        </header>
    )
}

export default Header