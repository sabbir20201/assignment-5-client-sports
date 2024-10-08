/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import moment from "moment";
import { useBookingFacilityMutation, useCheckAvailabilityQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addBooking, TBookingTimeSlot } from "@/redux/feature/BookingPayloadSlice";


type params = {
    id: string
}
const CheckFacility = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [fetchData, setFetchData] = useState(false);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<TBookingTimeSlot | null>(null);
    const { _id,date, startTime, endTime } = useAppSelector((store) => store.booking)

    const dispatch = useAppDispatch()
    const { id: facilityId } = useParams<params>()
    const [bookingFacility] = useBookingFacilityMutation()

    const formateDate = selectedDate ? moment(selectedDate).format('YYYY-MM-DD') : '';

    const { data, isLoading } = useCheckAvailabilityQuery(formateDate, {
        skip: !fetchData || (!selectedDate && formateDate === ''),
    });
   
    
    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value);
    }

    const handleCheckAvailability = () => {
        if (!selectedDate) {
            setSelectedDate(moment().format('YYYY-MM-DD'))
        }
        setFetchData(true)
    }

    const handleTimeSlotClick = (slot: TBookingTimeSlot) => {
        if(!facilityId){
            console.log('facility id undefined');
            return
        }
        setSelectedTimeSlot(slot)
        dispatch(addBooking({
            _id: facilityId,
            date: formateDate,
            startTime: slot.startTime,
            endTime: slot.endTime,
        }))
    }

    const handlePay = async () => {
        const facilityPayload = {
            _id: _id,
            date: date,
            startTime: startTime,
            endTime: endTime,
        }
        const res = await bookingFacility(facilityPayload).unwrap()
        if(res.success){
            window.location.href = res?.data?.payment_url
        }
        console.log('result after booking', res)
        console.log('result after booking success', res.success)
    }

    return (
        <div className="pb-8">
            <h1 className="font-bold text-2xl text-center">Check Available Time slot</h1>
            <div className="justify-center items-center max-w-md mx-auto">
            <div className="mx-auto">
                <input type="date" className="p-3 mx-auto grid justify-start" value={selectedDate} onChange={handleDate} id="date" /> <br />
                <Button className="w-full" disabled={isLoading} onClick={handleCheckAvailability}>{isLoading ? 'Checking...' : 'Check Availability'}</Button>
            </div>
            <div className="">
                {isLoading ? (
                    <p>loading...</p>
                ) : (
                    <div className="mt-4">
                        {
                            data?.data?.map((slot: TBookingTimeSlot, index: number) => (
                                <div key={index}
                                    className="text-gray-700 border border-gray-300 rounded-lg p-2
                                     bg-gray-50 cursor-pointer hover:bg-indigo-100 mt-1"
                                    onClick={() => handleTimeSlotClick(slot)}
                                >
                                    {`${slot.startTime} - ${slot.endTime}`}
                                </div>
                            ))
                        }

                    </div>
                )}
            </div>

            <div className="mt-4">
                <label htmlFor="">start time</label>
                <input type="" readOnly className="text-gray-700 border
                 w-full border-gray-300 rounded-lg p-2 bg-gray-50 cursor-pointer
                  hover:bg-indigo-100 mt-1" value={selectedTimeSlot ? selectedTimeSlot.startTime : 'no selected startTime slot'} />
                <label htmlFor="">end time</label>
                <input type="" readOnly className="text-gray-700 border w-full
                 border-gray-300 rounded-lg p-2 bg-gray-50 cursor-pointer
                  hover:bg-indigo-100 mt-1" value={selectedTimeSlot ? selectedTimeSlot.endTime : 'no selected endTime slot'} />
                <Button className="w-full mt-3" onClick={() => handlePay()} disabled={!selectedTimeSlot}>
                    <p>Proceed to Pay</p>
                </Button>
            </div>
            </div>
       

        </div>
    );
};
export default CheckFacility;

