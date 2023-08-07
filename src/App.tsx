import { Canvas } from "@react-three/fiber";
import Cylinder from "./components/Cylinder";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-9 p-10">
        {/* <img
          src="https://cdn.pixabay.com/photo/2018/09/05/08/05/party-3655712_1280.jpg"
          alt=""
          className="absolute -z-10 min-h-screen w-full"
        /> */}
        <h1 className="text-3xl font-extrabold">Welcome to BlockParty.Life</h1>
        <p>
          So we got hammered last night and decided we would help people get
          what they need for bloc parties throughout the state of Virginia (to
          start)
        </p>
        <div className="flex flex-col gap-3">
          <p>so far, here is what we think it should do:</p>
          <ul className="text-left">
            <li>- facilitate rentals for things like grills and tents</li>
            <li>
              - create a dashboard/ forum for the planners and participants of
              the blockparty to communicate and pool resources
            </li>
            <li>
              - expedite the road closure process with the client's county
            </li>
          </ul>
        </div>
        its gonna be super dope
      </div>

      <section>
        <Canvas>
          <pointLight position={[10, 10, 10]} />
          <ambientLight />
          <Cylinder position={[-1.2, 0, 0]} />
          <Cylinder position={[1.2, 0, 0]} />
        </Canvas>
      </section>
    </>
  );
}

export default App;
