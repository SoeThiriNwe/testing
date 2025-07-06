import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addNewStdToStore } from "@/store/slices/testslices";
import { CreateStd } from "@/type/type";
import Link from "next/link";
import { useState } from "react";

const test = ()=>{

    const [data, setData] = useState<CreateStd>({name:"",address:"",age:0,email:""});
    const [delID, setdelID] = useState<number>(0);

    const one  =  useAppSelector((store)=>{ return store.test.value});
    const dispatch = useAppDispatch();
    const sendData =  async ()=>{
        try{
            const response = await fetch ("/api/test",{
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({name : data.name , address : data.address, age : data.age, email : data.email})
            
        })
        const acceptedStd = await response.json();
        console.log(acceptedStd)
        dispatch(addNewStdToStore(acceptedStd));
        }catch(err){

        }
    }
    const deleteData = async ()=>{
        await fetch("/api/test",{
            method : "DELETE",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({id  : delID})
        })
    }
      const updateData = async ()=>{
        await fetch("/api/test",{
            method : "PUT",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({id  : 3, name : "su su" , address : "TGI"})
        })
    }

    return(
        <div>
            <input type="text" onChange={(e)=>{setData({ ...data , name : e.target.value })}} placeholder="name" />
            <input type="text" onChange={(e)=>{setData({...data, address : e.target.value})}} placeholder="address"/>
            <input type="text" onChange={(e)=>{setData({...data, email : e.target.value})}} placeholder="email"/>
            <input type="number" onChange={(e)=>{setData({...data, age : Number(e.target.value)})}} placeholder="age"/>
            <button onClick={sendData}>Send</button>

            <input type="number" onChange={(ev)=>{setdelID(  Number(ev.target.value)  )}} />
            <button onClick={()=>{deleteData()}}>Delete</button>

            <button onClick={()=>updateData()}>UPdate</button>
            <Link href = "/Tester/one">One</Link>
            <p>{one.length ? one[0].name + one[0].age + one[0].address + one[0].email : "no"}</p>
        </div>
    )
}
export default test;