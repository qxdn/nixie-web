import React from "react";
import DivergenceMeter from "./components/DivergenceMeter";
import NixieClock from "./components/NixieClock";

function App() {
  const [mode, setMode] = React.useState<number>(0);

  return (
    <div className="w-screen h-screen bg-black">
      <div className="text-center w-full h-full justify-center items-center flex">
        {mode === 0 ? <NixieClock /> : <DivergenceMeter />}
      </div>
    </div>
  );
}

export default App;
