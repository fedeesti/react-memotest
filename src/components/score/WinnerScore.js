import './WinnerScore.css';

const WinnerScore = ({ show, result, restart = () => {} }) => {
    return (
      <div className={'winner-card' + (show ? '--hidden' : '')}>
        <span className="winner-card-text">
          Has completado el juego en {result}
        </span>
        <button className='winner-button' onClick={restart}>¿Jugar de nuevo?</button>
      </div>
    );
  };

export default WinnerScore;