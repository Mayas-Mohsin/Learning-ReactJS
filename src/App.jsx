import "./App.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import LandingPage from "./LandingPage";
import Header from "./Header";

function App() {
  const [value, setValue] = useState(0);

  // todo = []
  // todo = ["make a project", ]
  // todo = ["make a project"] -> ["make a project", "make a project 2"]
  // todo = ["make a project"] -> ["make a project", "make a project 2", "make a project 3"]

  // console.log(value);

  return (
    //fragment
    <>
      <div> <Header/> </div>
      <div className="app">
        <LandingPage />
      </div>

      {/* <div>{value}</div>
      <button
        onClick={function () {
          setValue(value + 1);
        }}
      >
        Add
      </button>
      <button
        onClick={function () {
          setValue(value - 1);
        }}
      >
        Subtract
      </button>

      <div className="testclass">Something</div>
      <img src={reactLogo} alt="" /> */}
    </>
  );
}

export default App;
