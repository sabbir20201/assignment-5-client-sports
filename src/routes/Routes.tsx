import AdminHome from "@/admin/adminHome/AdminHome";
import CreateFacility from "@/admin/createFacility.tsx/CreateFacility";
import GetFacility from "@/admin/getFacility/GetFacility";
import AdminLayout from "@/mainLayout/AdminLayout";
import MainLayout from "@/mainLayout/MainLayout";
import Cart from "@/pages/cart/Cart";
import ErrorPage from "@/pages/errorPage/ErrorPage";
import CheckFacility from "@/pages/facilityCart/CheckFacility";
import FacilityDetails from "@/pages/facilityCart/FacilityDetails";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/cart",
                element:<Cart></Cart>
            },
            {
                path: "/book/:id",
                element:<CheckFacility></CheckFacility>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/facility-details/:id",
                element:<FacilityDetails></FacilityDetails>
            }
        ]
    },
    {
        path: "/admin",
        element:  <AdminLayout></AdminLayout>,
        children: [
            {
               index: true,
                element:<AdminHome></AdminHome>,
            },
            {
                path: "create-facility",
                element:<CreateFacility></CreateFacility>,
            },
            {
                path: "get-facility",
                element: <GetFacility></GetFacility>,
            }
        ]
    }
])

export default router