import { createAsyncThunk } from "@reduxjs/toolkit";

// login action
export const login = createAsyncThunk(
    "auth/login",
    async (payload, thunkApi) => {
        try {
            // api call

            // return jwt token
        } catch (err) {
            //   reject 
            return thunkApi.rejectWithValue(err.message);
        }
    }
);