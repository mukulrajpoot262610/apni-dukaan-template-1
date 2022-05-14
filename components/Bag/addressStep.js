import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddressModal from './AddressModal'
import { PlaceOrder } from '../../services/api'
import toast from 'react-hot-toast'
import { setOrder } from '../../redux/orderSlice'
import { setAuth } from '../../redux/authReducer'
import { useRouter } from 'next/router'

const AddressStep = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    const { products, total } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)
    const { details } = useSelector(state => state.details)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = useState()

    const handleSubmit = async () => {
        const payload = {
            orderItems: products,
            totalPrice: total,
            shippingAddress: user.address[0],
            paymentMethod: "COD",
            storeLink: details.storeLink,
            email: user.email
        }

        try {
            const { data } = await PlaceOrder(payload)
            dispatch(setOrder(data))
            dispatch(setAuth(data))
            router.replace(`/${details.storeLink}/order`)
            toast.success('Order Placed Successfully')
        } catch (err) {
            console.log(err)
        }
    }

    function openModal() {
        setIsOpen(true);
    }


    return (
        <section className="h-fit w-full mt-24">
            <AddressModal openModal={openModal} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
            <h1 className='my-6 text-xl font-bold'>Select a Delivery Address</h1>
            <div className='flex gap-6 flex-col lg:flex-row'>

                <div className='w-full lg:w-8/12 h-full'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <div className="relative border border-gray-300 h-44 p-6 flex justify-between flex-col items-start hover:border-black cursor-pointer" onClick={openModal}>
                            <h1>New Address</h1>
                            <p>+</p>
                        </div>
                        {
                            user.address?.map((e, i) => <div key={i} className={`relative border h-44 p-6 flex justify-between flex-col items-start hover:border-black cursor-pointer ${selected === i ? "border-black border-2" : "border-gray-300"}`}
                                onClick={() => setSelected(i)}
                            >
                                <div>
                                    <h1><span className='font-bold uppercase'>Landmark: </span>{e.landmark}</h1>
                                    <h1><span className='font-bold uppercase'>Street: </span>{e.street}</h1>
                                    <h1><span className='font-bold uppercase'>City: </span>{e.city}</h1>
                                    <h1><span className='font-bold uppercase'>Pincode: </span>{e.pincode}</h1>
                                </div>
                                <div className='flex justify-between items-end w-full'>
                                    <h1 className='text-xs underline'>Default</h1>
                                    <div className='flex'>
                                        {/* <FaEdit className="text-2xl mx-2"  /> */}
                                        {/* <AiFillDelete className="text-2xl" onClick={() => handleDelete(e._id)} /> */}
                                    </div>
                                </div>
                            </div>)
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
                        <button className='w-full font-bold bg-green-50 p-3 rounded-lg text-green-500 hover:border-green-500 border border-white' onClick={handleSubmit}>
                            Place Order
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddressStep