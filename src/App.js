import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ADD_ITEM } from "./actions";
export const App = ({ articles, addArticle }) => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const nextSecond = second + 1;
      if (nextSecond > 60) {
        setSecond(0);
        // need to handle scenario when minute = 60;
        setMinute((minute) => minute + 1);
      } else {
        setSecond((second) => second + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <div>
        <h1>
          {minute}:{second}
        </h1>
      </div>
      <div>
        <button onClick={() => addArticle({ title: "Test Item", price: 100 })}>
          Add Item
        </button>
      </div>
      <h2>{JSON.stringify(articles)}</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles,
});

const mapDispatchToProps = (dispatch) => ({
  addArticle: (data) => dispatch({ type: "ADD_ITEM", payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
