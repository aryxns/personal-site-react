import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

const work = [
  "I build ML Models.",
  "I work on frontier tech.",
  "I build web apps.",
  "I love startups."
];

function Intro() {
  return (
    <div className="intro">
      <img src="https://pbs.twimg.com/profile_images/1221769186353074177/0Xg9Iuig_400x400.jpg" />
      <br />
      <br />
      <h2>
        <TypistLoop interval={3000}>
          {work.map((text) => (
            <Typist key={text} startDelay={1000}>
              {text}
            </Typist>
          ))}
        </TypistLoop>
      </h2>
      <br />
      <p>Hi! I'm a high school student.</p>
      <p>In my free time, I love building products.</p>
    </div>
  );
}

export default Intro;
