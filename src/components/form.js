import React, { useState } from "react";
import * as yup from "yup";  //https://github.com/jquense/yup de dökümantasyonu olan form validasyon kütüphanelerinden biri

let schema = yup.object().shape({
    name: yup.string("String bir değer girin").required("Bu alan gerekli"),
    age: yup.number("Bir rakam giriniz").required("Bu alan gerekli").positive("Pozitif Bir Sayı Giriniz").integer("Tam sayı olarak giriniz"),
    surname: yup.string("Bir metin giriniz").min(2, "En az iki harfli olmalı"),
    
 });


const initialData = {
    name: "",
    surname: "",
    age: null,
    position: "",
}

function Form(props) {
    const { handleSubmitCallback } =props;
    const [data, setData] = useState(initialData );
    const[hataMesaj, setHataMesaj] = useState(initialData);

    const hataKontrol = (name, value) => {
        yup.reach(schema, name)
        .validate(value)
        .then(()=>{setHataMesaj({
            ...hataMesaj,
            [name]: ""
        });
    })
        .catch((error) =>{
            setHataMesaj({
                ...hataMesaj,
                [name]: error.errors[0]
            });
        });
    }
   

    const handleChange=(e)=>{
        const { value, name, checked, type } = e.target;
        hataKontrol(name, value);
        setData({
            ...data,
            [name]: type === "checkbox" ? checked : value, //checkboxlarda value değeri yerine cek edlip  edilmediğine göre işlem yaparız
        });
       
    }

    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log(data);
       return handleSubmitCallback(data);
    }

    const handleReset =() => {
        setData(initialData);
    }

    return(
    <div>
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="fname">First Name</label><br/>
        <input 
        onChange={handleChange} 
        type="text" 
        id="fname" 
        name="name" 
        value={data.name}/><br/>
        <span style={{color:"red", fontSize:11}}>{hataMesaj.name}</span>
        </div>
        <div>
        <label htmlFor="lname">Last Name</label><br/>
        <input 
        onChange={handleChange} 
        type="text" 
        id="lname" 
        name="surname" 
        value={data.surname} /><br/>
        <span style={{color:"red", fontSize:11}}>{hataMesaj.surname}</span>
        </div>
        <div>
        <label htmlFor="age">Age</label><br/>
        <input 
        onChange={handleChange} 
        type="number" 
        id="age" 
        name="age"
        value={data.age} /><br/>
        <span style={{color:"red", fontSize:11}}>{hataMesaj.age}</span>
        </div>
        <div>
        <label htmlFor="position">Mühendis</label><br/>
        <input 
        onChange={handleChange} 
        type="checkbox" 
        id="position" 
        name="position" 
        value="mühendis"
        checked={data.onay} /><br/>
        </div>
        <button  type="susbmit" value="Submit">Gönder</button>
        <button type="reset" onClick={handleReset}>Formu Temizle</button>
    </form>
    </div>
  )}

  export default Form;