import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AddressStep from '../../components/Bag/addressStep'
import BagStep from '../../components/Bag/bagStep'
import PaymentStep from '../../components/Bag/paymentStep'

const Bag = () => {

    const [activeTab, setActiveTab] = useState(1)
    const { quantity } = useSelector(state => state.cart)
    const bagItems = quantity

    return (
        <section className="h-fit w-full">
            {
                bagItems ?
                    <>
                        {
                            activeTab === 1 ? <BagStep setActiveTab={setActiveTab} /> : activeTab === 2 ? <AddressStep setActiveTab={setActiveTab} /> : <PaymentStep />
                        }
                    </>
                    : <div className='h-screen w-full flex justify-center items-center flex-col'>
                        <Image src="/empty-bag.svg" height={300} width={400} alt="" />
                        <h1 className='text-2xl'>Your bag is empty</h1>
                        <p>Looks like you haven&apos;t made your choice yet.</p>
                        <Link href="/" passHref>
                            <button className='bg-gray-800 text-white p-3 px-6 mt-4 rounded-lg'>Back to Home</button>
                        </Link>
                    </div>
            }

        </section>
    )
}

export default Bag