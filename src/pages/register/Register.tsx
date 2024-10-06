/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from "@/components/ui/button";
import { useSignUpMutation } from "@/redux/api/auth/authApi";
import { setAddress, setEmail, setName, setPassword, setPhone, setRole } from "@/redux/feature/registerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";



// import { useForm, SubmitHandler } from "react-hook-form"
import { Toaster } from 'react-hot-toast'


// interface IFormInput {
//     // image: string;
//     name: string;
//     email: string;
//     password: string;
//     phone: number;
//     address: string;
//     // category: string;
// }

const Register = () => {
    const dispatch = useAppDispatch();
    const { name, email, password, role, address, phone } = useAppSelector((store) => store.register);

    const [signUp] = useSignUpMutation()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('input data', { name, email, password, role, phone, address });
        const user = await signUp({ name, email, password, role, phone, address })
        console.log('result after create', user);

    }

    //     const { register, handleSubmit } = useForm<IFormInput>()
    //     const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // console.log(data);
    //     }
    return (
        <div className="gap-5 py-6 h-svh m-auto justify-center items-center">

            <div><Toaster />   </div>

            <div className="max-w-3xl mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 border ">

                {/* <form onSubmit={handleSubmit(onSubmit)}  className="p-5">

            <span className="text-2xl font-bold ">  Create An Account</span>

                <label className="block pb-2">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Name
                    </span>
                    <input type="text"  {...register("name")} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  />
                </label>
                <label className="block pb-2">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Email
                    </span>
                    <input type="email"  {...register("email")} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  />
                </label>
                <label className="block pb-2">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Password
                    </span>
                    <input type="password"  {...register("password")} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  />
                </label>
                <label className="block pb-2">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Phone
                    </span>
                    <input type="phone" {...register("phone")}  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  />
                </label>
                <label className="block pb-2">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Address
                    </span>
                    <input type="address"  {...register("address")}className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                </label>
          

                <Button className="w-full my-1 max-w-96 bg-sky-600" type="submit">Submit</Button>
            </form> */}
                <form onSubmit={handleSubmit} className="p-5">

                    <span className="text-2xl font-bold ">  Create An Account</span>

                    <label className="block pb-2">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Name
                        </span>
                        <input type="name"  name="name" value={name} onChange={(e) => dispatch(setName(e.target.value))} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    </label>
                    <label className="block pb-2">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Email
                        </span>
                        <input type="email" name="email" required={true} value={email} onChange={(e) => dispatch(setEmail(e.target.value))} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    </label>
                    <label className="block pb-2">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Password
                        </span>
                        <input type="password" value={password} onChange={(e) => dispatch(setPassword(e.target.value))} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    </label>
                    <label className="block pb-2">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Phone
                        </span>
                        <input type="phone" name="phone" value={phone} onChange={(e) => dispatch(setPhone(e.target.value))} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    </label>
                    <label className="block pb-2">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            role
                        </span>
                        <input type="phone" name="role" value={role} onChange={(e) => dispatch(setRole(e.target.value))} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    </label>
                    <label className="block pb-2">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Address
                        </span>
                        <input type="address" name="address" value={address} onChange={(e) => dispatch(setAddress(e.target.value))} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    </label>


                    <Button className="w-full my-1 max-w-96 bg-sky-600" type="submit">Submit</Button>
                </form>
                <div className="border">
                    <img className="h-full object-cover object-center" src="https://cdn.pixabay.com/photo/2021/07/21/20/11/beach-volleyball-6483905_960_720.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Register;