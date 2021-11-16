import React, { useState } from "react";
import axios from "axios";
export default function LogIn() {
  const [login, setlogin] = useState("");
  const [pas, setpas] = useState("");

  const Login = async () => {
      
        const res = await axios.post("http://localhost:5000/users", {
            email: login,
            passWord: pas,
          });
          console.log(res.data);  
  };
  const email1 = (e) => {
    setlogin(e.target.value);
  };
  const pass = (e) => {
    setpas(e.target.value);
  };
  return (
    <div>
      <input
        onChange={(e) => {
          email1(e);
        }}
        type="text"
        placeholder="Enter The email"
      />
      <input
        onChange={(e) => {
          pass(e);
        }}
        type="password"
        placeholder="passWord"
      />
      <button
        onClick={() => {
          Login();
        }}
      >
        Login
      </button>
    </div>
  );
}
