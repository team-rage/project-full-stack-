import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {BsFillHeartFill} from "react-icons/bs"
export default function Movies() {
  const history = useHistory();
  // const favMovie = useHistory();
  const [data, setData] = useState([]);
  const [searchArr, setSearchArr] = useState("");

  useEffect(async () => {
    const result = await axios.get("http://localhost:5000/movies");
    console.log(result.data);
    setData(result.data);
  }, []);

  const fav = async (id)  =>{
const res = await axios.post(`http://localhost:5000/like/${id}`);
// setData(res.data)
console.log(res.data);
 }
  // const GoToFav = (like) => {
  //   favMovie.push(`/like/${like}`);
  // };

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
    <div className ="mainDiv" >
       <div className="search">
      <input className="inputSearch"
        placeholder="search"
        onChange={(e) => {
          searchTarget(e);
        }}
      /> <button
        onClick={() => {
          search();
        }}
      >
        search
      </button>
      </div>
    <div className="movies">
      
     
      {data.map((elem,i) => {
        return (
          <div
           
          >
            
            <div className="movdiv">
            <h1>{elem.name}</h1>
            <img  onClick={() => {
              GoToMovie(elem.id);
            }} src={elem.url} />
            <BsFillHeartFill className="HEART"  onClick={()=>{fav(elem.id)}}/>
            </div>
          
          </div>
        );
      })}
    </div>
    </div>
  );
}
