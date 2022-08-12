import './card.scss';
import { BiWorld } from 'react-icons/bi';
import { FiClock } from 'react-icons/fi';
import LogoGoogle from '../../assets/imagenes/logoGoogle.jpg';

const Card = () => {
  return (
    <div className='card'>
      <img src={LogoGoogle} alt='logo empresa' />
      <div className='info-wrapper'>
        <h4 className='nombre-empresa'>Kasisto</h4>
        <p className='puesto'>Front-End Software Engineer</p>
        <p className='tiempo'>Full time</p>
        <div className='info-extra'>
          <div className='info'>
            <BiWorld className='icon-info' /> <p className='pais'>New York</p>
          </div>
          <div className='info'>
            <FiClock className='icon-info' />
            <p className='fecha-posteo'>5 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
