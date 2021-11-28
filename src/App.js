import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ADD_ITEM } from "./actions";
import { useLocalStorage } from "./useLocalStorage";
export const App = () => {
  const [value, setValue] = useLocalStorage("name", "");

  return (
    <div className="App">
      <div className="control">
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </div>
  );
};
export default App;
