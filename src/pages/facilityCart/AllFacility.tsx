import { useGetSportsQuery } from "@/redux/api/baseApi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import FacilityCart from "./FacilityCart";
import { TFacility } from "./facilityType";

const AllFacility = () => {
    const { data, isLoading } = useGetSportsQuery({})

    console.log("all facilityyyy",data);
    if (isLoading) {
        return (
            <p><AiOutlineLoading3Quarters /></p>
        )
    }
    const facility = data?.data || [];
    console.log(facility.length);
    
    return (
        <div className="py-10">
            <h1 className="text-4xl font-bold text-center text-[#1961e4] py-3"> All facility</h1>
            <p className="text-base text-slate-600 text-center pb-5 px-6"> we provide top-notch football facilities designed to cater to players of all levels. Whether you're a professional athlete or just playing for fun, our well-maintained pitches offer the perfect surface for a great game</p>
            <div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:mx-0 ">
                    {
                        facility?.map((facility: TFacility) => <FacilityCart key={facility?._id} facility={facility} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFacility;