import players from './players';
import './PlayerCard.css';

const PlayerCard = (props) => {
  return (
    <div className="player-card">
      {players.map((player) => (
        <div key={player.name} className="player-card-header">
          <div className="player-image-container">
            <img src={player.imageUrl} alt={player.name} className="player-image" />
            <div className="player-number">{player.jerseyNumber}</div>
          </div>
          <div className="player-info">
            <h2 className="player-name">{player.name}</h2>
            <p className="player-team">{player.team}</p>
            <p className="player-nationality">{player.nationality}</p>
          </div>
          <div className="player-stats">
            <div className="stat-item">
              <span className="stat-value">Jersey: {player.jerseyNumber}</span>
              <span className="stat-label">Age: {player.age}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

PlayerCard.defaultProps = {
    "name": "issa",
    "team": "gomycode",
    "nationality": "tunisia",
    "jerseyNumber": 3,
    "age": 21,
    "imageUrl": "data:image/jpeg;base64,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"
}

export default PlayerCard;
