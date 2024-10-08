import AdminHome from "@/admin/adminHome/AdminHome";
import CreateAminAccount from "@/admin/adminHome/CreateAminAccount";
import MyBookings from "@/admin/components/MyBookings";
import CreateFacility from "@/admin/manageFacility/CreateFacility";
import GetAllBookings from "@/admin/manageFacility/GetAllBookings";
import GetAllFacility from "@/admin/manageFacility/GetAllFacility";
import AdminLayout from "@/mainLayout/AdminLayout";
import MainLayout from "@/mainLayout/MainLayout";
import ErrorPage from "@/pages/errorPage/ErrorPage";
import CheckFacility from "@/pages/facilityCart/CheckFacility";
import FacilityDetails from "@/pages/facilityCart/FacilityDetails";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import AboutUsPage from "@/pages/aboutUs/AboutUsPage";
import ContactUsPage from "@/pages/contactUs/ContactUsPage";
import AllFacility from "@/pages/facilityCart/AllFacility";

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
                path: "/allFacility",
                element:<AllFacility></AllFacility>
            },
            {
                path: "/check-availability/:id",
                element:(<ProtectedRoutes><CheckFacility></CheckFacility></ProtectedRoutes>)
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
            },
            {
                path: "about-us",
                element:<AboutUsPage></AboutUsPage>
            },
            {
                path: "contact-us",
                element:<ContactUsPage></ContactUsPage>
            }
        ]
    },
    {
        path: "/dashboard",
        element: (<ProtectedRoutes><AdminLayout></AdminLayout></ProtectedRoutes> ),
        children: [
            {
               index: true,
                element:<AdminHome></AdminHome>,
            },
            {
                path: "admin/create-facility",
                element:<CreateFacility></CreateFacility>,
            },
            {
                path: "admin/get-facility",
                element: <GetAllFacility></GetAllFacility>,
            },
            {
                path: "admin/get-all-bookings",
                element: <GetAllBookings></GetAllBookings>,
            },
            {
                path: "admin/create-admin",
                element: <CreateAminAccount></CreateAminAccount>,
            },
            {
                path: "user/my-bookings",
                element: <MyBookings></MyBookings>,
            }
        ]
    }
])

export default router