import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Movies() {
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(async () => {
    // here is the change
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
            <h1>{elem.name}</h1>
          </div>
        );
      })}
    </div>
  );
}
