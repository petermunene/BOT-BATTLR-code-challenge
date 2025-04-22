import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

const API = "http://localhost:8001/bots";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setBots);
  }, []);

  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (id) => {
    setArmy(army.filter((b) => b.id !== id));
  };

  const dischargeBot = (id) => {
    fetch(`${API}/${id}`, { method: "DELETE" })
      .then(() => {
        setBots(bots.filter((b) => b.id !== id));
        setArmy(army.filter((b) => b.id !== id));
      });
  };

  return (
    <div className="App">
      <h1>🤖 Bot Battlr</h1>
      <YourBotArmy bots={army} onRelease={releaseBot} onDischarge={dischargeBot} />
      <BotCollection bots={bots} onEnlist={enlistBot} />
    </div>
  );
}

export default App;


