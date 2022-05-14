import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const BillingCard = () => {

    const cart = useSelector(state => state.cart)
    const { products, quantity, total } = cart;

    const [originalPrice, setOriginalPrice] = useState()
    const [discount, setDiscount] = useState()

    useEffect(() => {
        products.length && setOriginalPrice(products.map((e) => {
            return ({ price: e.product.price, qty: e.qty })
        }).map(e => +e.price * +e.qty).reduce((a, b) => a + b))

        products.length && setDiscount(products.map((e) => {
            return ({ price: e.product.salePrice, qty: e.qty })
        }).map(e => +e.price * +e.qty).reduce((a, b) => a + b))

    }, [products])

    return <>
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
                {
                    isAuth ? <button className='w-full font-bold bg-green-50 p-3 rounded-lg text-green-500 hover:border-green-500 border border-white' onClick={() => setActiveTab(2)}>
                        Continue
                    </button> : <button className='w-full font-bold bg-red-50 p-3 rounded-lg text-red-500 hover:border-red-500 border border-white' onClick={openModal}>
                        Log In
                    </button>
                }

            </div>
        </div>
    </>;
};

export default BillingCard;
