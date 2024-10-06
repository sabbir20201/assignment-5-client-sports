import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
    _id: string;
    email: string;
    role: string;
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
        role: ''
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

