import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toggle: false
}

console.log(initialState)

const toggleSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {}
})

export default toggleSlice.reducer