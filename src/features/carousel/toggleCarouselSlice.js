import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 1
}

const toggleCarouselSlice = createSlice({
    name: "carousel",
    initialState,
    reducers: {
        increase: (state) => {
            if (state.value === 4) {
                state.value = 1;
                return
            }
            state.value = state.value + 1;
        },
        decrease: (state) => {
            if (state.value === 1) {
                state.value = 4;
                return
            }
            state.value = state.value - 1;
        }
    }
})

export const { increase } = toggleCarouselSlice.actions;
export const { decrease } = toggleCarouselSlice.actions;

export const carouselState = (state) => state.carousel.value;

export default toggleCarouselSlice.reducer