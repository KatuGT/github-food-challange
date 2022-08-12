import './filtro.scss';
import { BiWorld } from 'react-icons/bi';
import { useQueryChangeContext } from '../../providers/queryProviders';

const Filtro = () => {
  const setQuery = useQueryChangeContext();

  const handleLocation = (e) => {
    // console.log(e.target.id);
    setQuery({ location: e.target.id });
  };

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
        <form className='location-radiobtns' onChange={handleLocation}>
          <div className='country'>
            <input type='radio' id='london' name='country' defaultChecked />
            <label htmlFor='london'>London</label>
          </div>
          <div className='country'>
            <input type='radio' id='amsterdam' name='country' />
            <label htmlFor='amsterdam'>Amsterdam</label>
          </div>
          <div className='country'>
            <input type='radio' id='newYork' name='country' />
            <label htmlFor='newYork'>New York</label>
          </div>
          <div className='country'>
            <input type='radio' id='berlin' name='country' />
            <label htmlFor='berlin'>Berlin</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filtro;
