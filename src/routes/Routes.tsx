import AdminHome from "@/admin/adminHome/AdminHome";
import CreateAminAccount from "@/admin/adminHome/CreateAminAccount";
import MyBookings from "@/admin/components/MyBookings";
import CreateFacility from "@/admin/manageFacility/CreateFacility";
import GetAllBookings from "@/admin/manageFacility/GetAllBookings";
import GetAllFacility from "@/admin/manageFacility/GetAllFacility";
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
                element: <GetAllFacility></GetAllFacility>,
            },
            {
                path: "get-all-bookings",
                element: <GetAllBookings></GetAllBookings>,
            },
            {
                path: "create-admin",
                element: <CreateAminAccount></CreateAminAccount>,
            },
            {
                path: "my-bookings",
                element: <MyBookings></MyBookings>,
            }
        ]
    }
])

export default router