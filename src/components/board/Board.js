import React, { useState } from 'react';
import Card from './Card';
import background from '../img/shenlong.jpg';
import './Board.css';


const useMemotestGame = () => {
    const [isFlipped, setIsFlipped] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    const [isPair, setIsPair] = useState([]);
    const [selectedID, setSelectedID] = useState(null);
    const [wonPairs, setWonPairs] = useState(0);
    const winner = wonPairs > 7;

    const handleCard = (id, alt) => {
        setIsPair([...isPair, alt]);
        let newIsFlipped = [...isFlipped];
        newIsFlipped.splice(id, 1, true);
        setIsFlipped(newIsFlipped);

        if(selectedID === null) {
            setSelectedID(id);
        }

        if(isPair.length === 2) {
            if(isPair[0] === isPair[1]) {
                console.log('if')
                setWonPairs(wonPairs + 1);
                setIsPair([]);
                setSelectedID(null);
            } else {
                console.log('else')
                setTimeout(() => {
                    setIsPair([]);
                    newIsFlipped.splice(id, 1, false);
                    newIsFlipped.splice(selectedID, 1, false);
                    setIsFlipped(newIsFlipped);
                    setSelectedID(null);
                }, 700);
            }
        }
            console.log(isPair)
            console.log(isPair.length)
    }

    if(winner){
        console.log('ganaste!')
    }
    return { handleCard, isFlipped };
}

// const generateKey(name) {
//     if (name )
// }

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
                        flipped={isFlipped[i]}
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