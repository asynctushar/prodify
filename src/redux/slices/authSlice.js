import { createSlice } from '@reduxjs/toolkit';
import { login } from '../actions/authAction';

const initialState = {
    token: null,
    isLoading: true,
    error: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isLoading = true;
            state.token = null;
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload;
            state.isLoading = false;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.token = null;
            state.error = action.payload;
            state.isLoading = false;
        });

    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;