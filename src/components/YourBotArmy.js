import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, onRelease, onDischarge }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} onClick={() => onRelease(bot.id)} onDischarge={onDischarge} />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;