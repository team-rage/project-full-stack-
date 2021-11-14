import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [movies, setmovies] = useState([]);
  useEffect(async () => {
    // here is the change
    const result = await axios.get("http://localhost:5000/movies");
    console.log(result.data);
    setmovies(result.data);
  }, []);


  return (
    <div>
      <h1>Welcome to Web Movies</h1>
      
      {movies.map((elem, i) => {
        return (
          <div key={i}>
          </div>
        );
      })}
    </div>
  );
}
