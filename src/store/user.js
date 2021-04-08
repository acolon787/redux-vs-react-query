import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../api";

export const fetchUserById = createAsyncThunk("users/fetchByIdStatus", async (userId, thunkAPI) => await getUser(userId));

const User = createSlice({
    name: "user",
    initialState: {
        user: {},
        posts: [],
    },
    extraReducers: {
        [fetchUserById.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
    },
});

export default User.reducer;
