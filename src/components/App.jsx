import React from "react";
import Header from "./Header";
import Intro from "./Intro";

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
