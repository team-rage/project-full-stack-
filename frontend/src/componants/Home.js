import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"
export default function Home() {
  const [movies, setmovies] = useState([]);
  useEffect(async () => {
    const result = await axios.get("http://localhost:5000/movies");
    console.log(result.data);
    setmovies(result.data);
  }, []);


  return (
    <div>
     
      <div  className="title">
      <h1>Welcome to Web Movies</h1>
      <hr />
      </div>
      
     
    </div>
  );
}
