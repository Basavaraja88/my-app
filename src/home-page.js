import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to={"/get"}>
        <button>GET DATA</button>
      </Link>
      <Link to={"/post"}>
        <button>POST DATA</button>
      </Link>
      <Link to={"/put"}>
        <button>PUT DATA</button>
      </Link>
      <Link to={"/delete"}>
        <button>DELETE DATA</button>
      </Link>
    </div>
  );
}

export default HomePage;
