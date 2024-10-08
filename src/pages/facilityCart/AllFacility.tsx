import { useGetSportsQuery } from "@/redux/api/baseApi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import FacilityCart from "./FacilityCart";
import { TFacility } from "./facilityType";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const AllFacility = () => {
    const { data, isLoading } = useGetSportsQuery({})
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState("");
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(Infinity)
    const location = useLocation()
    if (isLoading) {
        return (
            <p><AiOutlineLoading3Quarters /></p>
        )
    }
    const facility = data?.data || [];
    console.log(facility.length);
    const filteredFacility = facility.filter((facility: TFacility)=>{
        const matchedSearch = facility.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchedPrice = facility.pricePerHour >= minPrice && facility.pricePerHour <= maxPrice;
        return matchedSearch && matchedPrice && !facility.isDeleted;
    })
    
    return (
        <div className="py-10">
            <h1 className="text-4xl font-bold text-center py-3"> All <span className="text-[#1961e4]">Facility</span> </h1>
            <p className="text-base text-slate-600 text-center px-6"> we provide top-notch football facilities designed to cater to players of all levels. Whether you're a professional athlete or just playing for fun, our well-maintained pitches offer the perfect surface for a great game</p>
          {
            location.pathname !== "/" && ( <div className="flex justify-around gap-5 p-5">
              
                    <div>
                    <p>facility name</p>
                    <input className="p-2 bg-slate-400 rounded-sm" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} placeholder="type here facility name" type="text" />

                    </div>
          <div className="flex-col">
            <div>
                <p>maxPrice</p>
            <input  className="p-2 bg-slate-400 rounded-sm text-white" value={minPrice === 0 ? "" : minPrice} onChange={(e)=> setMinPrice(Number(e.target.value))} placeholder="type here minimum price" type="text" />
            </div>
            <div>
            <p>minPrice</p>
            <input  className="p-2 bg-slate-400 rounded-sm text-white" value={maxPrice === Infinity ? "" : maxPrice} onChange={(e)=> setMaxPrice(Number(e.target.value))} placeholder="type here maximum name" type="text" />
            </div>
          </div>
               
              </div>)
          }
         
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden gap-5 lg:mx-0 ">
                    {
                        filteredFacility?.slice(0,4).map((facility: TFacility) => <FacilityCart key={facility?._id} facility={facility} />)
                    }
                </div>
                <Button onClick={()=> navigate("/allFacility")}>show more</Button>
            </div>
        </div>
    );
};

export default AllFacility;
