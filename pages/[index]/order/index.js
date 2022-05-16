import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image'

const Order = () => {

    const { products, total } = useSelector(state => state.cart)
    const { details } = useSelector(state => state.details)
    const { user } = useSelector(state => state.auth)
    const { order } = useSelector(state => state.order?.order)

    return (
        <div className="flex flex-col items-center justify-center mt-24">
            <Head>
                <title>Order - Apni Dukaan</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full mt-10">
                <div className="flex flex-col xl:flex-row gap-16">

                    <div className="p-4 w-full lg:w-8/12">
                        <>
                            {
                                order ? <><h1 className="font-bold text-4xl uppercase tracking-tighter">YOUR ORDER WAS PLACED SUCCESSFULLY</h1>
                                    <p className="my-4">Order Number: {order?._id}</p>
                                    <p className="my-4">Hi, thanks for shopping with {details?.name}! We will send a confirmation email to <span className="font-bold">{user?.email}</span> shortly</p>
                                    <hr />
                                    <p className="my-4">Track and trace details will be sent to your email upon shipment.</p>
                                    <hr />
                                    <h1 className="mt-4 mb-2 text-xl font-bold">DELIVERY ADDRESS</h1>
                                    <h1><span className='font-bold uppercase'>Landmark: </span>{order.shippingAddress?.landmark}</h1>
                                    <h1><span className='font-bold uppercase'>Street: </span>{order.shippingAddress?.street}</h1>
                                    <h1><span className='font-bold uppercase'>City: </span>{order.shippingAddress?.city}</h1>
                                    <h1><span className='font-bold uppercase'>Pincode: </span>{order.shippingAddress?.pincode}</h1>

                                    <h1 className="mt-4 mb-2 text-xl font-bold">BILLING ADDRESS</h1>
                                    <h1><span className='font-bold uppercase'>Landmark: </span>{order.shippingAddress?.landmark}</h1>
                                    <h1><span className='font-bold uppercase'>Street: </span>{order.shippingAddress?.street}</h1>
                                    <h1><span className='font-bold uppercase'>City: </span>{order.shippingAddress?.city}</h1>
                                    <h1><span className='font-bold uppercase'>Pincode: </span>{order.shippingAddress?.pincode}</h1>
                                    <h1 className="mt-4 text-base font-bold">PAYMENT OPTION</h1>
                                    <p className="mt-1 mb-8">{order.paymentMethod === "COD" ? "Cash On Delivery" : ""}</p></> : <></>
                            }

                            <hr />
                        </>
                        <Link href={`/${details.storeLink}`} passHref>
                            <button className="cursor-pointer rounded-lg bg-black text-white py-4 px-6 my-4 flex items-center uppercase font-bold">Shop more</button>
                        </Link>
                    </div>

                    <div className="p-4 w-full lg:w-4/12">

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
                        </div>

                        <h1 className="font-bold text-xl uppercase mb-2 mt-4">Order details</h1>
                        <div>
                            {
                                products.length > 0 && <>
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
                                </>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order