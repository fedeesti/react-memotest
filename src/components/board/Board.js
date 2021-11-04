import React, { useState } from 'react';
import Card from './Card';
import background from '../img/shenlong.jpg';
import './Board.css';

const useMemotestGame = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isPair, setIsPair] = useState([]);
    const [wonPairs, setWonPairs] = useState(0);
    const winner = wonPairs > 7;

    const handleCard = (e) => {
        setIsPair([...isPair, e.target.alt]);
        setIsFlipped(!isFlipped);
        // const flippedMemoBlock = { ...e.target.offsetParent, flipped: true };
        console.log(e.target.offsetParent);
    }

    if(isPair.length === 2) {
        if(isPair[0] === isPair[1]) {
            setWonPairs(wonPairs + 1);
            setIsPair([]);
        } else {
            setIsPair([]);
            // setTimeout(() => {

            // }, 700)
        }
    }


    if(winner){
        console.log('ganaste!')
    }

    return { handleCard, isFlipped };
}

const Board = (props) => {
    const { handleCard, isFlipped } = useMemotestGame();

    const boardStyle = {
        backgroundImage: 'url(' + background + ')',
        backgroundSize: '100% 100%'
      };


    return(
        <section className="board" style={boardStyle}  >
            {
                (props.cards).map((card, i) => (
                    <Card
                        onClick={handleCard}
                        flipped={isFlipped}
                        key={i}
                        alt={card.name}
                        src={card.img}
                        id={i}
                    />
                ))
            }
        </section>
    )
}

export default Board;