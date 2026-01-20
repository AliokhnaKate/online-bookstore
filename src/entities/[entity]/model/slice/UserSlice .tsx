import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter();

const UserSlice = createSlice({
    name: 'user',
    initialState: userAdapter.getInitialState({status: 'idle'}),
    reducers: {
        userAdded: userAdapter.addOne,
        userUpdated: userAdapter.updateOne,
        userReceived: userAdapter.setAll
    },
});

export const {userAdded, userUpdated, userReceived} = UserSlice.actions;
export default UserSlice.reducer;