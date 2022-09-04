import React from "react";
import greed from "./greed.scss";
export default function Greed() {
  let currDate = new Date();
  currDate = currDate.getHours();
  let greeting;
  let styleGreet = {};
  if (currDate >= 1 && currDate <= 12) {
    greeting = "Good Morning";
    styleGreet.color = "green";
  } else if (currDate >= 12 && currDate <= 21) {
    greeting = "Good Afternoon";
    styleGreet.color = "red";
  } else {
    greeting = "Good night";
    styleGreet.color = "blue";
  }

  return (
    <div>
      <div className="Greed">
        <h1>
          Hello sir, <span style={styleGreet}>{greeting}</span>{" "}
        </h1>
      </div>
    </div>
  );
}
