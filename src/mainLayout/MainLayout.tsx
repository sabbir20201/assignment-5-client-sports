import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;