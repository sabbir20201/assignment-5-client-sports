import { useAppSelector } from "@/redux/hooks";


const GetFacility = () => {
    const userRole = useAppSelector((state)=> state.user?.user.role) 

    return (
        <div>
            {
                userRole ===  "admin"? "this is admin" : "" 
            }
       
        </div>
    );
};

export default GetFacility;