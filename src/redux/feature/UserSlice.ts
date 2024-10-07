import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
    _id: string;
    email: string;
    role: string;
    name: string;
    address: string;
    phone: string;
}
type UserAndToken = {
    token: string;
    user: User;

}
const initialState : UserAndToken= {
    token: '',
    user: {
        _id: '',
        email: '',
        role: '',
        phone: '',
        name: '',
        address: '',
    }
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        setUser: (state, action) => {
            state.user ={ ...action.payload}
        },
    }
})

export const {setToken, setUser} =userSlice.actions
export default userSlice.reducer;

