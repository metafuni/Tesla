import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false
}

const toggleChatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        chatter: (state) => {
            state.value = !state.value
        }
    }
})

export const { chatter } = toggleChatSlice.actions;

export const chatterState = (state) => state.chat.value;

export default toggleChatSlice.reducer