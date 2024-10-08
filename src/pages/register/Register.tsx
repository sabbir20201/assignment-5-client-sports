/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from "@/components/ui/button";
import { useSignUpMutation } from "@/redux/api/auth/authApi";
import { setAddress, setEmail, setName, setPassword, setPhone } from "@/redux/feature/registerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const Register = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const { name, email, password, address, phone } = useAppSelector((store) => store.register);

    const [signUp] = useSignUpMutation()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log('input data', { name, email, password, phone, address });
            const response = await signUp({ name, email, password, role: 'user', phone, address })
            console.log('result after create', response);
            if (response?.data?.data?._id) {
                await toast.success(response?.data?.message, { duration: 7000 })
                
                setTimeout(()=>{
                    navigate('/login')
                }, 3000)
            } else if (response?.error) {
                toast.error('something went wrong', { duration: 3000 })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div><Toaster position="top-right"
                reverseOrder={true}
            /></div>
            <div className="gap-5 py-6 m-auto justify-center items-center">
                <div className="max-w-3xl mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 border ">
                    <form onSubmit={handleSubmit} className="p-5">
                        <span className="text-2xl font-bold ">  Create An Account</span>

                        <label className="block pb-2">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Name
                            </span>
                            <input type="name" name="name" value={name} onChange={(e) => dispatch(setName(e.target.value))} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
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
                                Address
                            </span>
                            <input type="address" name="address" value={address} onChange={(e) => dispatch(setAddress(e.target.value))} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                        </label>
                        <Button className="w-full my-1 max-w-96 bg-sky-600" type="submit">Submit</Button>
                        <p>Already have an account? <span onClick={() => navigate('/login')} className="cursor-pointer text-sky-500 font-bold"> Login please</span></p>

                    </form>
                    <div className="border">
                        <img className="h-full object-cover object-center" src="https://media.istockphoto.com/id/1463013729/photo/online-registration-form-for-modish-form-filling.jpg?s=612x612&w=0&k=20&c=Fnx06haU4IHYLcRpy9Po_TBknvBqVjicGuUWkGu8e6Y=" alt="" />
                    </div>
                </div>

            </div>
        </div>
                                                                                                                             
    );
};

export default Register;