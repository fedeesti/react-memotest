import front from '../img/fondo.jpg';
import './Card.css';

const Card = ({src, alt, id, flipped, onClick}) => {
    return(
        <div
            className={'cards ' + (flipped ? 'flip' : '')}
            key={id}
            id={id}
        >
        <img src={front} alt={alt} id="front" onClick={(e) => onClick(e)} />
        <img src={src} alt={alt} id="back" />
        </div>
    )
}

export default Card;