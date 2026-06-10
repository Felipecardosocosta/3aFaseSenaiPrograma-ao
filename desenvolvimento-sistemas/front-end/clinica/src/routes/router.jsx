import { createBrowserRouter } from "react-router"
import Home from "../pages/Home"
import Main from "../layouts/Main"
import Login from "../pages/Login"
import DashBoard from "../pages/DashBoard"
import PrivateRouter from "../components/PrivateRoute"
import DashboardLayouts from "../layouts/DashboardLayouts"
import MedicalRecordList from "../components/MedicalRecordList"



const router = createBrowserRouter([

    {
        path: '/',
        element: <Login />

    },
    {
        element:(
            <PrivateRouter>
                <DashboardLayouts />
            </PrivateRouter>
        ),children:[
            {path:"/dashboard",element:<DashBoard/>},
            { path: "/prontuarios", element: <MedicalRecordList/> },
        ]
    },
])



export default router