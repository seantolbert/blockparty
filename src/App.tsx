import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-9">
        <h1>Welcome to BlockParty.Life</h1>

        <p>
          So we got hammered last night and decided we would help people get
          what they need for bloc parties throughout the state of Virginia (to
          start)
        </p>

        <p>here is what we think it should do:</p>

        <ol className="">
          <li>facilitate rentals for things like grills and tents</li>
          <li>
            create a dashboard/ forum for the planners and participants of the
            blockparty to communicate and pool resources
          </li>
          <li>

          </li>
        </ol>
      </div>
    </>
  );
}

export default App;
