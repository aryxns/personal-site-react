import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Intro from "./Intro";
import Redc from "./Card";

function App() {
  return (
    <div>
      <Header />
      <br />
      <Intro />
      <br />

      <br />
      <br />
      <p className="content">
        Some essays that I have written are <a href="https://aryxn.ml">here</a>
      </p>
      <p className="content">
        I post insights on <a href="https://twitter.com/aryxnsharma">twitter</a>
      </p>
    </div>
  );
}

export default App;
