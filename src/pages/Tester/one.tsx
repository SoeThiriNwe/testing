import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addNewTechalToStore, sendData } from "@/store/slices/teacherSlice";
import { CreateTechal } from "@/type/type";
import { useState } from "react";

const one =  ()=>{
    const [techalData, setData] = useState<CreateTechal>({name: "",position : "", subject : "", address : "", age : 0});
    const selector = useAppSelector((store)=>{return store.teacher.value});
    const dispatch = useAppDispatch();

    const handlerSendData = ()=>{
        dispatch(sendData(techalData))
    };
    
    return (
        <div>
            <label htmlFor="techalName">Teacher Name : </label>
            <input type="text" id="techalName" onChange={(e)=>{setData({...techalData,name : e.target.value})}}/>
            <br /><br />

            <label htmlFor="techalSubject">Techal's Subject : </label>
            <input type="text" id="techalSubject" onChange={(e)=>{setData({...techalData, subject : e.target.value})}} />
            <br /><br />

            <label htmlFor="techalPosition">Teacher Position : </label>
            <select name="techalPosition" onChange={(e)=>{setData({...techalData,position : e.target.value})}}>
                <option value="Professor">Professor</option>
                <option value="Associate Professor">Associate Professor</option>
                <option value="Assitant Professor">Assistant Professor</option>
                <option value="Lecturer">Lecturer</option>
            </select>
            <br /><br />

            <label htmlFor="TechalAddress">Teacher Address : </label>
            <input type="text" id="TechalAddress" onChange={(e)=>{setData({...techalData,address : e.target.value})}} />
            <br /><br />

            <label htmlFor="techalAge">Teacher age : </label>
            <input type="number" id="techalAge" onChange={(e)=>{setData({...techalData,age : Number(e.target.value)})}}/>
            <br /><br />

            <button onClick={handlerSendData}>Send</button>
            <p>{selector.length ? selector[0].name + selector[0].address+selector[0].subject + selector[0].position+selector[0].age:"no"}</p>
            <p>Hello</p>
        </div>
    )
}

export default one;
