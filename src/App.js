import React from 'react';
import Card from './components/Card';
import ImagPath from "./components/images/image-equilibrium.jpg";
import PFP from "./components/images/image-avatar.png";
function App() {
  return (
    <div className="App">
      <Card img = {ImagPath} title ={"Equilibrium #3429"} desc = {" Our Equilibrium collection pomotes balance and calm"} price = {"0.041"} timeLeft = {"3 days"} pfp = {PFP} Creator = {" Jules Wyvern"} ></Card>
    </div>
  );
}

export default App;
