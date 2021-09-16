import { createSlice } from '@reduxjs/toolkit'
import cars from './carInfo.json'

const initialState = {
    cars
}

console.log(initialState)

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer