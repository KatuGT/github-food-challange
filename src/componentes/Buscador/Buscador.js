import './buscador.scss';
import { BsBag } from 'react-icons/bs';

const Buscador = () => {
  return (
    <div className='wrapper-buscador'>
        <div className="wrapper-input">
            <label htmlFor="search-job" id='bag-label-icon'><BsBag/></label>
            <input type="search" id='search-job' placeholder='Title, companies, expertise or benefits' />
            <button type="submit"className='button-search' >Search</button>
        </div>
    </div>
  );
};

export default Buscador;
