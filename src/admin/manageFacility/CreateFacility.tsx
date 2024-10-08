import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TFacility } from "@/pages/facilityCart/facilityType";
import { useCreateFacilityMutation } from "@/redux/api/baseApi";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form"
import { toast, Toaster } from 'react-hot-toast'


const imag_HOSTING_KEY = "a9558b5d7cd6b8968b2f112eeb10ad96";
const imag_HOSTING_API = `https://api.imgbb.com/1/upload?key=${imag_HOSTING_KEY}`;
const CreateFacility = () => {
    const { register, handleSubmit, reset } = useForm<TFacility>()
    const [CreateProduct] = useCreateFacilityMutation()

    const onSubmit: SubmitHandler<TFacility> = async (data) => {

        try {
            const imageFile = { image: data.image[0] }
            console.log(imageFile)
            const res = await axios.post(imag_HOSTING_API, imageFile, {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            })

            if (res.data.success) {
                const facilityData = {
                    image: res?.data.data.display_url,
                    name: data.name,
                    description: data.description,
                    pricePerHour: data.pricePerHour,
                    location: data.location,
                }

                const result = await CreateProduct(facilityData)
                if (result?.data?.success) {
                    toast.success('facility created Successfully', { duration: 4000 })
                    await reset()
                 
                } else {
                    console.log('failed to create facility');

                }
                console.log("result after facility create", result);
            }

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
       <div><Toaster />   </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="image">image</Label>
                <Input className="my-1 max-w-96 " type="file" {...register("image")} />

                <Label htmlFor="">name</Label>
                <Input className="my-1 max-w-96 " type="name" {...register("name")} />

                <Label htmlFor="price">description</Label>
                <Input className="my-1 max-w-96 " type="description" {...register("description")} />

                <Label htmlFor="pricePerHour">pricePerHour</Label>
                <Input className="my-1 max-w-96 " type="pricePerHour" {...register("pricePerHour")} />

                <Label htmlFor="location">location</Label>
                <Textarea className="my-1 max-w-96" {...register("location")} />

                <Button className="w-full my-1 max-w-96" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default CreateFacility;