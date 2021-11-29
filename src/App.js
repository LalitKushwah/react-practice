import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";

export const App = () => {
  const [secDeg, setSecDeg] = useState();
  const [minDeg, setMinDeg] = useState();
  const [hourDeg, setHourDeg] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      const second = time.getSeconds();
      const minute = time.getMinutes();
      const hour = time.getHours();
      const secondDeg = (second / 60) * 360 + 90;
      const minuteDeg = (minute / 60) * 360 + 90;
      const hourDeg = (hour / 12) * 360 + 90;
      setSecDeg(secondDeg);
      setMinDeg(minuteDeg);
      setHourDeg(hourDeg);
    }, 1000);
    return () => clearInterval(interval);
  }, [secDeg, minDeg]);

  return (
    <div className="clock">
      <div className="clock-face">
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${secDeg}deg)` }}
        ></div>
        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${minDeg}deg)` }}
        ></div>
        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${hourDeg}deg)` }}
        ></div>
      </div>
    </div>
  );
};
export default App;
