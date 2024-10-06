
import Hero from "@/components/header/Hero";
import Gallery from "../gallery/Gallery";
import AllFacility from "../facilityCart/AllFacility";
import OurGoals from "../ourGoals/OurGoals";



const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Hero></Hero>
            <AllFacility></AllFacility>
            <Gallery></Gallery>
            <OurGoals></OurGoals>

        </div>
    );
};

export default Home;