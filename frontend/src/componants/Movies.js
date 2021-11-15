import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Movies() {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [searchArr, setSearchArr] = useState("");

  useEffect(async () => {
    // here is the change
    const result = await axios.get("http://localhost:5000/movies");
    console.log(result.data);
    setData(result.data);
  }, []);

  const GoToMovie = (id) => {
    history.push(`/Movie/${id}`)    
  };
  const searchTarget = (e) => {
    setSearchArr(e.target.value);
  };
  const search = (movies) => {
    let search1 = movies.filter((elem, i) => {
      if (elem.name.toLowerCase().includes(searchArr.toLocaleLowerCase())) {
        return elem;
      }
    });
    return search1;
  };
  return (
    <div className="movies">
      {data.map((elem) => {
        return (
          <div
            onClick={() => {
              GoToMovie(elem.id);
            }}
          >
            <h1>{elem.name}</h1>
            <img src={elem.url} />
          </div>
        );
      })}
    </div>
  );
}
