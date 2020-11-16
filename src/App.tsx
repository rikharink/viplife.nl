import React from "react";
import "./App.css";
import { NextDrop } from "./components/NextDrop";
import { Notify } from "./components/Notify";

function App() {
  return (
    <div className="App bg-center bg-cover bg-viplife flex flex-auto flex-col justify-center text-white">
      <h1 className="font-thug text-6xl">Vip Life</h1>
      <h2 className="font-thug text-4xl">we didn't choose the Vip Life</h2>
      <h2 className="font-thug text-4xl">the Vip Life chose us</h2>
      <NextDrop className="text-2xl m-4" />
      <Notify className="text-xl m-6" />
      <div className="m-8">
        <a href="https://shop.spreadshirt.nl/vip-life/" className="text-2xl bg-viplife-blue text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-black rounded">shop</a>
      </div>
      <a className="text-l underline hover:text-black" href="https://viplife.rip">
        pour one out for the team members that left
      </a>
    </div>
  );
}

export default App;
