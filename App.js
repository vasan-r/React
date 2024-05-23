import React from "react";
import ReactDOM from "react-dom/client";
// react element - it is a object.
const Title = () => <h1>this is from tile component</h1>;

// react functional component - it is a normal js function which return jsx or react element.
const Heading = () => (
  <div>
    <Title />
    <h1>this is react component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
