import logo from "./logo.svg";
import "./App.css";

import { useEffect, useReducer, useState } from "react";

const initialState = {
  secondDeg: 90,
  minuteDeg: 90,
  hourDeg: 90,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SECOND_DEG":
      return { ...state, secondDeg: action.secondDeg };
    case "SET_MINUTE_DEG":
      return { ...state, minDeg: action.minuteDeg };
    case "SET_HOUR_DEG":
      return { ...state, hourDeg: action.hourDeg };
    default:
      return state;
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      const second = time.getSeconds();
      const minute = time.getMinutes();
      const hour = time.getHours();
      const secondDeg = (second / 60) * 360 + 90;
      const minuteDeg = (minute / 60) * 360 + 90;
      const hourDeg = (hour / 12) * 360 + 90;
      dispatch({ type: "SET_SECOND_DEG", secondDeg });
      dispatch({ type: "SET_MINUTE_DEG", minuteDeg });
      dispatch({ type: "SET_HOUR_DEG", hourDeg });
    }, 1000);
    return () => clearInterval(interval);
  }, [state.secondDeg, state.minuteDeg]);

  return (
    <div className="clock">
      <div className="clock-face">
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${state.secondDeg}deg)` }}
        ></div>
        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${state.minuteDeg}deg)` }}
        ></div>
        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${state.hourDeg}deg)` }}
        ></div>
      </div>
    </div>
  );
};
export default App;
