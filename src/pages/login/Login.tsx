
import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import { setEmail, setPassword } from "@/redux/feature/LoignSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";
import { Toaster } from 'react-hot-toast'
import { jwtDecode } from "jwt-decode";
import { setToken, setUser } from "@/redux/feature/UserSlice";

type TDecodedToken = {
    _id: string;
    email: string;
    role: string;
}

const Login = () => {
    const { email, password } = useAppSelector((store) => store.login)
    const dispatch = useAppDispatch()
    const [login, { data }] = useLoginMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const user = await login({ email, password })
        console.log('after login user');
        
        const token = user?.data.token;
        // const token = user?.token;
        console.log('token', token);
        
    
        if(token){
            dispatch(setToken(token))
            const decoded = jwtDecode<TDecodedToken>(user?.data.token);
            console.log('decode', decoded);
            
            dispatch(setUser({
                _id: decoded._id,
                email: decoded.email,
                role: decoded.role
            }))
        }

    }

    console.log('data =>',data?.data );


    return (
        <div className="gap-5 py-6 h-svh m-auto justify-center items-center">

            <div><Toaster />   </div>

            <div className="max-w-3xl mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 border ">

              
                <form onSubmit={handleSubmit} className="p-5">

                    <span className="text-2xl font-bold ">  Create An Account</span>

                    <label className="block pb-2">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Email
                        </span>
                        <input type="email"  name="email" required value={email} onChange={(e) => dispatch(setEmail(e.target.value))} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    </label>
                    <label className="block pb-2">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Password
                        </span>
                        <input type="password" required value={password} onChange={(e) => dispatch(setPassword(e.target.value))} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    </label>

                    <Button className="w-full my-1 max-w-96 bg-sky-600" type="submit">Login</Button>
                </form>
                <div className="border">
                    <img className="h-full object-cover object-center" src="https://cdn.pixabay.com/photo/2021/07/21/20/11/beach-volleyball-6483905_960_720.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Login;