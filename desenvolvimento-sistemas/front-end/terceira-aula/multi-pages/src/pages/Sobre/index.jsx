import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { useAuth } from '../../context/AuthContext'

const Sobre = () => {
  const { user } = useAuth()
  return (
    <>
    <div >
        <h2>Ola {user?.email}</h2>

    </div>
    
    </>
  )
}

export default Sobre