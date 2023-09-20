import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#ff595e");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
          <div className="flex fex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("#ff595e")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#ff595e" }}
            >
              #ff595e
            </button>

            <button
              onClick={() => setColor("#ffca3a")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#ffca3a" }}
            >
              #ffca3a
            </button>

            <button
              onClick={() => setColor("#8ac926")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#8ac926" }}
            >
              #8ac926
            </button>

            <button
              onClick={() => setColor("#1982c4")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#1982c4" }}
            >
              #1982c4
            </button>

            <button
              onClick={() => setColor("#6a4c93")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#6a4c93" }}
            >
              #6a4c93
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
