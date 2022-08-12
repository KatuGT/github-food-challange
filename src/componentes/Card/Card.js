import './card.scss';
import { BiWorld } from 'react-icons/bi';
import { FiClock } from 'react-icons/fi';
import NotFound from '../../assets/imagenes/notfound.png';

const Card = ({
  img, companyName, position, scheduleType, location, postedAt,
}) => {
  return (
    <div className='card'>
      <img src={!img ? NotFound : img} alt='logo de ' />
      <div className='info-wrapper'>
        <h4 className='nombre-empresa'>{companyName}</h4>
        <p className='puesto'>{position}</p>
        <p className='tiempo'>{scheduleType}</p>
        <div className='info-extra'>
          <div className='info'>
            <BiWorld className='icon-info' /> <p className='pais'>{location}</p>
          </div>
          <div className='info'>
            <FiClock className='icon-info' />
            <p className='fecha-posteo'>{postedAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
