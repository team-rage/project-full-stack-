import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Movie() {
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios.get("http://localhost:5000/movies");
    console.log(result.data);
    setData(result.data);
  }, []);

  const GoToMovie = (id) => {
    history.push(`/Movie/${id}`);
  };
  return (
    <div>
      {data.map((elem) => {
        return (
          <div
            onClick={() => {
              GoToMovie(elem.id);
            }}
          >
            <p>{elem.name}</p>
            <p>{elem.date}</p>
            <p>{elem.description}</p>
            <img src={elem.url} />
          </div>
        );
      })}
    </div>
  );
}
