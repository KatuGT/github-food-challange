import './buscador.scss';
import { BsBag } from 'react-icons/bs';

const Buscador = () => {
  return (
    <div className='wrapper-buscador'>
        <form className="wrapper-input">
            <label htmlFor="search-job" id='bag-label-icon'><BsBag/></label>
            <input type="search" id='search-job' htmlFor='bag-label-icon' placeholder='Title, companies, expertise or benefits' />
            <button type="submit"className='button-search' >Search</button>
        </form>
    </div>
  );
};

export default Buscador;
