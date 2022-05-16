import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LoginModal from '../../../components/Auth/LoginModal'
import OrderHistoryCover from '../../../components/Bag/OrderHistoryCover'
import { GetOrderDetails } from '../../../services/api'

const Account = () => {

    const { details } = useSelector(state => state.details)
    const { user, isAuth } = useSelector(state => state.auth)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [viewOrders, setViewOrders] = React.useState(false);
    const [order, setOrder] = useState()

    function openModal() {
        setIsOpen(true);
    }

    useEffect(() => {
        if (!isAuth) {
            openModal()
        }
    }, [isAuth])

    useEffect(() => {
        const fetchData = async () => {

            try {
                const { data } = await GetOrderDetails({ userId: user._id, storeLink: details.storeLink })
                setOrder(data.orders)
            } catch (err) {
                console.log(err)
            }
        }

        isAuth && fetchData()
    }, [isAuth, details, user])


    const handleLogout = () => {

    }

    return (
        <div className="flex flex-col items-center justify-center mt-24">
            <Head>
                <title>Account - {details.businessName}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <LoginModal openModal={openModal} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />

            {
                isAuth ? <div className="w-full mt-10">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <h1 className="font-bold text-4xl uppercase">Hi {user?.name}</h1>
                        <div className="">
                            <h1 className="font-normal text-lg text-right" >Not {user?.name}? <span className="uppercase font-bold underline cursor-pointer" onClick={handleLogout}>Logout</span> </h1>
                            <p className="text-sm text-right">THIS WILL LOG YOU OUT FROM YOUR CURRENT DEVICE</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h1 className="font-bold text-3xl uppercase tracking-tighter">Order History</h1>
                        {
                            viewOrders ? <div className='my-8'>
                                {
                                    order.length > 0 ? order.map((e) => <OrderHistoryCover key={e._id} data={e} />) : <>
                                        <h1 className='font-bold uppercase'>No ORders found...</h1>
                                    </>
                                }
                            </div>
                                : <button className='mt-4 mb-12 bg-black rounded-lg text-white p-3 px-6' onClick={() => setViewOrders(true)}>View All Orders</button>
                        }
                    </div>
                </div> : <div className="w-full mt-10">

                </div>
            }


        </div>
    )
}

export default Account