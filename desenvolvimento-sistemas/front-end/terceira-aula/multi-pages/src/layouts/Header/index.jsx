import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {

  const { logout, user } = useAuth()
  const navigate = useNavigate()

  const handleLogout =()=> {
    logout()
    navigate('/')

  }

  return (
    <header className='flex items-center justify-between p-4 bg-gray-200 ' >

      <nav className='space-x-4'>

        <NavLink
          to={'/'}
          end
          className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-800"}
        >Home
        </NavLink>

        <NavLink
          to={'/sobre'}
          end
          className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-800"}
        >
          Sobre
        </NavLink>
        <NavLink
          to={'/blog'}
          end
          className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-800"}
        >
          Blog
        </NavLink>

        <NavLink
          to={'/autores'}
          end
          className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-800"}
        >
          Autores
        </NavLink>


          </nav>

        <div>
          {user ? (
          <>
            <span className='mr-4' >Ola {user.email} </span>
            <button className='bg-red-500 text-white px-3 py-1 rounded' onClick={handleLogout} >Logout</button>
          </>) :

            <NavLink
              to={'/login'}
              end
              className={"bg-blue-600 text-white font-bold px-3 py-1 rounded hover:bg-blue-800"}

            >
              login


            </NavLink>
          }
        </div>





    </header>
  )
}

export default Header