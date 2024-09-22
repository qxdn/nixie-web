import DivergenceMeter from "./components/DivergenceMeter";
import NixieClock from "./components/NixieClock";

function App() {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="text-center w-full h-full justify-center items-center flex">
       <DivergenceMeter />
      </div>
    </div>
  );
}

export default App;
