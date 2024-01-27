import React, { useState } from "react";

function Form(props) {
    const { handleSubmitCallback } =props;
    const [data, setData] = useState({
        name: "",
        surname: "",
        age: 33,
        position: "",
    }
    );

    // const changeHandler=(e)=>{
    //     const { value, name } = e.target;
    //     const yeniState = {
    //         ...data,
    //         [name]: value,
    //     };
    //     setData(yeniState);
    // }

    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log(event);
       return handleSubmitCallback(data);
    }

    return(
    <div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name</label><br/>
        <input onChange={e =>setData.name(e.target.value)} type="text" id="fname" name="ad" value={data.name}/><br/>
        <label htmlFor="lname">Last Name</label><br/>
        <input onChange={e => setData.surname(e.target.value)} type="text" id="lname" name="soyad" value={data.surname} /><br/>
        <label htmlFor="age">Age</label><br/>
        <input onChange={e => setData.age(e.target.value)} type="number" id="age" name="yas"value={data.age} /><br/>
        <label htmlFor="position">Position</label><br/>
        <input onChange={e => setData.position(e.target.value)} type="text" id="position" name="rol" value={data.position} /><br/>
        <button  type="susbmit" value="Submit">Gönder</button>
    </form>
    </div>
  )}

  export default Form;