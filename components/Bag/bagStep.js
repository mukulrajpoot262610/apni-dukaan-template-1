import Link from 'next/link'
import React from 'react'
import ContentLoader from 'react-content-loader'
import { useSelector } from 'react-redux'
import Image from 'next/image'

const BagStep = ({ setActiveTab }) => {

    const { products, quantity, total } = useSelector(state => state.cart)

    return (
        <div>
            <h1 className='my-6 text-xl font-bold mt-24'>My Shopping Bag [ {quantity} ]</h1>
            <div className='flex gap-6 flex-col lg:flex-row'>

                <div className='w-full lg:w-8/12 h-full'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        {
                            products.length > 0 ? <>
                                {
                                    products.map(e => <div key={e._id} className="border-2 p-2 flex items-center gap-4 rounded-lg">
                                        <Image height={120} width={200} objectFit='cover' alt="ecommerce" src={e.product.image[0]} className="rounded-lg" />
                                        <div>
                                            <h2 className='font-bold'>{e.product.name}</h2>
                                            <p className='text-sm'>Quantity: {e.qty}</p>
                                            <p className='text-sm'>Price: {e.product.discountedPrice}</p>
                                        </div>
                                    </div>)
                                }
                            </> : <>
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
                </div>

                <div className='w-full lg:w-4/12 h-full mb-24'>
                    <div className='border w-full h-fit p-6 rounded-lg'>
                        <div className='flex justify-between items-center my-2'>
                            <h1>Item Total</h1>
                            <h1>₹{total}</h1>
                        </div>
                        <div className='flex justify-between items-start my-2'>
                            <div>
                                <h1>Delivery Charges</h1>
                                <p className='text-xs mt-1 text-gray-500'>Free delivery above <strong>₹200</strong></p>
                            </div>
                            <h1 className={`${total > 200 ? "text-green-500" : ""} `}>{total > 200 ? "FREE" : "₹40"}</h1>
                        </div>

                        <hr className='my-4' />

                        <div className='flex justify-between items-start my-2'>
                            <div>
                                <h1 className='font-bold text-xl'>Grand Total</h1>
                                <h6 className='text-sm text-gray-500'>Inclusive of all taxes</h6>
                            </div>
                            <h1 className="font-bold text-xl">₹{total > 200 ? total : total + 40}</h1>
                        </div>

                        <hr className=' my-4' />

                        <h6 className='text-sm text-gray-500'>Average delivery time: <strong className='text-black'>1-4 hours</strong></h6>

                        <hr className=' my-4' />

                        <button className='w-full font-bold bg-green-50 p-3 rounded-lg text-green-500 hover:border-green-500 border border-white' onClick={() => setActiveTab(2)}>
                            Continue
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BagStep