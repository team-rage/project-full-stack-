import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Movies() {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [searchArr, setSearchArr] = useState("");

  useEffect(async () => {
    const result = await axios.get("http://localhost:5000/movies");
    console.log(result.data);
    setData(result.data);
  }, []);

  const GoToMovie = (id) => {
    history.push(`/Movie/${id}`);
  };
  const searchTarget = (e) => {
    setSearchArr(e.target.value);
  };
  const search = () => {
    const search1 = data.filter((elem) => {
      if (elem.name.toLowerCase().includes(searchArr.toLocaleLowerCase())) {
        return elem;
      }
      console.log(elem)
    });
    setData(search1)
    return search1;
  };
  return (
    <div className="movies">
      <input
        placeholder="search"
        onChange={(e) => {
          searchTarget(e);
        }}
      />
      <button
        onClick={() => {
          search();
        }}
      >
        search
      </button>
      {data.map((elem,i) => {
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
