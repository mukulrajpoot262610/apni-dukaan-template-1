import React from 'react'
import Image from 'next/image'
import ContentLoader from 'react-content-loader'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Catalogue = () => {

    const { products, details } = useSelector(state => state.details)

    return (
        <>
            <div className='flex items-center gap-8'>
                <p className='hover:underline cursor-pointer'>All Catgories</p>
            </div>

            <hr className='my-4' />

            <div className='p-4 flex flex-wrap justify-center items-center gap-6 my-10'>
                {
                    products ? products?.map(e => <div key={e._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <Link href={`/${details.storeLink}/${e._id}`}>
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image layout='fill' objectFit='contain' objectPosition="bottom" alt="ecommerce" src={e.image[0]} />
                            </a>
                        </Link>
                        <div className='flex justify-between items-start'>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY: {e.category}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">{e.name}</h2>
                                <p className="mt-1">₹{e.mrp}</p>
                            </div>
                            <div className='mt-4'>
                            </div>
                        </div>
                    </div>) : <>
                        <ContentLoader height={280}>
                            <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
                            <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
                            <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
                            <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
                        </ContentLoader>
                        <ContentLoader height={280}>
                            <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
                            <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
                            <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
                            <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
                        </ContentLoader>
                    </>
                }

            </div>
        </>
    )
}

export default Catalogue