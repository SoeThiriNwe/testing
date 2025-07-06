import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Teacher } from "../../../generated/prisma";
import { CreateTechal } from "@/type/type";

interface InitialStateTestSlice {
    value : Teacher[]
}

const initialStateValue : InitialStateTestSlice = {
    value : []
}

export const sendData = createAsyncThunk("teacherSlice/sendData", async (techalData : CreateTechal , thunkAPI)=>{
       try{
            const response = await fetch("/api/teacher",{
            method : "POST",
            headers :  {
                "content-type" : "application/json"
            },
            body : JSON.stringify({name : techalData.name , subject : techalData.subject , position : techalData.position, address : techalData.address, age : techalData.age})
        })

        const accetptedTechalData = await response.json();
        thunkAPI.dispatch(addNewTechalToStore(accetptedTechalData));

       }catch(err){

       }

    })

export const teacherSlice = createSlice({
    name : "teacherSlice",
    initialState : initialStateValue,
    reducers : {
        addNewTechalToStore : (original, action)=>{
            original.value =[...original.value,action.payload]
        }
    }
})
export const { addNewTechalToStore } = teacherSlice.actions;
// export const { addNewTechalToStore } = teacherSlice.actions;
export default teacherSlice.reducer;
