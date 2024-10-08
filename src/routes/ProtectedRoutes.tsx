import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({children}: {children: ReactNode}) => {
const token = useAppSelector((store) => store.user.token)

if(!token){
    return <Navigate to="/login" replace={true} />
}
return children
};

export default ProtectedRoutes;