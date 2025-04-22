import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onEnlist }) {
  return (
    <div>
      <h2>All Bots</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} onClick={onEnlist} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;