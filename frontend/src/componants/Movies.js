import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./style.css"
export default function Movies() {
  const history = useHistory();
  const [searchArr, setSearchArr] = useState('');
  const [data, setData] = useState([]);
 

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
      if (!elem.name.toLowerCase().includes(searchArr.toLocaleLowerCase())) {
        return elem;
        
      }
      console.log(elem)
    });
    return search1;
  };

  return (
    <div>
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
      {data.name&&data.url}
      
      {data.map((elem) => {
        return (
          <div
            onClick={() => {
              GoToMovie(elem.id);
            }}
          >
            <p>{elem.name}</p>
        
            <img src={elem.url} />
          </div>
        );
      })}
    </div>
  );
}
