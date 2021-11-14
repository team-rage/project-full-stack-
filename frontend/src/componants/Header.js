import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/Movies">Movies</Link>
        </li>
        <li>
          <Link to="/Movie">Movie</Link>
        </li>
        <li>
          <Link to="/Favorite">Favorite</Link>
        </li>
      </ul>
    </div>
  );
}
