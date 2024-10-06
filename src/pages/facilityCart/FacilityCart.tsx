
import { TFacility } from "./facilityType";
import { useNavigate } from "react-router-dom";


const FacilityCart = ({facility}:{facility: TFacility}) => {

    const navigate  = useNavigate()

    return (
        <div>
                 <div  onClick={() => navigate(`/facility-details/${facility._id}`)} className=" cursor-pointer hover:shadow-lg transition transform duration-300 ease-in-out">
            <div className="card bg-base-100 shadow-sm border rounded hover:shadow-2xl hover:scale-105 transition-transform transform duration-30 ease-out">
                <figure className=" h-[250px]">
                    <img
                        src={facility?.image}
                        alt="Shoes"
                        className="rounded-sm w-full h-full" />
                </figure>
                <div className="card-body items-center text-center p-2">
                    <h2 className="card-title">{facility?.name}</h2>
                  
                    <p className="font-semibold">$ {facility.pricePerHour} | <span className="text-[#1961e4]">discount : 10%   </span></p>
                    
                    <div className="card-actions">
                   
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FacilityCart;