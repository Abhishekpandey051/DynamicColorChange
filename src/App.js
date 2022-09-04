import React from "react";
import Greed from "./Greed.jsx";
export default function App() {
  const img1 = "https://picsum.photos/200/300";
  // const head = {
  //   color: "red",
  //   textTransform: "capitalize",
  //   fontWeigth:"bold",
  //   margin:'70px,0px'
  // };

  return (
    <div className="App">
      {/* <h1 style={head}>Hello, abhishek pandey</h1>
      <img src={img1} alt="Pic" /> */}

      <Greed />
    </div>
  );
}
