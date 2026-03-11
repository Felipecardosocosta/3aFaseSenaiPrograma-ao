import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Main from '../layouts/Main'


export const router = createBrowserRouter([

    // {path:'/', element: <Home/>},
    // {path:'/sobre', element:<Sobre/>}

    {
        element: <Main />,
        children: [
            {path:'/',element:<Home/>},
            {path:'/sobre',element:<Sobre/>}
        ]
    }
])

