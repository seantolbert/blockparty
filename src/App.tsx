import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-9">
        <h1 className="text-3xl font-extrabold">Welcome to BlockParty.Life</h1>

        <p>
          So we got hammered last night and decided we would help people get
          what they need for bloc parties throughout the state of Virginia (to
          start)
        </p>

        <div className="flex flex-col gap-3">
          <p>so far, here is what we think it should do:</p>
          <ul className="text-left">
            <li>facilitate rentals for things like grills and tents</li>
            <li>
              create a dashboard/ forum for the planners and participants of the
              blockparty to communicate and pool resources
            </li>
            <li>expedite the road closure process with the client's county</li>
          </ul>
        </div>

        its gonna be super dope
      </div>
    </>
  );
}

export default App;
