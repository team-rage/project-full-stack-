import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Movie() {
  const [allData, setAllData] = useState([]);
  const { id } = useParams();
  console.log(useParams());
  useEffect(async () => {
    const res = await axios.get(`http://localhost:5000/movies/${id}`);
    console.log("hhhhh", res.data);
    setAllData(res.data);
  }, []);

  return (
    <div clsassname="move">
      <h1>{allData.name}</h1>

      <img src={allData.url} />
      <h1>{allData.id}</h1>
      <h1>{allData.description}</h1>
      <h1>{allData.date}</h1>
    </div>
  );
}
