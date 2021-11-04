import cell from './img/cell.png';
import gohan from './img/gohan.png';
import goku from './img/goku.png';
import gotenks from './img/gotenks.png';
import majinboo from './img/majinboo.png';
import piccolo from './img/piccolo.png';
import saibaman from './img/saibaman.png';
import vegeta from './img/vegeta.png';

const cardArray = [
        {
          name: 'cell',
          img: cell,
        },
        {
          name: 'gohan',
          img: gohan,
        },
        {
          name: 'goku',
          img: goku,
        },
        {
          name: 'gotenks',
          img: gotenks,
        },
        {
          name: 'majinboo',
          img: majinboo,
        },
        {
          name: 'piccolo',
          img: piccolo,
        },
        {
          name: 'saibaman',
          img: saibaman,
        },
        {
          name: 'vegeta',
          img: vegeta,
        }
];

const allCards = cardArray.concat(cardArray);
const cards = allCards.sort(() => 0.5 - Math.random());

export default cards;