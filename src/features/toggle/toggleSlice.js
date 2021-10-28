import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: true
}

const toggleSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        toggler: (state) => {
            state.value = !state.value
        }
    }
})

export const { toggler } = toggleSlice.actions;

export const togglerState = (state) => state.toggle.value;

export default toggleSlice.reducer