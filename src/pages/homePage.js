import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const condition = true;

  const handleNavigate = () => {
    if (condition) {
      navigate("/props");
    } else {
      navigate("/notes");
    }
  };

  return (
    <div className="px-5">
      <h1 className="my-5 text-xl">Home Page</h1>
      <div className="flex space-x-5">
      
        <Link to="/counter">
          <button className="border border-black px-3">Counter Practice</button>
        </Link>

        <Link to="/props">
          <button className="border border-black px-3">Props Practice</button>
        </Link>

        <Link to="/notes">
          <button className="border border-black px-3">Notes Practice</button>
        </Link>

        <button onClick={handleNavigate} className="border border-black px-3">
          Use Navigate Practice
        </button>

        <Link to="/localStorageDemo">
          <button className="border border-black px-3">
            Local Storage Practice
          </button>
        </Link>

        <Link to="/responsive">
          <button className="border border-black px-3">
            Responsive UI
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
