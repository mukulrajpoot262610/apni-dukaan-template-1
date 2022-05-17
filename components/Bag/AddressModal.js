import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddAddress } from '../../services/api';
import { setAuth } from '../../redux/authReducer';
import toast from 'react-hot-toast';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#react-modals');


const AddressModal = ({ setIsOpen, modalIsOpen }) => {

    const dispatch = useDispatch()

    const { details } = useSelector(state => state.details)
    const { user } = useSelector(state => state.auth)
    const [street, setStreet] = useState()
    const [landmark, setLandmark] = useState()
    const [pincode, setPincode] = useState()
    const [city, setCity] = useState()


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!street || !landmark || !pincode || !city) {
            return toast.error('All Fields Are Required')
        }

        const payload = { street, landmark, pincode, city, storeLink: details.storeLink, email: user.email }

        try {
            const { data } = await AddAddress(payload)
            dispatch(setAuth(data))
            closeModal()
            toast.success('Added Successfully')
        } catch (err) {
            toast.error(err?.response?.data?.msg)
            console.log(err)
        }
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl italic font-bold uppercase tracking-tighter'>Add New Address</h1>
            </div>
            <form onSubmit={handleSubmit} className="my-6 w-96 max-w-xl">
                <div className="flex items-center flex-col w-full gap-3 mb-3">
                    <input type='text' className='w-full mt-1 border-2 outline-none rounded-lg p-2 px-4' onChange={(e) => setStreet(e.target.value)} placeholder="Enter Street Address Here..." />
                    <input type='text' onChange={(e) => setLandmark(e.target.value)} className='w-full mt-1 border-2 outline-none rounded-lg p-2 px-4' placeholder="Enter Nearest Landmark Here..." />
                </div>
                <div className="flex items-center flex-col w-full gap-3 mb-3">
                    <input type='text' className='w-full mt-1 border-2 outline-none rounded-lg p-2 px-4' onChange={(e) => setCity(e.target.value)} placeholder="Enter City Here..." />
                    <input type='number' className='w-full mt-1 border-2 outline-none rounded-lg p-2 px-4' onChange={(e) => setPincode(e.target.value)} placeholder="Enter Pincode Here..." maxLength={6} />
                </div>
                <div className='flex gap-4 justify-end'>
                    <button onClick={closeModal} className='w-full font-bold bg-gray-50 p-3 rounded-lg text-gray-500 hover:border-gray-500 border border-white'>Cancel</button>
                    <button type="submit" className='w-full font-bold bg-green-50 p-3 rounded-lg text-green-500 hover:border-green-500 border border-white'>Save</button>
                </div>
            </form>
        </Modal>
    )
}

export default AddressModal