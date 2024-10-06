import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type TBookingTimeSlot = {
    _id: string;
    date: string;
    startTime: string;
    endTime: string;
}
const initialState: TBookingTimeSlot = {
    _id:'',
    date: '',
    startTime: '',
    endTime: '',
}

const BookingPayloadSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        addBooking : (state, action: PayloadAction<{_id: string, date: string, startTime: string, endTime: string}>)=>{
            const {_id, date, startTime, endTime} = action.payload
            state._id = _id;
            state.date = date;
            state.startTime = startTime;
            state.endTime = endTime;
        },
    }
})
export const {addBooking} = BookingPayloadSlice.actions

export default BookingPayloadSlice.reducer