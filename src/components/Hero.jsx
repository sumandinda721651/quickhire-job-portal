import { useState } from "react";
import "./Hero.css";

function Hero({ setSearch, setLocation }) {
  const [jobInput, setJobInput] = useState("");
  const [locInput, setLocInput] = useState("");

  const handleSearch = () => {
    setSearch(jobInput);
    setLocation(locInput);
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          Find Your <span>Dream Job</span> Near You ..!!
        </h1>

        <p>
          Discover local jobs, apply instantly, and connect with employers faster than ever.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search job (e.g. Delivery, Office)"
            value={jobInput}
            onChange={(e) => setJobInput(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter location"
            value={locInput}
            onChange={(e) => setLocInput(e.target.value)}
          />

          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;