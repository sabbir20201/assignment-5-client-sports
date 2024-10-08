import { Button } from "@/components/ui/button";
import { useGetSportsByIdQuery } from "@/redux/api/baseApi";
import { useNavigate, useParams } from "react-router-dom";


const FacilityDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useGetSportsByIdQuery(id);

    if (isLoading) {
        return <p>Loading</p>
    }
    
    const { data: singleFacility } = data
    const handleBook = () => {
        navigate(`/check-availability/${singleFacility._id}`)
    }
    return (
        <div>

            <div className="card lg:card-side bg-base-100 shadow-sm border rounded-sm">
                <figure className="px-3 py-3 max-w-lg md:w-full">
                    <img
                        src={singleFacility.image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Facility Details</h2>
                    <p>Title: {singleFacility.name}</p>
                    <p>PerHour price: {singleFacility.pricePerHour}</p>
                    <p>Description {singleFacility.description}</p>
                    <div className="card-actions">
                        <Button onClick={() => handleBook()} className="w-full bg-[#083214]">Book Now </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacilityDetails;