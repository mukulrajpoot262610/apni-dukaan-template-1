import Image from 'next/image'
import React from 'react'
import ContentLoader from 'react-content-loader'
import { useSelector } from 'react-redux'
import Catalogue from './Catalogue'
import Feature from './Feature'

const Header = ({ response }) => {

    const { details } = useSelector(state => state.details)

    return (
        <header className='min-h-screen w-full mt-24'>
            <div className='relative w-full h-1/2'>
                {
                    details ? <Image src={details.banner ? details.banner : "/banner.jpg"} height={800} width={1920} alt='' className='rounded-xl' objectFit='cover' objectPosition="center" /> : <ContentLoader height={"400"} width={"100%"} className='rounded-xl'>
                        <rect rx="0" ry="0" width="100%" height="100%" />
                    </ContentLoader>
                }
            </div>

            <hr className='w-full my-4' />

            <Feature />
            <div id='category'>
                <Catalogue />
            </div>

        </header>
    )
}

export default Header