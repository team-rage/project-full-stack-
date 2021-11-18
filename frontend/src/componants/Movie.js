import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import Movies from "./Movies";

export default function Movie() {
  const [allData, setAllData] = useState([]);
  const { id } = useParams();
  const [comments, setComent] = useState([]);
  const { comment } = useParams();
  const [input, setInput] = useState([]);
  useEffect(async () => {
    const res = await axios.get(`http://localhost:5000/movies/${id}`);
    console.log("move data", res.data);
    setAllData(res.data);
    const result = await axios.get(
      `http://localhost:5000/movies/comment/${id}`
    );
    console.log("comment", result.data);
    setComent(result.data);
  }, []);
  const aditComment = async () => {
    const res = await axios.post(
      `http://localhost:5000/movies/addcomment/${id}`,
      { comment: input }
    );
    console.log("comment", res.data);
    setComent(res.data);
  };
  const chengeComment = (e) => {
    setInput(e.target.value);
  };
  return (
    <div clsassname="move">
      <h1>{allData.name}</h1>
      <h1>{allData.Date}</h1>
      <img src={allData.url} className="imgMove" />
      <iframe
        width="560"
        height="315"
        src={allData.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="video"
      ></iframe>
      <h1 className="description">{allData.description} </h1>

      <input
        type="text"
        placeholder="Enter Comment"
        onChange={(e) => {
          chengeComment(e);
        }}
      />
      <button
        onClick={() => {
          aditComment();
        }}
      >
        add comment{" "}
      </button>
      {comments.map((elem, i) => {
        return (
          <div key={i}>
            <h1> {elem}</h1>
            {elem.comment}
            {/* {elem.input} */}
          </div>
        );
      })}
    </div>
  );
}
