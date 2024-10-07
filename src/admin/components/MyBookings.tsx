import { useDeleteBookingMutation, useGetSingleUserBookingsQuery } from "@/redux/api/baseApi";
import MyBookingCart from "./MyBookingCart";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
// import MyBookingCart from "./MyBookingCart";

const MyBookings = () => {
    const navigate = useNavigate()
    const {data, error,isLoading, refetch} = useGetSingleUserBookingsQuery('');
    const [deleteBooking] = useDeleteBookingMutation()
    if(isLoading){
        return <p>loading...</p>
    }
    if(error){
        return <p>{error.message || 'no booking found'}</p>
    }
const handleDeleteBooking = async(_id)=>{
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
            <h1>my booking list</h1>
            <div>
                {
                    data?.data.length > 0 ? (
                        <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 grid-cols-1">
                            {
                                data?.data?.map(item => {
                                    const {startTime, endTime, data, payableAmount, isBooked
,                                        description} = item
                                    const {name} = item.facility
                                    return  <div className=" cursor-pointer hover:shadow-sm transition transform duration-300 ease-in-out">
                                    <div className="card bg-base-100 shadow-sm border rounded transform duration-30 ease-out">
                                        {/* <figure className=" h-[250px]">
                                            <img
                                                src={item?.image}
                                                alt="Shoes"
                                                className="rounded-sm w-full h-full" />
                                        </figure> */}
                                        <div className="card-body items-center text-center p-2">
                                        <h2 className="card-title">{name}</h2>
                                        <h2 className="card-title">{isBooked}</h2>
                                          <p>{data}</p>
                                          <p>{startTime}</p>
                                          <p>{endTime}</p>
                                          <p>{payableAmount}</p>
                                          <p>{description}</p>
                                          <h2 className="">{item?.description ? item.description.split(' ').slice(0,7).join(' ') + '...': ''}</h2>

                                            
                                            <div className="card-actions">
                                           <Button className="text-sm w-full " onClick={()=> navigate('/')}>View details</Button>
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
            {/* <h1> { data?.data?.map((item)=> <MyBookingCart key={item._id} item={item}></MyBookingCart>)}</h1> */}
     
        </div>
    );
};

export default MyBookings;



// const MyBookings = () => {

//     const { data, error, isLoading } = useGetSingleUserBookingsQuery();

//     if (isLoading) {
//         return <p>Loading...</p>;
//     }

    
//     if (error) {
//         return <p>Error fetching bookings</p>;
//     }

//     // Render the bookings
//     return (
//         <div>
//             <h1>My Booking List</h1>
//             {data?.data?.length > 0 ? (
//                 <div>
//                     {data?.data?.map((item) => (
//                         <MyBookingCart key={item._id} item={item} />
//                     ))}
//                 </div>
//             ) : (
//                 <p>No bookings found.</p>
//             )}
//         </div>
//     );
// };

// export default MyBookings;
