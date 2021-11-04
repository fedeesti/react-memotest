import React from 'react';
import Board from './components/board/Board';
import cards from './components/initial-cards';
import './App.css';

// { useEffect, useState }

function App() {
  // const [count, setCount] = useState(0);
  // const gameEnded = false;

  return (
    <div className="App">
      <h1>Memotest</h1>
      {/* <WinnerScore show={gameEnded ? true : false} onRestart=''></WinnerScore> */}
      <section className="memotest">
        <Board cards={cards}></Board>
      </section>

      {/* <Timer count={count}></Timer> */}
    </div>
  );
}

export default App;