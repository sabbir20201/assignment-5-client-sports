import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TFacility } from "@/pages/facilityCart/facilityType";
import { useGetSportsQuery, useUpdateFacilityMutation } from "@/redux/api/baseApi";
import { useForm, SubmitHandler } from "react-hook-form"
import { toast, Toaster } from 'react-hot-toast'

const UpdateFacility = ({id, item}: {id: string, item: TFacility}) => {
    const { register, handleSubmit, reset } = useForm<TFacility>()
    const [UpdateFacility] = useUpdateFacilityMutation()
    const {refetch} = useGetSportsQuery('')
    const onSubmit: SubmitHandler<TFacility> = async (data) => {
        console.log(data);
        
        try {
                const facilityData = {
                    image: data.image,
                    name: data.name,
                    description: data.description,
                    pricePerHour: Number(data.pricePerHour),
                    location: data.location,
                }
                console.log('price per hour is ',typeof(data.pricePerHour));
                
                const result = await UpdateFacility({id,updatedData: facilityData})
                console.log('result =>',result.data.message);
                
                if (result.data.data._id) {
                    toast.success(result.data?.message, { duration: 4000 })
                    await refetch();
                    await reset();
                   
                    console.log("result after update", result);
                }

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <Toaster position="top-right"></Toaster>
                 <form onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="image">image</Label>
                <Input className="my-1 max-w-96 " defaultValue={item.image} type="text" {...register("image")} />

                <Label htmlFor="">name</Label>
                <Input className="my-1 max-w-96"  defaultValue={item.name}  type="name" {...register("name")} />

                <Label htmlFor="price">description</Label>
                <Input className="my-1 max-w-96 " defaultValue={item.description} type="description" {...register("description")} />

                <Label htmlFor="pricePerHour">pricePerHour</Label>
                <Input className="my-1 max-w-96"  defaultValue={item.pricePerHour}  type="number" {...register("pricePerHour")} />


                <Label htmlFor="location">location</Label>
                <Textarea className="my-1 max-w-96"  defaultValue={item.location}  {...register("location")} />

                <Button className="w-full my-1 max-w-96" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default UpdateFacility;