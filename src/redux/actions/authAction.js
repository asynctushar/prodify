import { loginApi } from "@/services/authService";
import { createAsyncThunk } from "@reduxjs/toolkit";

// login action
export const login = createAsyncThunk(
    "auth/login",
    async (payload, thunkApi) => {
        try {
            const data = await loginApi(payload);

            return data.token;
        } catch (err) {
            const errorData = err?.errors || err?.message || "Something went wrong";
            return thunkApi.rejectWithValue(errorData);
        }
    }
);