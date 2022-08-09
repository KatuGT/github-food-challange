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
          <label htmlFor='location' id='world-label-icon'>
            <BiWorld />
          </label>
          <input
            type='search'
            id='location'
            htmlFor='world-label-icon'
            placeholder='City, state, zip code or country'
          />
        </form>
        <form className="location-radiobtns">
          <div className="country">
            <input type="radio" id="london" name='country'/>
            <label htmlFor="london">London</label>
          </div>
          <div className="country">
            <input type="radio" id="amsterdam" name='country' />
            <label htmlFor="amsterdam">Amsterdan</label>
          </div>
          <div className="country">
            <input type="radio" id="newYork" name='country' />
            <label htmlFor="newYork">New yowk</label>
          </div>
          <div className="country">
            <input type="radio" id="berlin" name='country' />
            <label htmlFor="berlin">Berlin</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filtro;
