import './card.scss';
import { FaPenFancy } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import NotFound from '../../assets/imagenes/notfound.png';
import { useQueryChangeContext } from '../../providers/queryProviders';

const Card = ({
  to,
  img,
  recipeName,
  description,
  yields,
  credits,
  totalTime,
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
      <img src={!img ? NotFound : img} alt={`info/${recipeName}`} />
      <div className='info-wrapper'>
        <div className='columna-uno'>
          <h4 className='nombre-receta'>{recipeName}</h4>
          <p className='descripcion'>{description}</p>
          <p className='tiempo'>{yields}</p>
        </div>
        <div className='info-extra columna-dos'>
          <div className='info'>
            <FaPenFancy className='icon-info' /> <p className='pais'>{credits}</p>
          </div>
          <div className='info'>
            <FiClock className='icon-info' />
            <p className='fecha-posteo'>{totalTime}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
