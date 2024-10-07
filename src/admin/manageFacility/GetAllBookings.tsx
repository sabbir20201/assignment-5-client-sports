import { useGetBookingFacilityQuery } from "@/redux/api/baseApi";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TFacility } from "@/pages/facilityCart/facilityType";

export type TBooking = {
    _id: string;
    facility: TFacility;
    date: string;
    startTime: string;
    endTime: string;
    user: string;
    payableAmount: number;
    isBooked: 'confirmed'| 'canceled';
}


const GetAllBookings = () => {
    const { data, isLoading } = useGetBookingFacilityQuery({})

    if (isLoading) {
        return <p>loading...</p>
    }
    console.log('all bookings', data?.data);
    console.log('all bookings', data?.data?.facility);


    return (
        <div>
            <h1>All bookings facility</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>image  name</th>
                            <th>startTime</th>
                            <th>endTime</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.data?.map((item:TBooking) => (
                                <tr key={item._id}>
                                    <td key={item._id}>
                                        <div className="lg:flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-10 w-10">
                                                    <img
                                                        src={item?.facility.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                            
                                                <div className="text-sm font-bold">{item?.facility?.name} BD</div>
                                                <div className="text-sm ">Payable amount: {item.payableAmount
                                                } BD</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item?.startTime}
                                    </td>
                                    <td>
                                        {item?.endTime}
                                    </td>
                                    <td>
                                        {item?.isBooked}
                                    </td>
                                  
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GetAllBookings;