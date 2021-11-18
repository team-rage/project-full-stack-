import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./style.css"
export default function LogIn() {
  const [login, setlogin] = useState("");
  const [pas, setpas] = useState("");
  const history = useHistory();

  const Login = async () => {
    const res = await axios.post("http://localhost:5000/users", {
      email: login,
      passWord: pas,
    });
    console.log(res.data);
    if (res.data === "login falied") {
      alert("login failed");
    } else {
      history.push("/home");  
    }
  };

  const email1 = (e) => {
    setlogin(e.target.value);
  };
  const pass = (e) => {
    setpas(e.target.value);
  };
  return (

    <div className="all-login-w" >

      <div className="wrapper-login">
        <div id="inputdivLo" className='inputDivLo'><input className="INPUT"
        onChange={(e) => {
          email1(e);
        }}
        type="text"
        placeholder="Enter The email"
      /></div>
      
      <br />
      <div  className='inputDivLo'><input className="INPUT"
        onChange={(e) => {
          pass(e);
        }}
        
        type="password"
        placeholder="passWord"
      /></div>
      
      <br />
      <button className="btn-login"
        onClick={() => {
          Login();
        }}
      >
        Login
      </button>
      </div>
    </div>
  );
}
