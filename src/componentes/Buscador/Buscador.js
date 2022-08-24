import './buscador.scss';
import { ImSpoonKnife } from 'react-icons/im';
import { useRef } from 'react';
import { useQueryChangeContext } from '../../providers/queryProviders';

const Buscador = () => {
  const setQuery = useQueryChangeContext();
  const headerSearch = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery((prevState) => ({
      ...prevState,
      q: headerSearch.current.value,
    }));
  };

  return (
    <div className='wrapper-buscador'>
        <form className="wrapper-input" onSubmit={handleSubmit}>
            <label htmlFor="search-job" id='bag-label-icon'><ImSpoonKnife/></label>
            <input type="search" id='search-job' htmlFor='bag-label-icon' placeholder='Ingredients, dish name...'
            ref={headerSearch} />
            <button type="submit"className='button-search' >Search</button>
        </form>
    </div>
  );
};

export default Buscador;
