import React from "react";
import ReactDOM from "react-dom";
const luckynum = 2;
const fname = "Muthu Natesan";
const lname = "Muthurajan";
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
ReactDOM.render(
  <div>
    <h1>Resume 2.0</h1>

    <ul>
      <li>My future</li>
      <li>I am amazing</li>
      <li>Positivity and old school grind</li>
    </ul>
    <p>My lucky number is {luckynum}</p>
    <p>Created By {fname + " " + lname}</p>
    <p>
      Copyright {currentYear + " "}
      {currentMonth}
    </p>
  </div>,
  document.getElementById("root")
);
