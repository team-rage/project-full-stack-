import React, { useState, useEffect} from "react";
import axios from "axios";
import {BsFillHeartFill} from "react-icons/bs"
import { useParams } from "react-router-dom";

export default function Favorite() {

 const [remove, setremove] = useState([]);
 const { id } = useParams();

 useEffect(async () => {
  const result = await axios.get("http://localhost:5000/like");
  console.log(result.data);
  setremove(result.data);
}, []);
 const removeFav = async ()  =>{

  const res = await axios.delete(`http://localhost:5000/unlike${id}`)
  setremove(res.data)
  console.log(res.data);
  
  
  
    }

  return <div>
    {remove.map((elem,i) => {
        return (
          <div
           
          >
            
     
            <h1>{elem.name}</h1>
            <img   src={elem.url} />
            <BsFillHeartFill className="HEART"  onClick={()=>{removeFav()}}/>
          
          </div>
        );
      })}
  </div>;
}
