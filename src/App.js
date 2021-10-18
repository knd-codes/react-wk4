import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <h1>Krista's Weather App</h1>
      <Weather defaultCity="Dallas" />
      <footer>
        Project was coded by Krista Gonzalez, open-sourced on GitHub
        <a
          href="https://github.com/knd-codes/react-wk4"
          target="_blank"
          rel="noreferrer"
        >
        </a>
       {" "} and {" "}
        <a
          href="https://nervous-fermi-738c74.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
        </footer>
        </div>
  );
}