import React from "react";
import ReactDOM from "react-dom/client";

const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "CLick me to visit google",
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
