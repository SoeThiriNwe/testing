import { createSlice } from "@reduxjs/toolkit";
import { Test } from "../../../generated/prisma";

interface InitialStateTestSlice {
    value : Test[]
}

const initialStateValue : InitialStateTestSlice = {
    value : []
}
export const testSlice = createSlice({
    name : "testSlice",
    initialState : initialStateValue,
    reducers : {
       addNewStdToStore : (orgState, action)=>{
            orgState.value=[...orgState.value, action.payload]
        }
    }
})
export const { addNewStdToStore } = testSlice.actions;
export default testSlice.reducer;