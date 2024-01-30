import React, { useState } from "react";
import './App.css';
import Form from "./components/form";


function App() {
  const uye1 = {
     isim: "ali",
     soyIsim:"er",  yas:"25",  rol:"sagbek"}
  const uye2 ={  isim: "sadi",  soyIsim:"tek",  yas:"32",
    rol:"ortasaha"
  }
 const [uye, setUye] = useState([{
    isim: "",
    soyIsim:"",
    yas:"",
    rol:""
 },uye1, uye2]);



// console.log("uye:",uye);

function uyeEkle(yeniUye){
  const yeniUyeState = [...uye, yeniUye]
  setUye(yeniUyeState)
}

  return (
    <div className="App">
      <Form handleSubmitCallback={uyeEkle}/>
    </div>
  );
}

export default App;


//setUye(uye.push(uye1))
//setUye(...uye, uye2))
