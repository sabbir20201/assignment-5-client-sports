
import Hero from "@/components/header/Hero";
import Gallery from "../gallery/Gallery";
import AllFacility from "../facilityCart/AllFacility";




const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Hero></Hero>
            <AllFacility></AllFacility>
            <Gallery></Gallery>


        </div>
    );
};

export default Home;