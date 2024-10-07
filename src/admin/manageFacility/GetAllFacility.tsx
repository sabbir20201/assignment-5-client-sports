import { useDeleteFacilityMutation, useGetSportsQuery } from "@/redux/api/baseApi";
import { Button } from "@/components/ui/button"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { TFacility } from "@/pages/facilityCart/facilityType";
import toast, { Toaster } from "react-hot-toast";
import UpdateFacility from "./UpdateFacility";





const GetAllFacility = () => {
    const [deleteFacility] = useDeleteFacilityMutation({})

    const { data, isLoading, refetch } = useGetSportsQuery('')
    console.log(data);
    if (isLoading) {
        return <p>loading...</p>
    }
    const handleDelete = async (_id: string) => {
        try {
            const result = await deleteFacility(_id).unwrap()
            if (result.data._id) {
                toast.success('Facility deleted Successfully', { duration: 4000 })
                refetch()
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Toaster position="top-right"></Toaster>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>image</th>
                                <th></th>
                                <th className='lg:space-x-16'><span>update</span> <span className=''>delete</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.data?.map((item: TFacility) => (
                                    <tr key={item._id}>
                                        <td key={item._id}>
                                            <div className="lg:flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-10 w-10">
                                                        <img
                                                            src={item?.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{item?.name}</div>
                                                    <div className="text-sm">Price per hour: {item.pricePerHour} BD</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>

                                        </td>
                                        <div className='lg:flex'>
                                            <div>
                                                <th>
                                                    <AlertDialog>
                                                        <AlertDialogTrigger asChild>
                                                            {/* <Button >Show Dialog</Button> */}
                                                            <Button>Update</Button>

                                                        </AlertDialogTrigger>
                                                        <AlertDialogContent>
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle>Update your product details</AlertDialogTitle>
                                                                <AlertDialogDescription className=" justify-center">
                                                                    <UpdateFacility id={item._id} item={item}></UpdateFacility>
                                                                </AlertDialogDescription>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                {/* <AlertDialogAction >
                                </AlertDialogAction>  */}
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>

                                                </th>
                                            </div>
                                            <div>
                                                <th>
                                                    <AlertDialog>
                                                        <AlertDialogTrigger asChild>
                                                            {/* <Button >Show Dialog</Button> */}
                                                            <Button className="bg-red-800" variant="outline" >Delete</Button>

                                                        </AlertDialogTrigger>
                                                        <AlertDialogContent>
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle>Are you sure to delete this Product?</AlertDialogTitle>
                                                                <AlertDialogDescription>

                                                                </AlertDialogDescription>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                <AlertDialogAction className="bg-red-800" onClick={() => handleDelete(item._id)}>Delete</AlertDialogAction>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                </th>
                                            </div>
                                        </div>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default GetAllFacility;