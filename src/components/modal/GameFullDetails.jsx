import React from "react";
import "./GameDetailsModal.css";

const GameDetailsModal = ({ isOpen, onClose, gameData }) => {
  if (!gameData) return null;

  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>

        {/* Game Title */}
        <h2 className="modal-title">Game Details</h2>
        <p className="game-info">
          Complete information for <span className="bet-id">{gameData.betId}</span>
        </p>

        {/* Players Section */}
        <div className="players">
          {gameData.players.map((player, index) => (
            <div key={index} className="player-card">
              <img src={player.avatar} alt={player.name} className="player-avatar" />
              <p className="player-name">{player.name}</p>
              <p className="player-location">{player.location}</p>
            </div>
          ))}
        </div>

        {/* Game Summary */}
        <h3 className="section-title">Game Summary</h3>
        <div className="summary-box">
          <p><strong>Bet Type:</strong> {gameData.summary.betType}</p>
          <p><strong>Status:</strong> <span className={`status ${gameData.summary.status.toLowerCase()}`}>{gameData.summary.status}</span></p>
          <p><strong>Winner:</strong> {gameData.summary.winner}</p>
          <p><strong>Final Score:</strong> {gameData.summary.finalScore}</p>
        </div>

        {/* Winner Section */}
        <h3 className="section-title">Winner 🏆</h3>
        <div className="winner-box">
          <p><strong>Name:</strong> {gameData.winner.name}</p>
          <p><strong>Amount Won:</strong> {gameData.winner.amountWon}</p>
          <p><strong>Prize Status:</strong> <span className="prize-status">Delivered</span></p>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsModal;
