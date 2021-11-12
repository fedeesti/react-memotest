import './WinnerScore.css';

const WinnerScore = ({ show, result, restart = () => {} }) => {
    return (
      <div className={'winner-card ' + (show ? 'winner-card--hidden': '')}>
        <span className="winner-card-text">
          Has completado el juego en {result}
        </span>
        <button onClick={restart}>Jugar de nuevo?</button>
      </div>
    );
  };

export default WinnerScore;