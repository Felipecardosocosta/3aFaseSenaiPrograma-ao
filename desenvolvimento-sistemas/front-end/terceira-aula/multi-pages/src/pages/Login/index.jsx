import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        login(email)

        navigate('/')

    }

    return (
        <div className='flex items-center justify-center min-h-screen'>

            <form
                onSubmit={handleSubmit}
                className='p-6 border rounded shadow-md flex flex-col gap-5'
            >
                <h2 className='text-xl font-bold'>Login</h2>
                <label>Email</label>

                <input
                    type="email"
                    placeholder='Digite seu email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    className='w-full px-3 py-2 border rounded'
                />
                <button
                    type='submit'
                    className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'

                >Entrar
                </button>

            </form>

        </div>
    )
}

export default Login