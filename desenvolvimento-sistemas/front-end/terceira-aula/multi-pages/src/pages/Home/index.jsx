import { useNavigate } from "react-router-dom"
import Footer from "../../layouts/Footer"
import Header from "../../layouts/Header"
import Login from "../Login"
import { useAuth } from "../../context/AuthContext"


const Home = () => {
  const navigate = useNavigate()

  const {user} = useAuth()

  return (
    <>
        <h1>Ola {user?.email}</h1>


    
    </>
  )
}

export default Home