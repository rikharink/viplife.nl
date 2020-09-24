import React from "react";
import "./App.css";
import { NextDrop } from "./components/NextDrop";
import { Notify } from "./components/Notify";

function App() {
  return (
    <div className="App bg-center bg-cover bg-viplife flex flex-auto flex-col justify-center text-white">
      <h1 className="font-thugs text-6xl">viplife</h1>
      <h2 className="font-thug text-4xl">we didn't choose the viplife</h2>
      <h2 className="font-thug text-4xl">the viplife chose us</h2>
      <NextDrop className="text-2xl m-4" />
      <Notify className="text-xl m-6" />
    </div>
  );
}

export default App;
