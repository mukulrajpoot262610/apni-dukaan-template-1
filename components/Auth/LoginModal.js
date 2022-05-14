import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { Login, Register } from '../../services/api';
import { setAuth } from '../../redux/authReducer'

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

const LoginModal = ({ setIsOpen, modalIsOpen }) => {

    const dispatch = useDispatch()
    const { details } = useSelector(state => state.details)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()

    const [isLogin, setIsLogin] = useState(true)

    function closeModal() {
        setIsOpen(false);
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        const payload = { name, password, email, storeLink: details.storeLink }
        try {
            const { data } = await Register(payload)
            toast.success('Registration Successfull 🎉')
            dispatch(setAuth(data))
            setIsLogin(true)
        } catch (err) {
            toast.error(err.response.data.msg)
            console.log(err)
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const payload = { password, email, storeLink: details.storeLink }
        try {
            const { data } = await Login(payload)
            toast.success('Login Successfull 🎉')
            dispatch(setAuth(data))
            closeModal()
        } catch (err) {
            toast.error(err.response.data.msg)
            console.log(err)
        }
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            {
                isLogin ? <h1 className='text-3xl font-bold'>Login</h1> : <h1 className='text-3xl font-bold'>Create an account</h1>
            }

            <form className='my-6 w-96 p-2'>
                {
                    isLogin ? "" : <div>
                        <label>Name</label>
                        <input type='text' required placeholder='Name' onChange={(e) => setName(e.target.value)} className='w-full mt-1 border-2 outline-none rounded-lg p-2 px-4' />
                    </div>
                }
                <div className='mt-3'>
                    <label>Email</label>
                    <input type='email' required placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='w-full mt-1 border-2 outline-none rounded-lg p-2 px-4' />
                </div>
                <div className='mt-3'>
                    <label>Password</label>
                    <input type='password' required placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='w-full mt-1 border-2 outline-none rounded-lg p-2 px-4' />
                </div>
                {
                    isLogin ? <div className='mt-6'>
                        <button onClick={handleLogin} className='w-full font-bold bg-green-50 p-3 rounded-lg text-green-500 hover:border-green-500 border border-white'>
                            Log In
                        </button>
                    </div> : <div className='mt-6'>
                        <button onClick={handleRegister} className='w-full font-bold bg-green-50 p-3 rounded-lg text-green-500 hover:border-green-500 border border-white'>
                            Sign Up
                        </button>
                    </div>
                }

                {
                    isLogin ? <div className='mt-2'>
                        <p className='text-sm'>Don't have a Account? <span className='hover:underline cursor-pointer' onClick={(e) => setIsLogin(false)}>Sign Up</span></p>
                    </div> : <div className='mt-2'>
                        <p className='text-sm'>Already have a Account? <span className='hover:underline cursor-pointer' onClick={(e) => setIsLogin(true)}>Login</span></p>
                    </div>
                }

            </form>
        </Modal>
    )
}

export default LoginModal