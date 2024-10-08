
import { TSingleFacility } from "./MyBookings";


const MyBookingCart = ({ item }: { item: TSingleFacility }) => {
    const { startTime, endTime, data, payableAmount, description } = item



    return (
        <div>
            <div>
                <h1>startTime: {startTime}</h1>
                <h1> endTime: {endTime}</h1>
                <h1> data: {data}</h1>
                <h1> payableAmount: {payableAmount}</h1>
                <h1> description : {description}</h1>
            </div>

        </div>
    );
};

export default MyBookingCart;