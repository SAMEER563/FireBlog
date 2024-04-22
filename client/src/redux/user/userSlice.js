import { createSlice } from '@reduxjs/toolkit';
import { deleteUser } from '../../../../api/controllers/user.controller';

const initialState = {
    currentUser: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
         signInStart: (state) => {
             state.loading = true;
             state.error = null;
         },
            signInSuccess: (state, action) => {
                state.loading = false;
                state.currentUser = action.payload;
                state.error = null;
            },
            signInFailure: (state, action) => {
                state.loading = false;
                state.error = action.payload;
            },
            updateStart: (state) => {
                state.loading = true;
                state.error = null;
            },
            updateSuccess: (state, action) => {
                state.loading = false;
                state.currentUser = action.payload;
                state.error = null;
            },
            updateFailure: (state, action) => {
                state.loading = false;
                state.error = action.payload;
            },
            deleteUserStart: (state) => {
                state.loading = true;
                state.error = null;
            },
            deleteUserSuccess: (state) => {
                state.loading = false;
                state.currentUser = null;
                state.error = null;
            },
            deleteUserFailure: (state, action) => {
                state.loading = false;
                state.error = action.payload;
            },


    },
});

export const { signInStart, signInSuccess, signInFailure, updateStart, updateSuccess, updateFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure } = userSlice.actions;

export default userSlice.reducer;