import React from 'react'

const PaymentStep = () => {
    return (
        <section className="h-fit w-full mt-24">
            <h1 className='my-6 text-xl font-bold'>Payment Method</h1>
            <div className='flex gap-6 flex-col lg:flex-row'>

                <div className='w-full lg:w-8/12 h-full'>
                    <div className='border p-6 rounded-lg'>
                        <h1 className='text-2xl font-bold'>Pay on delivery (Cash/Card/UPI)</h1>
                        <p>Pay in cash or pay in person at the time of delivery with GPay/PayTM/PhonePe.</p>
                        <button className='bg-gray-800 text-white p-3 px-6 mt-4 rounded-lg'>Place Order</button>
                    </div>
                </div>

                <div className='w-full lg:w-4/12 h-full mb-24'>
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentStep