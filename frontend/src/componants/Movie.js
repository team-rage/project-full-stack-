import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Movie() {
  const [allData, setAllData] = useState([]);
  const { id } = useParams();
  useEffect(async () => {
    const res = await axios.get(`http://localhost:5000/movies/${id}`);
    console.log("hhhhh", res.data);
    setAllData(res.data);
  }, []);

  return (
    <div clsassname="move">
      <h1>{allData.name}</h1>
      <h1>{allData.date}</h1>
      <img src={allData.url} />
      <iframe
        width="560"
        height="315"
        src={allData.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h1 className="description">{allData.description}</h1>
    </div>
  );
}
