import { useState, useEffect, useRef } from 'react';

// const useTimer = gameEnded => {
//     const [minutes, setMinutes] = useState(0);
//     const [seconds, setSeconds] = useState(0);

//     useEffect(() => {
//         let timer = setTimeout(() => {
//             setSeconds(seconds + 1);

//             if(seconds === 59){
//                 setSeconds(0);
//                 setMinutes(minutes + 1);
//             }

//             if(gameEnded) {
//                 clearTimeout(timer);
//             }
//         }, 1000);
//         return () => clearTimeout(timer);
//     }, [seconds]);

//     return { seconds, minutes};
// }

// export default useTimer;

const useTimer = gameEnded => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useInterval(() => {
      setSeconds(seconds + 1);

      if(seconds === 59) {
          setSeconds(0);
          setMinutes(minutes + 1);
      }
    }, !gameEnded ? 1000 : null);

    return { minutes, seconds };
  }

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  export default useTimer;