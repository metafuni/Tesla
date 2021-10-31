import { createSlice } from '@reduxjs/toolkit'
import cars from './carInfo.json'
import menu from './menuInfo.json'

const initialState = {
    cars,
    menu
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars
export const selectMenu = state => state.car.menu

export default carSlice.reducer