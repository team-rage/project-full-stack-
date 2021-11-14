import React, { useState } from "react";

export default function Movie() {
  const [move, setmove] = useState([]);

  <div>
    <h1>Welcome to Web Movies</h1>
    {move.map((elem, i) => {
      return (
        <div key={i}>
          <p>{elem.name}</p>
          <p>{elem.date}</p>
          <p>{elem.description}</p>
          <img src={elem.url} />
        </div>
      );
    })}
  </div>;
}
