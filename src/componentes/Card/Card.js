import './card.scss';
import { BiWorld } from 'react-icons/bi';
import { FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import NotFound from '../../assets/imagenes/notfound.png';
import { useQueryChangeContext } from '../../providers/queryProviders';

const Card = ({
  to,
  img,
  companyName,
  position,
  scheduleType,
  location,
  postedAt,
  id,
}) => {
  const setQuery = useQueryChangeContext();
  const handleClick = () => {
    setQuery((prevState) => ({
      ...prevState,
      idJob: id,
    }));
  };
  return (
    <Link to={`info/${to}`} className='card' onClick={() => handleClick(id)}>
      <img src={!img ? NotFound : img} alt={`info/${companyName}`} />
      <div className='info-wrapper'>
        <div className='columna-uno'>
          <h4 className='nombre-empresa'>{companyName}</h4>
          <p className='puesto'>{position}</p>
          <p className='tiempo'>{scheduleType}</p>
        </div>
        <div className='info-extra columna-dos'>
          <div className='info'>
            <BiWorld className='icon-info' /> <p className='pais'>{location}</p>
          </div>
          <div className='info'>
            <FiClock className='icon-info' />
            <p className='fecha-posteo'>{postedAt}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
