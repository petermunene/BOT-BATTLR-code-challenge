import React from "react";

function BotCard({ bot, onClick, onDischarge }) {
  const { name, health, damage, armor, catchphrase, avatar_url, bot_class } = bot;

  return (
    <div className="bot-card" onClick={() => onClick(bot)} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", width: "250px" }}>
      <img src={avatar_url} alt={name} style={{ width: "100%" }} />
      <h3>{name}</h3>
      <p><strong>Class:</strong> {bot_class}</p>
      <p><strong>Catchphrase:</strong> {catchphrase}</p>
      <p>❤️ {health} | ⚔️ {damage} | 🛡 {armor}</p>
      {onDischarge && (
        <button onClick={(e) => {
          e.stopPropagation();
          onDischarge(bot.id);
        }} style={{ background: "red", color: "white" }}>
          X
        </button>
      )}
    </div>
  );
}

export default BotCard;