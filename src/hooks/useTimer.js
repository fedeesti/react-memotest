import { useState, useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let id;
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


const useTimer = (gameEnded) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    console.log('de useTimer ' + gameEnded);

    useInterval(() => {
      setSeconds(seconds + 1);

      if(seconds === 59) {
        setSeconds(0);
        setMinutes(minutes + 1);
      }
    }, gameEnded ? null : 1000);

    return { minutes, seconds };
  }

  export default useTimer;