import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_CALL } from "./config";

const chatSlice = createSlice({
    name : "chat",
    initialState: {
        message : [],
    },
    reducers:{
        addMessage(state, action){
            state.message.splice(LIVE_CHAT_CALL,1);
            state.message.unshift(action.payload);
        }
    }
})

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;