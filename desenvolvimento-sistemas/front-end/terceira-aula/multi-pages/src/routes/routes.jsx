import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Main from '../layouts/Main'
import Login from '../pages/Login'
import { Blog } from '../pages/Blog'


export const router = createBrowserRouter([

    // {path:'/', element: <Home/>},
    // {path:'/sobre', element:<Sobre/>}

    {
        element: <Main />,
        children: [
            {path:'/',element:<Home/>},
            {path:'/sobre',element:<Sobre/>},
            {path:"/login",element:<Login/>},
            {path:"/blog",element:<Blog/>}
        ]
    }
])

