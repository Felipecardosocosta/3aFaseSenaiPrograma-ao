import {createBrowserRouter } from "react-router"
import Home from "../pages/Home"
import Main from "../layouts/Main"
import Login from "../pages/Login"
import DashBoard from "../pages/DashBoard"



const router = createBrowserRouter([
    // { 
    //     element:<Main/>, 
        
    //     children:[
    //         {path:'/', element:<Home/>},
            
    //     ]
        
    // },
    {path:'/', element:<Login/>},
    {path:'/dashboard', element:<DashBoard/>},
])



export default router