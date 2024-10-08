import { useDeleteBookingMutation, useGetSingleUserBookingsQuery } from "@/redux/api/baseApi";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export type TSingleFacility = {
 _id: string;   
 startTime: string;   
 endTime: string;   
 data: string;   
 payableAmount: number;   
 isBooked: string;   
 description: string;   
}
const MyBookings = () => {
    const navigate = useNavigate()
    const {data, error,isLoading, refetch} = useGetSingleUserBookingsQuery('');
    const [deleteBooking] = useDeleteBookingMutation()
    if(isLoading){
        return <p>loading...</p>
    }
    if(error){
        return <p>...</p>
    }

const handleDeleteBooking = async(_id: string)=>{
    console.log(_id);
    
    try {
        const result = await deleteBooking(_id).unwrap()
        if (result.data._id) {
            toast.success('booking deleted Successfully', { duration: 4000 })
            refetch()
        }
        console.log();
        
    } catch (error) {
        console.log(error);
    }
}
console.log(data);

    return (
        <div>
            <Toaster position="top-right"></Toaster>
            <h1 className="text-2xl font-bold py-3">my booking list</h1>
            <div>
                {
                    data?.data.length > 0 ? (
                        <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 grid-cols-1">
                            {
                                data?.data?.map((item:TSingleFacility) => {
                                    const {startTime, endTime, data, payableAmount, isBooked} = item
                                    // const {name} = item.facility 
                                    return  <div className=" cursor-pointer hover:shadow-sm transition transform duration-300 ease-in-out">
                                    <div className="card bg-base-100 shadow-sm border rounded transform duration-30 ease-out">
                                
                                        <div className="card-body items-center text-center p-2">
                                        {/* <h2 className="card-title">Name: {name}</h2> */}
                                        <h2 className="card-title">Status: {isBooked}</h2>
                                          <p>Date {data}</p>
                                          <p> startTime: {startTime}</p>
                                          <p>endTime :{endTime}</p>
                                          <p>payableAmount: {payableAmount}</p>
                                          <h2 className="">{item?.description ? item.description.split(' ').slice(0,7).join(' ') + '...': ''}</h2>
                                            <div className="card-actions">
                                           <Button className="text-sm w-full " onClick={()=> navigate('/my-booking-details')}>View details</Button>
                                           <Button className="text-sm w-full " onClick={()=> handleDeleteBooking(item._id)}>Cancel Booking</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                })
                            }
                        </div>
                    ) : (
                        <p>no data found</p>
                    )
                }
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
            {/* <h1> { data?.data?.map((item:TSingleFacility)=> <MyBookingCart key={item._id} item={item}></MyBookingCart>)}</h1> */}

            </div>
     
        </div>
    );
};

export default MyBookings;


