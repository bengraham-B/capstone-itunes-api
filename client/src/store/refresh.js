import { createSlice } from "@reduxjs/toolkit";
export const refreshSlice = createSlice({
    name: "refresh",

    initialState: {
        refreshCount: 0
    },

    reducers: {
        refreshReducer: (state) =>{
            state.refreshCount = state.refreshCount + 1
            console.log("Page refrshed from Redux: " + state.refreshCount)
        }
    }
})

export const { refreshReducer } = refreshSlice.actions
export default refreshSlice.reducer