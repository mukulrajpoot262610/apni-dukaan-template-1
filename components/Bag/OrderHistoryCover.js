import commaNumber from 'comma-number';
import React from 'react';
import moment from 'moment'
import Link from 'next/link';

const OrderHistoryCover = ({ data }) => {
    return <div className=' m-2 border-2 p-3 rounded-lg'>
        <div className='flex items-center justify-between flex-col lg:flex-row gap-4'>
            <div className='mx-4'>
                <h1 className='uppercase text-lg font-bold'>Your Order: {data._id}</h1>
                <h1 className='mt-1'>{moment(data.createdAt).fromNow()} | ₹{commaNumber(data.totalPrice)} | {data.orderItems?.map(e => e.qty).reduce((a, b) => a + b, 0)} item</h1>
            </div>
            <div className='flex gap-3 rounded-lg'>
                {
                    data.orderItems?.map((e, i) => <img key={i} src={e.product.image[0]} alt='' className='h-full rounded-lg max-h-28' />)
                }
            </div>
        </div>
    </div>;
};

export default OrderHistoryCover;
