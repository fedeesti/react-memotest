import React from 'react';
import Board from './components/board/Board';
import Timer from './components/score/Timer';
import WinnerScore from './components/score/WinnerScore';
import useMemotestGame from './hooks/useMemotestGame';
import useTimer from './hooks/useTimer';
import './App.css';

function App() {
  const { cards, handleCard, gameEnded, animating, restart, wonPairs } = useMemotestGame();
  const { minutes, seconds } = useTimer(gameEnded, wonPairs);
  let result = 0;

  if(gameEnded) {
    let totalMinutes = (minutes !== 0 && minutes < 10) ?  `0${minutes}` : '';
    let totalSeconds = seconds > 10 ? seconds : `0${seconds}`;
        if(totalMinutes === ''){
            result = totalSeconds + ' segundos';
        } else {
            result = totalMinutes + ' minutos con ' + totalSeconds + ' segundos';
        }
  }

  return (
    <main className="App">
      <h1>Memotest</h1>
      <WinnerScore
        show={gameEnded}
        restart={restart}
        result={result}
      />
      <section className={'memotest ' + (gameEnded ? 'hidden' : '')}>
        <Board
          cards={cards}
          handleCard={handleCard}
          animating={animating}
          gameEnded={gameEnded}
        />
      </section>
      <Timer
        minutes={minutes}
        seconds={seconds}
        gameEnded={gameEnded}
      />
    </main>
  );
}

export default App;