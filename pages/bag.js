import Link from 'next/link'
import React from 'react'
import ContentLoader from 'react-content-loader'

const Bag = () => {
    return (
        <section className="h-screen w-full mt-24">
            <h1 className='my-6 text-xl font-bold'>My Shopping Bag [ 4 ]</h1>
            <div className='flex gap-6'>

                <div className='w-8/12 h-full'>
                    <div className='flex flex-wrap justify-start items-start gap-6'>
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
                    </div>
                </div>

                <div className='w-4/12 h-full'>
                    <div className='border w-full h-fit p-6 rounded-lg'>
                        <div className='flex justify-between items-center my-2'>
                            <h1>Item Total</h1>
                            <h1>₹378</h1>
                        </div>
                        <div className='flex justify-between items-start my-2'>
                            <div>
                                <h1>Delivery Charges</h1>
                                <p className='text-xs mt-1 text-gray-500'>Free delivery above <strong>₹200</strong></p>
                            </div>
                            <h1 className={`text-green-500`}>FREE</h1>
                        </div>

                        <hr className='my-4' />

                        <div className='flex justify-between items-start my-2'>
                            <div>
                                <h1 className='font-bold text-xl'>Grand Total</h1>
                                <h6 className='text-sm text-gray-500'>Inclusive of all taxes</h6>
                            </div>
                            <h1 className="font-bold text-xl">₹378</h1>
                        </div>

                        <hr className=' my-4' />

                        <h6 className='text-sm text-gray-500'>Average delivery time: <strong className='text-black'>4-24 hours</strong></h6>

                        <hr className=' my-4' />

                        <Link href="/address" passHref>
                            <button className='w-full font-bold bg-green-50 p-3 rounded-lg text-green-500 hover:border-green-500 border border-white'>
                                Continue
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bag