import './filtro.scss';
import { BiWorld } from 'react-icons/bi';

const Filtro = () => {
  return (
    <div className='wrapper-filtro'>
      <div className='check-fulltime'>
        <input type='checkbox' id='fulltime' />
        <label htmlFor='fulltime'>Full time</label>
      </div>
      <div className='wrapper-locacion'>
        <p className='location-title'>LOCATION</p>
        <form className='wrapper-input'>
          <label htmlFor='search-job' id='world-label-icon'>
            <BiWorld />
          </label>
          <input
            type='search'
            id='search-job'
            htmlFor='world-label-icon'
            placeholder='City, state, zip code or country'
          />
        </form>
      </div>
    </div>
  );
};

export default Filtro;
