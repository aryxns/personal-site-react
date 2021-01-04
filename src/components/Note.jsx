import React from "react";
import { Button } from "react-bootstrap";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <br />
      <p>{props.content1}</p>
      <p>{props.content2}</p>
      <p>{props.content3}</p>
      <p>{props.content4}</p>
      <p>{props.content5}</p>
      <br />
      <Button
        variant="outline-primary"
        href="https://twitter.com/intent/tweet?text=I just read this article on @aryxnsharma's blog. cool stuff."
      >
        Share on twitter
      </Button>
    </div>
  );
}

export default Note;
